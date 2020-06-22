setInterval(function () {
    let dataReCaptcha = $("#g-recaptcha-response").val();
    capt = document.getElementsByClassName("g-recaptcha");
    ent = document.getElementsByClassName("create");
    if (dataReCaptcha != "" && dataReCaptcha != undefined) {
        setTimeout(function () {
            capt[0].classList.add("almostHide");
            ent[0].classList.add("create-visible");
            setTimeout(function () {
                capt[0].classList.add("hide");
            }, 500)
        }, 100);
    }
    else
    {
        setTimeout(function () {
            capt[0].classList.remove("hide");
            setTimeout(function () {
                capt[0].classList.remove("almostHide");
                ent[0].classList.remove("create-visible");
            }, 10)
        }, 100);
    }
}, 1000);

$('.enter').on('click',function()
{
    let username = document.getElementById('id_username');
    let email = document.getElementById('id_mail');
    let password = document.getElementById('id_password_1');
    let repeatPassword = document.getElementById('id_password_2');
    $.ajax({
        type: "POST",
        url: pathToServer + "/auth/users/",
        data: {username: username.value, email:email.value, password: password.value, re_password: repeatPassword.value}
    }).done(function (data) {
        document.location.href = "/";
    }).fail(function () {
        let errors = document.getElementsByClassName("errorlist")[0]
            .getElementsByTagName("li");
        errors[0].innerHTML = "Проверьте корректность введенных данных";
    });
});

$('#id_username').on('input',function () {
    let errors = document.getElementsByClassName("errorlist")[0]
        .getElementsByTagName("li");
    errors[0].innerHTML = "";
});

$('#id_password_1').on('input',function () {
    let errors = document.getElementsByClassName("errorlist")[0]
        .getElementsByTagName("li");
    errors[0].innerHTML = "";
});

$('#id_password_2').on('input',function () {
    let errors = document.getElementsByClassName("errorlist")[0]
        .getElementsByTagName("li");
    errors[0].innerHTML = "";
});

$('#id_mail').on('input',function () {
    let errors = document.getElementsByClassName("errorlist")[0]
        .getElementsByTagName("li");
    errors[0].innerHTML = "";
});
