function loadActivation()
{
    $.ajax({
        type: "GET",
        url: pathToServer + "/api/userpage/",
        headers: {
            "Authorization":'Token ' + localStorage.getItem("token")
        }
    }).done(function (data) {
        loadProf(data)
    }).fail(function (xhr, textStatus) {
    });

    function loadProf(data)
    {
        if (data.length <= 0)
        {
            let info = document.getElementsByClassName('changeProfileText');
            info[0].innerHTML = "Вы еще не создали ни одного профиля. " +
                "При активации браслета один профиль " +
                "будет создан автоматически";
        }
        let profiles = document.getElementsByClassName('profiles');

        for (let i = 0; i < data.length; i++)
        {
            profiles[0].insertAdjacentHTML('beforeend',
                '            <a class="profileBlock">\n' +
                '            </a>');
        }
        class ProfileActivatedBlocks extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                return React.createElement(
                    'div',
                    {className: "profileContent"},
                    React.createElement(
                        'p',
                        {},
                        this.props.Name
                    ),
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
                    React.createElement(
                        'input',
                        {name: "profile_id", className: "form-control profile_id", type: "hidden", value: this.props.Id},
                    ),
                );
            }
        }
        let count = 0;
        document.querySelectorAll('.profileBlock')
            .forEach(domContainer => {
                ReactDOM.render(
                    React.createElement(ProfileActivatedBlocks,{Name: data[count].name, Id: data[count].id}),
                    domContainer
                );
                count++;
            });


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

        let brac_id = getAllUrlParams().id;

        let profs = document.getElementsByClassName("profileBlock");
        let profileCheck = [];
        profileCheck[0] = 1;
        let profile_id = -1;

        for(let i = 0; i < profs.length; i++)
        {
            if(profileCheck[i] === 1)
            {
                profs[i].classList.add("activated");
            }
        }

        for (let i = 0; i < profs.length; i++)
        {
            let l = i;
            profs[i].addEventListener("click",function () {
                if(profileCheck[l] !== 1)
                {
                    profileCheck[l] = 1;
                    this.classList.add('activated');
                    let profileId = this.getElementsByClassName('profile_id');
                    profile_id = profileId[0].value;
                    for(let j = 0; j < profs.length; j++)
                    {
                        if(l !== j)
                        {
                            profileCheck[j] = 0;
                            profs[j].classList.remove('activated');
                        }
                    }
                }
            }, false);
        }

        $('.activationButton').on('click', function () {

            let code = document.getElementsByClassName('braclet_code')[0].value;
            $.ajax({
                type: "POST",
                url: pathToServer + "/api/userpage/bracelet/registration/" + brac_id,
                headers: {
                    "Authorization":'Token ' + localStorage.getItem("token")
                },
                data: {unique_code: code, profile_id: profile_id}
            }).done(function (data) {
                document.location.href = "./userpage";
            }).fail(function (xhr, textStatus) {
            });
        });
    }
}