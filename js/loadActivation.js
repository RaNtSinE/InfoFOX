function loadActivation()
{

    let profCount = 2;
    if (profCount <= 0)
    {
        let info = document.getElementsByClassName('changeProfileText');
        info[0].innerHTML = "Вы еще не создали ни одного профиля. " +
            "При активации браслета один профиль " +
            "будет создан автоматически";
    }
    let profiles = document.getElementsByClassName('profiles');

    for (let i = 0; i < 2; i++)
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
                    "Название профиля"
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
                    {name: "profile_id", className: "form-control profile_id", type: "hidden", value: "1"},
                ),
            );
        }
    }

    document.querySelectorAll('.profileBlock')
        .forEach(domContainer => {
            ReactDOM.render(
                React.createElement(ProfileActivatedBlocks,{}),
                domContainer
            );
        });

    activation();
}