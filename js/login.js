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
            document.location.href = "./";
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
    alert("success");
}

$(".VKlogin").on('click', function () {
    document.location.href = "https://oauth.vk.com/authorize?client_id=7517531&scope=65536&redirect_uri=http://coolstorybob.herokuapp.com/vk_login&display=page&response_type=token&v=5.110&revoke=1";
});