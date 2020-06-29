
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

let restoreToken =getAllUrlParams().token;

    $.ajax({
        type: "POST",
        url: pathToServer + "/password_reset/check/",
        data: {token: restoreToken}
    }).done(function(data){
        renderPage();
    }).fail(function (data) {
        document.location.href = "./404";
    });

function renderPage()
{
    let content = document.getElementsByTagName('body')[0];
    content.insertAdjacentHTML('afterbegin', '<header class="header" id="head">\n' +
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
        '</header>\n' +
        '<div class="content">\n' +
        '\n' +
        '    <form action="" method="post" id="newPassword">\n' +
        '        <input type="hidden" name="csrfmiddlewaretoken" value="Oc8l7WMPlACEWNYjqpVKa3JGxsRlcKq86JtHrUvUraU9OuImeDS0tBrIpcmXyln2">\n' +
        '        <p class="change">Смена пароля</p>\n' +
        '        <p class="messagePas">ошибка</p>\n' +
        '        <p class="pas1"><label for="id_password_1">Пароль:</label>\n' +
        '            <input type="password" name="password" autocomplete="current-password" required="" id="id_password_1" placeholder="Новый пароль" maxlength="128"></p>\n' +
        '        <p class="pas2"><label for="id_password_2">Пароль:</label>\n' +
        '            <input type="password" name="password" autocomplete="current-password" required="" id="id_password_2" placeholder="Повторите пароль" maxlength="128"></p>\n' +
        '        <div class="almost-cancel">\n' +
        '            <a class="sub" href="./">Отмена</a>\n' +
        '        </div>\n' +
        '        <div class="almost-enter">\n' +
        '            <a class="sub">Сохранить</a>\n' +
        '        </div>\n' +
        '    </form>\n' +
        '\n' +
        '</div>');
    $('.sub').on('click',function () {
        let newPassword = document.getElementById("id_password_1");
        let confirmNewPassword = document.getElementById("id_password_2");

        // Получение токена из GET
        let regexp = /_ijt=([^&]+)/i;
        if(!!regexp.exec(document.location.search))
            token = regexp.exec(document.location.search)[1];

        let success = 1;

        // Проверка пустого поля
        if(newPassword.value === "")
        {
            success = 0;
            $('#id_password_1').addClass('wrong');

            newPassword.placeholder = "Это поле должно быть заполнено";
        }

        if(confirmNewPassword.value === "")
        {
            success = 0;
            $('#id_password_2').addClass('wrong');

            confirmNewPassword.placeholder = "Это поле должно быть заполнено";
        }

        // FIXME: Проверка на корректность и длину
        let pattern = /^[a-z0-9_-]+$/i;
        if(newPassword.value != ""){
            if(newPassword.value.search(pattern) !== 0){
                $('#id_password_1').addClass('wrong');
                newPassword.placeholder = "Некорректный пароль";
                success = 0;
            }
            if(newPassword.value.length <= 6){
                $('#id_password_1').addClass('wrong');
                newPassword.placeholder = "Короткий пароль";
                success = 0;
            }
        }

        // FIXME: Проверка на совпадение паролей
        if(newPassword.value != confirmNewPassword.value){
            success = 0;
            let message = document.getElementsByClassName('messagePas')[0];
            message.classList.add("wrongMes");
            message.innerHTML = "Пароли не совпадают";
        }

        if(success === 1)
        {
            $.ajax({
                type: "POST",
                url: pathToServer + "/password_reset/confirm/",
                data: {password: newPassword.value, token: restoreToken}
            }).done(function(data){
                document.location.href = "./postNewPassword";
            }).fail(function () {
                $('#messageForg').addClass('wrong');
            });
        }
    });
}

