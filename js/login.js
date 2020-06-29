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

$('.enter').on('click',function()
{
    let success = 1;

    let username = document.getElementById('id_username');
    let password = document.getElementById('id_password');

    if (username.value == '')
    {
        success = 0;
        $('#id_username').addClass('wrong');
        username.placeholder = "Это поле должно быть заполнено";
    }
    if(password.value == '')
    {
        success = 0;
        $('#id_password').addClass('wrong');
        password.placeholder = "Это поле должно быть заполнено";
    }
    if (success === 1) {
        $.ajax({
            type: "POST",
            url: pathToServer + "/auth/token/login",
            data: {username: username.value, password: password.value}
        }).done(function (data) {
            localStorage.setItem('token', "Token " + data.auth_token);
            if(brac_id != undefined)
            {
                document.location.href = "./bracelet?id=" + brac_id;
            }
            else
            {
                document.location.href = "./userpage";
            }

        }).fail(function () {
            let errors = document.getElementsByClassName("errorlist")[0]
                .getElementsByTagName("li");
            errors[0].innerHTML = "Неверный логин или пароль";
        });
    }
});

$('#id_username').on('input',function () {
    let errors = document.getElementsByClassName("errorlist")[0]
        .getElementsByTagName("li");
    errors[0].innerHTML = "";
});

$('#id_password').on('input',function () {
    let errors = document.getElementsByClassName("errorlist")[0]
        .getElementsByTagName("li");
    errors[0].innerHTML = "";
});

var path = location.pathname.split('/');
var path = path[path.length-1];
var path = location.pathname.split('_');
var path = path[path.length-1];
if (path === "success")
{
    let content = document.getElementsByClassName("content")[0];
    content.insertAdjacentHTML('afterbegin', '    <div class="success"><p>Вы успешно зарегистрировались и можете войти</p></div>')
}

$(".VKlogin").on('click', function () {
    if(brac_id != undefined)
    {
        localStorage.setItem("id_brac_for_vk",brac_id);
    }
    else
    {
        localStorage.setItem("id_brac_for_vk","");
    }
    document.location.href = "https://oauth.vk.com/authorize?client_id=7517531&scope=65536&redirect_uri=http://coolstorybob.herokuapp.com/vk_login&display=page&response_type=token&v=5.110&revoke=1";
});