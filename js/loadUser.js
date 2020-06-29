'use strict';

function loadUser()
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

    let prof_id = getAllUrlParams().id;

    $.ajax({
        type: "GET",
        url: pathToServer + "/api/userpage/profile/" + prof_id,
        headers: {
            "Authorization":localStorage.getItem("token")
        }
    }).done(function (data) {
        if(data.is_owner)
            loadInterface();
        loadUser(data.blocks, data.is_owner);
    }).fail(function (xhr, textStatus) {
        document.location.href = "./userpage";
    });

    function loadInterface() {
        let contentBlock = document.getElementsByClassName('content')[0];
        contentBlock.insertAdjacentHTML('beforebegin', '<header class="header" id="head">\n' +
            '    <nav class="nav">\n' +
            '        <a class="nav__logo" href="./">\n' +
            '            <p class="nav__logo-text">InfoFOX</p>\n' +
            '            <img src="img/Fox.png" class="nav__logo-picture" alt="">\n' +
            '        </a>\n' +
            '        <div class="nav__toggle">\n' +
            '            <svg id="ham" class="nav__burger nav__burger--rotate" viewBox="0 0 100 100"\n' +
            '                 width="60" onclick="this.classList.toggle(\'nav__burger--active\')">\n' +
            '                <path\n' +
            '                        class="nav__burger-line nav__burger--top"\n' +
            '                        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />\n' +
            '                <path\n' +
            '                        class="nav__burger-line nav__burger--middle"\n' +
            '                        d="m 30,50 h 40" />\n' +
            '                <path\n' +
            '                        class="nav__burger-line nav__burger--bottom"\n' +
            '                        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />\n' +
            '            </svg>\n' +
            '        </div>\n' +
            '        <div class="menu"></div>\n' +
            '    </nav>\n' +
            '    <div class="feedback" id="letterGhost">\n' +
            '        <div class="feedback__inner" id="letterWindow">\n' +
            '            <div class="feedback__select-outer">\n' +
            '                <div class="feedback__select">\n' +
            '                    <select name="select">\n' +
            '                        <option class="feedback__select-item" value="0" hidden disabled selected>Тема сообщения</option>\n' +
            '                        <option class="feedback__select-item" value="1">Вопрос по продукту</option>\n' +
            '                        <option class="feedback__select-item" value="2">Предложение</option>\n' +
            '                        <option class="feedback__select-item" value="3">Отзыв</option>\n' +
            '                        <option class="feedback__select-item" value="4">Отклик на вакансию</option>\n' +
            '                        <option class="feedback__select-item" value="5">Жалоба</option>\n' +
            '                    </select>\n' +
            '                </div>\n' +
            '                <div id="letterClose">\n' +
            '                    <a class="feedback__letter-close-btn">\n' +
            '                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                            <path d="M9.46585 7.99996L15.6959 1.76969C16.1014 1.36443 16.1014 0.709193 15.6959 0.30394C15.2907 -0.101313 14.6354 -0.101313 14.2302 0.30394L7.99992 6.53421L1.76983 0.30394C1.36439 -0.101313 0.709336 -0.101313 0.304083 0.30394C-0.101361 0.709193 -0.101361 1.36443 0.304083 1.76969L6.53417 7.99996L0.304083 14.2302C-0.101361 14.6355 -0.101361 15.2907 0.304083 15.696C0.506045 15.8981 0.771595 15.9997 1.03696 15.9997C1.30232 15.9997 1.56768 15.8981 1.76983 15.696L7.99992 9.4657L14.2302 15.696C14.4323 15.8981 14.6977 15.9997 14.9631 15.9997C15.2284 15.9997 15.4938 15.8981 15.6959 15.696C16.1014 15.2907 16.1014 14.6355 15.6959 14.2302L9.46585 7.99996Z"/>\n' +
            '                        </svg>\n' +
            '                    </a>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <p class="feedback__error-message" id="message">Некорректный email</p>\n' +
            '            <div class="feedback__form" id="letterInputZone">\n' +
            '                <input type="email" name="name" maxlength="200"\n' +
            '                       class="feedback__form-address" id="letterAddress" placeholder="Ваш почтовый адрес">\n' +
            '\n' +
            '                <textarea name="content" rows="9"\n' +
            '                          class="feedback__form-content" id="letterContent" placeholder="Текст сообщения" ></textarea>\n' +
            '            </div>\n' +
            '            <a class="feedback__letter-submit" id="letterSubmit">\n' +
            '                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                    <path d="M21.75 0H2.25002C1.00928 0 0 1.00928 0 2.25002V15.75C0 16.9907 1.00928 18 2.25002 18H21.75C22.9907 18 24 16.9907 24 15.75V2.25002C24 1.00928 22.9907 0 21.75 0ZM21.75 1.49999C21.8519 1.49999 21.9488 1.52114 22.0374 1.55806L12 10.2576L1.9625 1.55806C2.05113 1.52119 2.14807 1.49999 2.24997 1.49999H21.75ZM21.75 16.5H2.25002C1.8362 16.5 1.49999 16.1638 1.49999 15.75V3.14282L11.5085 11.8169C11.6499 11.9392 11.825 12 12 12C12.175 12 12.3501 11.9392 12.4915 11.8169L22.5 3.14282V15.75C22.5 16.1638 22.1638 16.5 21.75 16.5Z" fill="#093D64"/>\n' +
            '                </svg>\n' +
            '            </a>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</header>')
        loadMenu();
        select();
        contentBlock.insertAdjacentHTML('afterend','<footer>\n' +
            '    <div class="upline"></div>\n' +
            '    <div class="footerContent">\n' +
            '        <p class="logoFoot">InfoFOX</p>\n' +
            '        <div class="aboutUs">\n' +
            '            <p>Наш главный офис:</p>\n' +
            '            <p>Главный офис - Ул. Федора Лыткина д.8 кв.331</p>\n' +
            '        </div>\n' +
            '        <div class="social">\n' +
            '            <ul>\n' +
            '                <li class="soc"><p>Мы в социальных сетях</p></li>\n' +
            '                <li class="firstSoc"><a href="https://vk.com/public196214243">ВКонтакте</a></li>\n' +
            '                <li><a href="https://www.facebook.com/groups/254087699024422/">Facebook</a></li>\n' +
            '                <li><a href="https://t.me/infofox1">Telegram</a></li>\n' +
            '            </ul>\n' +
            '        </div>\n' +
            '        <div class="vac">\n' +
            '            <ul>\n' +
            '                <li class="sot"><p>Навигация</p></li>\n' +
            '                <li class="vacan"><a href="news">Новости</a> </li>\n' +
            '                <li class=""><a href="map">Информация</a> </li>\n' +
            '                <li class=""><a href="jobs">Вакансии</a> </li>\n' +
            '            </ul>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="downline"></div>\n' +
            '</footer>');
    }

    function loadUser(data, is_owner)
    {
        let add = document.getElementsByClassName('add');
        let user = document.getElementsByClassName('User');
        if (is_owner)
        {
            user[0].insertAdjacentHTML('afterbegin',
                '        <a id="sav">Сохранить все блоки</a>\n' +
                '        <p id="suc">Блоки сохранены!</p>\n' +
                '        <p id="alert">Заполните или удалите пустые блоки</p>');
            user[0].insertAdjacentHTML('beforeend',
                        '   <a class="userInfo add">\n' +
                        '       <div class="inputZone plus">\n' +
                        '           <div>\n' +
                        '                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                        '                        <path class="circle" d="M25 0C11.2144 0 0 11.2144 0 25C0 38.7856 11.2144 50 25 50C38.7856 50 50 38.7856 50 25C50 11.2144 38.7856 0 25 0Z" fill="#F3F3F3"/>\n' +
                        '                        <path class="plusInCircle" d="M35.9367 27.083H27.0824V35.9373C27.0824 37.0875 26.1494 38.0205 24.9992 38.0205C23.8491 38.0205 22.916 37.0875 22.916 35.9373V27.083H14.0617C12.9116 27.083 11.9785 26.15 11.9785 24.9998C11.9785 23.8497 12.9116 22.9166 14.0617 22.9166H22.916V14.0623C22.916 12.9122 23.8491 11.9791 24.9992 11.9791C26.1494 11.9791 27.0824 12.9122 27.0824 14.0623V22.9166H35.9367C37.0869 22.9166 38.0199 23.8497 38.0199 24.9998C38.0199 26.15 37.0869 27.083 35.9367 27.083Z" fill="#093D64"/>\n' +
                        '                    </svg>\n' +
                        '           </div>\n' +
                        '       </div>\n' +
                        '   </a>\n' +
                '<div>' +
                        '   <div class="shading">\n' +
                        '       <div class="wind deleteWind backWind">\n' +
                        '           <div class="ChangeInfo backInfo">\n' +
                        '                   <p>Вернуться на личную страницу?</p>\n' +
                        '           </div>\n' +
                        '           <div class="backWarn">\n' +
                        '                   <p>Несохраненные результаты исчезнут</p>\n' +
                        '           </div>\n' +
                        '           <a class="backToProfile">Вернуться</a>\n' +
                        '           <a class="close closeBack">Отмена</a>\n' +
                        '       </div>\n' +
                        '   </div>\n' +
                        '   <div class="back"><a>Назад</a></div>\n' +
                '</div>');

            if(data.length > 29)
            {
                let savbtn = document.getElementsByClassName('add');
                savbtn[0].style.display = "none";
            }

            for (let i = 0; i < data.length; i++) {
                add[0].insertAdjacentHTML('beforebegin', '<div class="userInfo"></div>');
            }
            $('.back a').on('click',function () {
                this.parentNode.parentNode.classList.add("open");
            });

            $('.backToProfile').on('click', function () {
                document.location.href = "./userpage";
            });
        }
        else
        {
            user[0].setAttribute('id', "nologgined");
            for (let i = 0; i < data.length; i++) {
                user[0].insertAdjacentHTML('beforeend', '<div class="userInfo"></div>');
            }
        }

        let checkBlocks = document.getElementsByClassName('userInfo');
        if(checkBlocks.length < 1)
        {
            let container = document.getElementById('nologgined');
            container.insertAdjacentHTML('afterbegin', '<p class="spaceProfile">Профиль пуст</p>');
        }

        let count = 0;

        class Block extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                if (this.props.IsOwner) {

                    return React.createElement(
                        'div',
                        {className: "innerBlock"},
                        React.createElement(
                            'div',
                            {className: "shading"},
                            React.createElement(
                                'div',
                                {className: "wind deleteWind"},
                                React.createElement(
                                    'div',
                                    {className: "ChangeInfo DeleteInfo"},
                                    React.createElement(
                                        'p',
                                        {},
                                        'Удалить блок?'
                                    )
                                ),
                                React.createElement(
                                    'a',
                                    {className: "delete"},
                                    'Удалить'
                                ),
                                React.createElement(
                                    'a',
                                    {className: "close"},
                                    'Отмена'
                                )
                            ),
                        ),
                        React.createElement(
                            'a',
                            {className: "but del"},
                            React.createElement(
                                'svg',
                                {
                                    width: "25", height: "25", viewBox: "0 0 25 25", fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                },
                                React.createElement(
                                    'g',
                                    {},
                                    React.createElement(
                                        'path',
                                        {
                                            d: "M15.9478 9.05756C15.6244 9.05756 15.3623 9.31965 15.3623 " +
                                                "9.64304V20.7086C15.3623 21.0318 15.6244 21.2941 15.9478 21.2941C16.2712 " +
                                                "21.2941 16.5333 21.0318 16.5333 20.7086V9.64304C16.5333 9.31965 16.2712 " +
                                                "9.05756 15.9478 9.05756Z", fill: "#093D64"
                                        },
                                    ),
                                    React.createElement(
                                        'path',
                                        {
                                            d: "M9.03958 9.05756C8.7162 9.05756 8.4541 9.31965 8.4541 " +
                                                "9.64304V20.7086C8.4541 21.0318 8.7162 21.2941 9.03958 21.2941C9.36297" +
                                                " 21.2941 9.62506 21.0318 9.62506 20.7086V9.64304C9.62506 9.31965 9.36297" +
                                                " 9.05756 9.03958 9.05756Z", fill: "#093D64"
                                        },
                                    ),
                                    React.createElement(
                                        'path',
                                        {
                                            d: "M4.00465 7.44265V21.8676C4.00465 22.7202 4.31729 23.5209 4.86343 " +
                                                "24.0954C5.40705 24.6715 6.1636 24.9985 6.95537 24.9999H18.0328C18.8248 " +
                                                "24.9985 19.5813 24.6715 20.1247 24.0954C20.6709 23.5209 20.9835 22.7202 " +
                                                "20.9835 21.8676V7.44265C22.0692 7.15448 22.7727 6.10565 22.6274 " +
                                                "4.99164C22.482 3.87786 21.5331 3.0447 20.4097 " +
                                                "3.04447H17.4121V2.31262C17.4155 1.69719 17.1722 1.10622 16.7365 " +
                                                "0.671456C16.3008 0.236921 15.709 -0.00504608 15.0935" +
                                                " -1.46257e-05H9.89465C9.27921 -0.00504608 8.68733 0.236921 8.25165 " +
                                                "0.671456C7.81598 1.10622 7.57264 1.69719 7.57607 " +
                                                "2.31262V3.04447H4.57846C3.45508 3.0447 2.50619 3.87786 " +
                                                "2.36074 4.99164C2.21551 6.10565 2.919 7.15448 4.00465 7.44265ZM18.0328" +
                                                " 23.829H6.95537C5.95434 23.829 5.17561 22.969 5.17561" +
                                                " 21.8676V7.49411H19.8126V21.8676C19.8126 22.969 19.0338 23.829 18.0328 " +
                                                "23.829ZM8.74702 2.31262C8.74314 2.00776 8.86298 1.71434 9.07933 " +
                                                "1.49913C9.29545 1.28392 9.58956 1.16568 9.89465 1.17094H15.0935C15.3986" +
                                                " 1.16568 15.6927 1.28392 15.9088 1.49913C16.1252 1.71411 16.245 2.00776" +
                                                " 16.2411 2.31262V3.04447H8.74702V2.31262ZM4.57846 4.21543H20.4097C20.9918" +
                                                " 4.21543 21.4636 4.68724 21.4636 5.26929C21.4636 5.85134 20.9918 6.32315" +
                                                " 20.4097 6.32315H4.57846C3.99642 6.32315 3.5246 5.85134 3.5246 " +
                                                "5.26929C3.5246 4.68724 3.99642 4.21543 4.57846 4.21543Z", fill: "#093D64"
                                        },
                                    ),
                                    React.createElement(
                                        'path',
                                        {
                                            d: "M12.4947 9.05756C12.1713 9.05756 11.9092 9.31965 11.9092 " +
                                                "9.64304V20.7086C11.9092 21.0318 12.1713 21.2941 12.4947 21.2941C12.818 " +
                                                "21.2941 13.0801 21.0318 13.0801 20.7086V9.64304C13.0801 9.31965 12.818 " +
                                                "9.05756 12.4947 9.05756Z", fill: "#093D64"
                                        },
                                    )
                                ),
                                React.createElement(
                                    'defs',
                                    {},
                                    React.createElement(
                                        'clipPath',
                                        {id: "clip0"},
                                        React.createElement(
                                            'rect',
                                            {width: "25", height: "25", fill: "white"},
                                        ),
                                    ),
                                ),
                            ),
                        ),
                        React.createElement(
                            'div',
                            {className: "inputZone"},
                            React.createElement(
                                'input',
                                {
                                    type: "text", name: "name", maxLength: "65", className: "form-control block_name",
                                    placeholder: "Введите имя блока...", autoComplete: "off", defaultValue: this.props.Name
                                },
                            ),
                            React.createElement(
                                'textarea',
                                {
                                    name: "content", className: "form-control block_content expand", maxLength: "650",
                                    placeholder: "Введите текст блока...", autoComplete: "off", defaultValue: this.props.Text
                                },
                            ),
                            React.createElement(
                                'input',
                                {
                                    name: "block_id",
                                    className: "form-control block_id",
                                    type: "hidden",
                                    defaultValue: this.props.Id
                                }
                            ),
                        )
                    );
                }
                else
                {
                    return React.createElement(
                        'div',
                        {className: "innerBlock"},
                        React.createElement(
                            'div',
                            {className: "inputZone"},
                            React.createElement(
                                'p',
                                {className: "form-control block_name"},
                                this.props.Name
                            ),
                            React.createElement(
                                'p',
                                {className: "form-control block_content expand"},
                                this.props.Text
                            ),
                            React.createElement(
                                'input',
                                {className: "form-control block_id", name: "block_id", type: "hidden",
                                    value: this.props.Id }
                            ),
                        )
                    );
                }
            }
        }

        document.querySelectorAll('.userInfo')
            .forEach(domContainer => {
                if (count < data.length)
                {
                    ReactDOM.render(
                        React.createElement(Block, { Name: data[count].title, Text: data[count].content,
                            Id: data[count].id,  IsOwner: is_owner}),
                        domContainer
                    );
                }
                count ++;
            });

        if (isLogin)
        {
            userScript(prof_id);
            jQuery_1_3_2("textarea[class*=expand]").TextAreaExpander();
            jQuery_1_3_2("input[class*=expand]").TextAreaExpander();
        }
    }
}

