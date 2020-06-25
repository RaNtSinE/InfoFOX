let captcha;


setInterval(function () {
    let dataReCaptcha = $("#g-recaptcha-response").val();

    capt = document.getElementsByClassName("g-recaptcha");
    ent = document.getElementsByClassName("create");

    if (dataReCaptcha != "" && dataReCaptcha != undefined) {
        captcha = document.getElementById('g-recaptcha-response').value;
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

$('.create').on('click',function()
{
    let success = 1;
    let username = document.getElementById('id_username');
    let email = document.getElementById('id_mail');
    let password = document.getElementById('id_password_1');
    let repeatPassword = document.getElementById('id_password_2');

    if (username.value == '')
    {
        success = 0;
        $('#id_username').addClass('wrong');
        username.placeholder = "Это поле должно быть заполнено";
    }
    if(email.value == '')
    {
        success = 0;
        $('#id_mail').addClass('wrong');
        email.placeholder = "Это поле должно быть заполнено";
    }
    if(password.value == '')
    {
        success = 0;
        $('#id_password_1').addClass('wrong');
        password.placeholder = "Это поле должно быть заполнено";
    }
    if(repeatPassword.value == '')
    {
        success = 0;
        $('#id_password_2').addClass('wrong');
        repeatPassword.placeholder = "Это поле должно быть заполнено";
    }

    if(password.value.length < 8) {
        success = 0;
        $('#id_password_1').addClass('wrong');
        password.value = '';
        password.placeholder = "Короткий пароль";
    }

    if (password.value != repeatPassword.value)
    {
        success = 0;
        $('#id_password_2').addClass('wrong');
        repeatPassword.value = '';
        repeatPassword.placeholder = "Пароли не совпадают";
    }

    if (success === 1)
    {
        $.ajax({
            type: "POST",
            url: pathToServer + "/auth/users/",
            data: {username: username.value, email:email.value, password: password.value, recaptcha: captcha}
        }).done(function (data) {
            document.location.href = "/";
        }).fail(function (data) {
            // alert(JSON.stringify(data));
            let errors = document.getElementsByClassName("errorlist")[0]
                .getElementsByTagName("li");
            if (username !== undefined) {
                $('#id_username').addClass('wrong');
                username.value = '';
                username.placeholder = "Пользователь с данным именем уже существует";
            }
            if (email !== undefined) {
                $('#id_email').addClass('wrong');
                email.value = '';
                email.placeholder = data.responseJSON.email;
            }
            if (recaptcha !== undefined) {
                let errors = document.getElementsByClassName("errorlist")[0]
                    .getElementsByTagName("li");
                errors[0].innerHTML = "Ошибка ввода капчи";
            }
        });
    }
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
