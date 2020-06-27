
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
            document.location.href = "./";
        }).fail(function () {
            $('#messageForg').addClass('wrong');
            // msg.innerHTML = "Сервер недоступен";
        });
    }
});