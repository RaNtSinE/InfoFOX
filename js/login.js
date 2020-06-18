 setInterval(function () {
            let dataReCaptcha = $("#g-recaptcha-response").val();
            capt = document.getElementsByClassName("g-recaptcha");
            ent = document.getElementsByClassName("enter");
            if (dataReCaptcha != "" && dataReCaptcha != undefined) {
                setTimeout(function () {
                    capt[0].classList.add("almostHide");
                    ent[0].classList.add("enter-visible");
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
                        ent[0].classList.remove("enter-visible");
                    }, 10)
                }, 100);
            }
        }, 1000);

 $('.enter').on('click',function()
 {
     let username = document.getElementById('id_username');
     let password = document.getElementById('id_password')
     $.ajax({
         type: "POST",
         url: pathToServer + "/auth/token/login",
         data: {username: username.value, password: password.value}
     }).done(function (data) {
         localStorage.setItem('token', data.auth_token);
         document.location.href = "main.html";
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
