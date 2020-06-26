function loadActivation()
{

    function getAllUrlParams(url) {

        var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

        var obj = {};

        if (queryString) {

            queryString = queryString.split('#')[0];

            var arr = queryString.split('&');

            for (var i=0; i<arr.length; i++) {
                var a = arr[i].split('=');
                var paramNum = undefined;
                var paramName = a[0].replace(/\[\d*\]/, function(v) {
                    paramNum = v.slice(1,-1);
                    return '';
                });
                var paramValue = typeof(a[1])==='undefined' ? true : a[1];
                paramName = paramName.toLowerCase();
                paramValue = paramValue.toLowerCase();
                if (obj[paramName]) {
                    if (typeof obj[paramName] === 'string') {
                        obj[paramName] = [obj[paramName]];
                    }
                    if (typeof paramNum === 'undefined') {
                        obj[paramName].push(paramValue);
                    }
                    else {
                        obj[paramName][paramNum] = paramValue;
                    }
                }
                else {
                    obj[paramName] = paramValue;
                }
            }
        }

        return obj;
    }

    let id = getAllUrlParams().brac_id;

    $.ajax({
        type: "GET",
        url: pathToServer + "/api/userpage/profile/" + id + "/bracelets",
        headers: {
            "Authorization":'Token ' + localStorage.getItem("token")
        }
    }).done(function (data) {
        addBrac(data);
    }).fail(function (xhr, textStatus) {
    });

    function addBrac(bracelets)
    {
        let profiles = document.getElementsByClassName('content__bracelets');

        for (let i = 0; i < bracelets.length; i++)
        {
            profiles[0].insertAdjacentHTML('beforeend',
                '            <a class="content__bracelet-block">\n' +
                '            </a>');
        }
        class ProfileActivatedBlocks extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                return React.createElement(
                    'div',
                    {className: "profileContent profileContent--flexbox"},
                    React.createElement(
                        'div',
                        {className: "profileContent__description"},
                        React.createElement(
                            'p',
                            {className: "profileContent__description-code"},
                            "Код:\t" + this.props.Unique_code
                        ),
                        React.createElement(
                            'p',
                            {className: "profileContent__description-id"},
                            "ID:\t" + this.props.Id
                        ),
                    ),
                    React.createElement(
                        'div',
                        {className: "profileContent__checkbox"},
                        React.createElement(
                            'svg',
                            {className: "circle", width: "50", height: "50", viewBox: "0 0 50 50", fill: "none",
                                xmlns:"http://www.w3.org/2000/svg"},
                            React.createElement(
                                'circle',
                                {cx: "25", cy: "25", r: "25", fill:"#F3F3F3"},
                            ),
                        ),
                        React.createElement(
                            'svg',
                            {className: "check", width: "30", height: "24", viewBox: "0 0 30 24", fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"},
                            React.createElement(
                                'path',
                                {d: "M29.5607 1.42356C28.9749 0.837737 28.0252 0.837737 27.4394 1.42356L9.46843" +
                                        " 19.3947L2.56069 12.4869C1.97493 11.9011 1.02524 11.9012 0.439365 " +
                                        "12.4869C-0.146455 13.0727 -0.146455 14.0224 0.439365 14.6082L8.40776 " +
                                        "22.5765C8.99335 23.1623 9.94374 23.1618 10.5291 22.5765L29.5607 " +
                                        "3.54489C30.1465 2.95912 30.1465 2.00938 29.5607 1.42356Z", fill: "#093D64"},
                            ),
                        ),
                    )
                );
            }
        }
        let count = 0;
        document.querySelectorAll('.content__bracelet-block')
            .forEach(domContainer => {
                ReactDOM.render(
                    React.createElement(ProfileActivatedBlocks,{Unique_code: bracelets[count].unique_code, Id: bracelets[count].id}),
                    domContainer
                );
                count++;
            });

        activation();

        $('.content__btns-cutoff').on("click", function () {
            let active = document.getElementsByClassName('activated')[0];
            let id_brac = active.getElementsByClassName('profileContent__description-id')[0].innerHTML;
            id_brac = id_brac.split('\t');
            id_brac = id_brac[id_brac.length - 1];

            $.ajax({
                type: "POST",
                url: pathToServer + "/api/userpage/profile/" + id + "/disconnect/",
                headers: {
                    "Authorization":'Token ' + localStorage.getItem("token")
                },
                data: {id: id_brac}
            }).done(function (data) {
                document.location.href = "./userpage";
            }).fail(function (xhr, textStatus) {
            });

        });

    }
}