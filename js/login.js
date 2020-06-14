 setInterval(function () {
            var dataReCaptcha = $("#g-recaptcha-response").val();
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


