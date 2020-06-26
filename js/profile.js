function profile()
{
    let deleteCheck = [];
    function addListeners()
    {

        $('.changeLink a').on('click', function () {
            this.parentNode.classList.add("open");
        });

        $('.close').on('click', function () {
            this.parentNode.parentNode.parentNode.classList.remove("open");
        });

        $('.profileFrame__deleteBlock').on('click',function () {
            this.parentNode.classList.add("open");
        });

            deleteBtns = $('.delete');
            for (let i = 0; i < deleteBtns.length; i++)
            {
                let j = i;
                if(deleteCheck[i] !== 1)
                {
                    deleteCheck[i] = 1;
                    deleteBtns[i].addEventListener("click",function () {
                        let prof_id = this.parentNode.parentNode.parentNode.getElementsByClassName('profile_id');
                        prof_id = prof_id[0];
                        $.ajax({
                            type: "DELETE",
                            url: pathToServer + "/api/userpage/profile/" + prof_id.value,
                            headers: {
                                "Authorization":'Token ' + localStorage.getItem("token")
                            },
                            data: {name: "Название профиля"}
                        }).done(function (data) {
                        }).fail(function (xhr, textStatus) {
                        });
                        this.parentNode.parentNode.parentNode.classList.remove("open");
                        $(this).parent().parent().parent().remove();
                    });
                }
            }
        $('.profile_name').on('input', function () {
            $.ajax({
                type: "PUT",
                url: pathToServer + "/api/userpage/profile/" + this.parentNode.parentNode.parentNode.getElementsByClassName('profile_id')[0].value,
                headers: {
                    "Authorization":'Token ' + localStorage.getItem("token")
                },
                data: {name: this.value}
            }).done(function (data) {
            }).fail(function (xhr, textStatus) {
            });
        });

        let success = 1;
        $('.emailSave').on('click', function () {
            success = 1;
            let email = this.parentNode.getElementsByClassName('emailChangeEmail')[0].value;
            let msg = this.parentNode.getElementsByClassName('error')[0];
            let pattern = /^[a-z0-9_.-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
            if(email.length < 1){
                msg.classList.add('wrong');
                msg.innerHTML = "Все поля должны быть заполнены";
                success = 0;
            }
            else
            if(email.search(pattern) !== 0){
                msg.classList.add('wrong');
                msg.innerHTML = "Некорректный email";
                success = 0;
            }
            if (success === 1) {
                $.ajax({
                    type: "POST",
                    url: pathToServer + "/change_email/",
                    headers: {
                        "Authorization":'Token ' + localStorage.getItem("token")
                    },
                    data: {email: email}
                }).done(function (data) {
                    msg.classList.remove("wrong");
                    msg.parentNode.classList.remove('open');
                    msg.parentNode.parentNode.parentNode.classList.remove('open');
                    document.getElementsByClassName('userEmail')[0].innerHTML = email;
                }).fail(function (xhr, textStatus) {
                });
            }
        });
        $('.passwordSave').on('click', function () {
            success = 1;
            let oldPassword = this.parentNode.getElementsByClassName('OldPassword')[0].value;
            let newPassword = this.parentNode.getElementsByClassName('NewPassword')[0].value;
            let repeatPassword = this.parentNode.getElementsByClassName('RepeatPassword')[0].value;
            let msg = this.parentNode.getElementsByClassName('error')[0];
            if(oldPassword.length < 1 || newPassword.length < 1 || repeatPassword.length < 1){
                msg.classList.add('wrong');
                msg.innerHTML = "Все поля должны быть заполнены";
                success = 0;
            }
            else
            if(newPassword.length < 8)
            {
                msg.classList.add('wrong');
                msg.innerHTML = "Новый пароль должен быть не меньше 8 символов";
                success = 0;
            }
            else
            if(newPassword != repeatPassword){
                msg.classList.add('wrong');
                msg.innerHTML = "Поля для нового пароля не совпадают";
                success = 0;
            }
            if (success === 1) {
                $.ajax({
                    type: "POST",
                    url: pathToServer + "/auth/users/set_password/",
                    headers: {
                        "Authorization":'Token ' + localStorage.getItem("token")
                    },
                    data: {current_password: oldPassword, new_password: newPassword}
                }).done(function (data) {
                    msg.classList.remove("wrong");
                    msg.parentNode.classList.remove('open');
                    msg.parentNode.parentNode.parentNode.classList.remove('open');

                    $.ajax({
                        type: "POST",
                        url: pathToServer + "/auth/token/login",
                        data: {username: document.getElementsByClassName('userLogin')[0].innerHTML, password: newPassword}
                    }).done(function (data) {
                        localStorage.setItem('token', data.auth_token);
                    }).fail(function () {
                    });
                }).fail(function (xhr, textStatus) {
                    if(xhr.responseJSON.current_password == "Неправильный пароль.")
                    {
                        msg.classList.add('wrong');
                        msg.innerHTML = "Неправильный пароль";
                    }
                });
            }
        });
    }
    addListeners();

    $('.profileFrame__addBlock').on('click', function () {

        $.ajax({
            type: "POST",
            url: pathToServer + "/api/userpage/add/",
            headers: {
                "Authorization":'Token ' + localStorage.getItem("token")
            },
            data: {name: "Название профиля"}
        }).done(function (data) {
            createNewProfile(data);
            addListeners();
        }).fail(function (xhr, textStatus) {
        });

        function createNewProfile(data) {

            let profileAddBlock = document.getElementsByClassName('profileFrame__addBlock');
            profileAddBlock = profileAddBlock[0];
        profileAddBlock.insertAdjacentHTML('beforebegin',
            '<div class="profileFrame__profileBlock">\n' +
            '            <div class="shading">\n' +
            '                <div class="wind deleteWind">\n' +
            '                    <div class="ChangeInfo DeleteInfo">\n' +
            '                        <p>Удалить профиль?</p>\n' +
            '                    </div>\n' +
            '                    <a class="close">Отмена</a>\n' +
            '                    <a class="delete">Удалить</a>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <a class="profileFrame__deleteBlock">\n' +
            '                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                    <g clip-path="url(#clip0)">\n' +
            '                        <path d="M15.9478 9.05756C15.6244 9.05756 15.3623 9.31965 15.3623 9.64304V20.7086C15.3623 21.0318 15.6244 21.2941 15.9478 21.2941C16.2712 21.2941 16.5333 21.0318 16.5333 20.7086V9.64304C16.5333 9.31965 16.2712 9.05756 15.9478 9.05756Z" fill="#093D64"></path>\n' +
            '                        <path d="M9.03958 9.05756C8.7162 9.05756 8.4541 9.31965 8.4541 9.64304V20.7086C8.4541 21.0318 8.7162 21.2941 9.03958 21.2941C9.36297 21.2941 9.62506 21.0318 9.62506 20.7086V9.64304C9.62506 9.31965 9.36297 9.05756 9.03958 9.05756Z" fill="#093D64"></path>\n' +
            '                        <path d="M4.00465 7.44265V21.8676C4.00465 22.7202 4.31729 23.5209 4.86343 24.0954C5.40705 24.6715 6.1636 24.9985 6.95537 24.9999H18.0328C18.8248 24.9985 19.5813 24.6715 20.1247 24.0954C20.6709 23.5209 20.9835 22.7202 20.9835 21.8676V7.44265C22.0692 7.15448 22.7727 6.10565 22.6274 4.99164C22.482 3.87786 21.5331 3.0447 20.4097 3.04447H17.4121V2.31262C17.4155 1.69719 17.1722 1.10622 16.7365 0.671456C16.3008 0.236921 15.709 -0.00504608 15.0935 -1.46257e-05H9.89465C9.27921 -0.00504608 8.68733 0.236921 8.25165 0.671456C7.81598 1.10622 7.57264 1.69719 7.57607 2.31262V3.04447H4.57846C3.45508 3.0447 2.50619 3.87786 2.36074 4.99164C2.21551 6.10565 2.919 7.15448 4.00465 7.44265ZM18.0328 23.829H6.95537C5.95434 23.829 5.17561 22.969 5.17561 21.8676V7.49411H19.8126V21.8676C19.8126 22.969 19.0338 23.829 18.0328 23.829ZM8.74702 2.31262C8.74314 2.00776 8.86298 1.71434 9.07933 1.49913C9.29545 1.28392 9.58956 1.16568 9.89465 1.17094H15.0935C15.3986 1.16568 15.6927 1.28392 15.9088 1.49913C16.1252 1.71411 16.245 2.00776 16.2411 2.31262V3.04447H8.74702V2.31262ZM4.57846 4.21543H20.4097C20.9918 4.21543 21.4636 4.68724 21.4636 5.26929C21.4636 5.85134 20.9918 6.32315 20.4097 6.32315H4.57846C3.99642 6.32315 3.5246 5.85134 3.5246 5.26929C3.5246 4.68724 3.99642 4.21543 4.57846 4.21543Z" fill="#093D64"></path>\n' +
            '                        <path d="M12.4947 9.05756C12.1713 9.05756 11.9092 9.31965 11.9092 9.64304V20.7086C11.9092 21.0318 12.1713 21.2941 12.4947 21.2941C12.818 21.2941 13.0801 21.0318 13.0801 20.7086V9.64304C13.0801 9.31965 12.818 9.05756 12.4947 9.05756Z" fill="#093D64"></path>\n' +
            '                    </g>\n' +
            '                    <defs>\n' +
            '                        <clipPath id="clip0">\n' +
            '                            <rect width="25" height="25" fill="white"></rect>\n' +
            '                        </clipPath>\n' +
            '                    </defs>\n' +
            '                </svg>\n' +
            '            </a>\n' +
            '            <a class="profileFrame__block"><div class="profileFrame__profileTitle"><input type="text" maxlength="60" class="profile_name" value="Название профиля"></div></a>\n' +
            '            <div class="profileFrame__linkBrac">\n' +
            '                <a href="./disconnect?brac_id=' + data.profile_id + '">Перейти к браслетам</a>\n' +
            '            </div>\n' +
            '            <div class="profileFrame__linkProf">\n' +
            '                <a href="./profile?id=' + data.profile_id + '">Перейти к профилю</a>\n' +
            '            </div>\n' +
            '            <input class="profile_id" name="profile_id" type="hidden" value="' + data.profile_id + '"> \n' +
            '        </div>');
        }
        addListeners();
    });
}



