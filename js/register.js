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
            data: {username: username.value, email:email.value, password: password.value, re_password: repeatPassword.value, recaptcha: captcha}
        }).done(function (data) {
            document.location.href = "./postRegister";
        }).fail(function (data) {
            let errors = document.getElementsByClassName("errorlist")[0]
                .getElementsByTagName("li");
            if(data.responseJSON.username != undefined) {
                $('#id_username').addClass('wrong');
                $('#wrongName').addClass('wrongName');
                let msg = document.getElementById('wrongName').getElementsByTagName('p')[0];
                msg.innerHTML = data.responseJSON.username;
            }
            if (data.responseJSON.email != undefined) {
                $('#id_mail').addClass('wrong');
                $('#wrongEmail').addClass('wrongEmail');
                let msg = document.getElementById('wrongEmail').getElementsByTagName('p')[0];
                msg.innerHTML = data.responseJSON.email;
            }
            if (recaptcha !== undefined) {
                grecaptcha.reset();
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
