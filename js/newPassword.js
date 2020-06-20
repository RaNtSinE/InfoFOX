$('.enter').on('click',function () {
    let newPassword = document.getElementById("id_password_1");
    let confirmNewPassword = document.getElementById("id_password_2");

    // Получение токена из GET
    let regexp = /_ijt=([^&]+)/i;
    let token = "";
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
    let pattern = /^[a-z0-9_-]+[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    if(newPassword.value != ""){
        if(newPassword.value.search(pattern) !== 0){
            $('#id_password_1').addClass('wrong');
            newPassword.placeholder = "Некорректный пароль";
            success = 0;
        }
        if(newPassword.value.size() <= 6){
            $('#id_password_1').addClass('wrong');
            newPassword.placeholder = "Короткий пароль";
            success = 0;
        }
    }

    // FIXME: Проверка на совпадение паролей
    if(newPassword.value != confirmNewPassword.value){
        success = 0;
        newPassword.placeholder = "Пароли не совпадают";
    }

    if(success === 1)
    {
        $.ajax({
            type: "POST",
            url: pathToServer + "/password_reset/confirm/",
            data: {password: newPassword.value, token: token}
        }).done(function(data){
            // TODO
            // Я не понимаю, что тута)
            if(data.email_sent === true)
            {
                forg = document.getElementById("forgotWindow");
                forgPost = document.getElementById("forgotPostWindow");
                forgPost.classList.add("forgOpen");
                setTimeout(function () {
                    forg.classList.add("almostHide");
                    setTimeout(function () {
                        forg.classList.add("hide");
                    }, 500)
                }, 100);
            }
            else
            {
                $('#messageForg').addClass('wrong');
                msg.innerHTML = "Ошибка отправки, " + data.error_msg;
            }
        }).fail(function () {
            $('#messageForg').addClass('wrong');
            msg.innerHTML = "Сервер недоступен";
        });
    }
});