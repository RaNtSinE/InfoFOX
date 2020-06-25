$('.enter').on('click',function()
{
    let username = document.getElementById('id_username');
    let password = document.getElementById('id_password');
    $.ajax({
        type: "POST",
        url: pathToServer + "/auth/token/login",
        data: {username: username.value, password: password.value}
    }).done(function (data) {
        localStorage.setItem('token', data.auth_token);
        document.location.href = "./";
    }).fail(function () {
        let errors = document.getElementsByClassName("errorlist")[0]
            .getElementsByTagName("li");
        errors[0].innerHTML = "Неправильный логин или пароль";
    });
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