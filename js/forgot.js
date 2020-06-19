$('.sub').on('click',function () {
    let msg = document.getElementById("messageForg");
    $('#messageForg').removeClass('wrong');
    let address = document.getElementById("id_username");

    let success = 1;

    if(address.value === "")
    {
        success = 0;
        $('#id_username').addClass('wrong');

        address.placeholder = "Это поле должно быть заполнено";
    }
    let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    if(address.value !== ""){
        if(address.value.search(pattern) != 0){
            $('#id_username').addClass('wrong');
            $('#messageForg').addClass('wrong');
            msg.innerHTML = "Некорректный email";
            success = 0;
        }
    }
    if(success === 1)
    {
        $.ajax({
            type: "POST",
            url: pathToServer + "/password_reset/",
            data: {email: address.value }
        }).done(function(data){
            // alert(JSON.stringify(data));
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