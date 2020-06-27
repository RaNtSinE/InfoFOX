function loadProfile() {

    if(isLogin)
    {
        profileLoad();
    }
    else
    {
        document.location.href = "./404";
    }

    function profileLoad() {

        let content = document.getElementsByClassName('content')[0];
        content.insertAdjacentHTML('afterbegin', '    <div class="profileHead">\n' +
            '        <p>Личная страница</p>\n' +
            '    </div>\n' +
            '    <div id="profileFrame">\n' +
            '        <div class="profileFrame__profiles">\n' +
            '            <p>Профили</p>\n' +
            '        </div>\n' +
            '        <a class="profileFrame__addBlock">\n' +
            '            <div>\n' +
            '                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                    <path d="M15 0C6.72867 0 0 6.72867 0 15C0 23.2713 6.72867 30 15 30C23.2713 30 30 23.2713 30 15C30 6.72867 23.2713 0 15 0Z" fill="#F3F3F3"/>\n' +
            '                    <path class="plus" d="M21.5624 16.2497H16.2498V21.5623C16.2498 22.2524 15.69 22.8122 14.9999 22.8122C14.3098 22.8122 13.75 22.2524 13.75 21.5623V16.2497H8.43742C7.74734 16.2497 7.1875 15.6899 7.1875 14.9998C7.1875 14.3097 7.74734 13.7499 8.43742 13.7499H13.75V8.4373C13.75 7.74722 14.3098 7.18738 14.9999 7.18738C15.69 7.18738 16.2498 7.74722 16.2498 8.4373V13.7499H21.5624C22.2525 13.7499 22.8123 14.3097 22.8123 14.9998C22.8123 15.6899 22.2525 16.2497 21.5624 16.2497Z" fill="#093D64"/>\n' +
            '                </svg>\n' +
            '            </div>\n' +
            '        </a>\n' +
            '        <div class="profileFrame__bracletes">\n' +
            '            <p>Браслеты</p>\n' +
            '        </div>\n' +
            '\n' +
            '    </div>');
        $.ajax({
            type: "GET",
            url: pathToServer + "/auth/users/me/",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).done(function (data) {
            profFrame(data);
        }).fail(function (xhr, textStatus) {
        });

        function profFrame(data) {
            let profileFrame = document.getElementById('profileFrame');

            if (isVk === false)
                profileFrame.insertAdjacentHTML('afterbegin', '<div class="profileFrame__withoutVK"></div>');

            class Profile extends React.Component {
                constructor(props) {
                    super(props);
                }

                render() {
                    return React.createElement(
                        'div',
                        {className: ".profileFrame__withoutVK"},
                        React.createElement(
                            'div',
                            {className: "profileFrame__title"},
                            React.createElement(
                                'p',
                                {},
                                "Личная информация"
                            )
                        ),
                        React.createElement(
                            'div',
                            {className: "profileFrame__login dataField"},
                            React.createElement(
                                'p',
                                {className: "lableLogin"},
                                "Логин"
                            ),
                            React.createElement(
                                'p',
                                {className: "userLogin"},
                                this.props.Name
                            )
                        ),
                        React.createElement(
                            'div',
                            {className: "profileFrame__Email dataField"},
                            React.createElement(
                                'p',
                                {className: "lableEmail"},
                                "E-mail"
                            ),
                            React.createElement(
                                'p',
                                {className: "userEmail"},
                                this.props.Email
                            )
                        ),
                        React.createElement(
                            'div',
                            {className: "profileFrame__changeEmail changeLink"},
                            React.createElement(
                                'div',
                                {className: "shading"},
                                React.createElement(
                                    'div',
                                    {className: "wind"},
                                    React.createElement(
                                        'p',
                                        {className: "error"},
                                        "Ошибка"
                                    ),
                                    React.createElement(
                                        'div',
                                        {className: "ChangeInfo"},
                                        React.createElement(
                                            'p',
                                            {},
                                            "Изменение e-mail адреса"
                                        )
                                    ),
                                    React.createElement(
                                        'input',
                                        {
                                            className: "form-control emailChangeEmail", type: "text", name: "Email",
                                            maxLength: "50", placeholder: "Новый e-mail адрес", autoComplete: "off"
                                        }
                                    ),
                                    React.createElement(
                                        'a',
                                        {className: "close"},
                                        "Отмена"
                                    ),
                                    React.createElement(
                                        'a',
                                        {className: "emailSave"},
                                        "Сохранить"
                                    )
                                ),
                            ),
                            React.createElement(
                                'a',
                                {},
                                "Изменить"
                            ),
                        ),
                        React.createElement(
                            'div',
                            {className: "profileFrame__password dataField"},
                            React.createElement(
                                'p',
                                {className: "lablePassword"},
                                "Пароль"
                            ),
                            React.createElement(
                                'p',
                                {className: "userPassword"},
                                "Пароль, который знаете лишь Вы!"
                            )
                        ),
                        React.createElement(
                            'div',
                            {className: "profileFrame__changePassword changeLink"},
                            React.createElement(
                                'div',
                                {className: "shading"},
                                React.createElement(
                                    'div',
                                    {className: "wind"},
                                    React.createElement(
                                        'p',
                                        {className: "error"},
                                        "Ошибка"
                                    ),
                                    React.createElement(
                                        'div',
                                        {className: "ChangeInfo"},
                                        React.createElement(
                                            'p',
                                            {},
                                            "Изменение пароля"
                                        )
                                    ),
                                    React.createElement(
                                        'input',
                                        {
                                            className: "form-control OldPassword",
                                            type: "password",
                                            name: "OldPassword",
                                            maxLength: "50",
                                            placeholder: "Введите старый пароль",
                                            autoComplete: "off"
                                        }
                                    ),
                                    React.createElement(
                                        'input',
                                        {
                                            className: "form-control NewPassword",
                                            type: "password",
                                            name: "NewPassword",
                                            maxLength: "50",
                                            placeholder: "Введите новый пароль",
                                            autoComplete: "off"
                                        }
                                    ),
                                    React.createElement(
                                        'input',
                                        {
                                            className: "form-control RepeatPassword",
                                            type: "password",
                                            name: "RepeatPassword",
                                            maxLength: "50",
                                            placeholder: "Повторите новый пароль",
                                            autoComplete: "off"
                                        }
                                    ),
                                    React.createElement(
                                        'a',
                                        {className: "close"},
                                        "Отмена"
                                    ),
                                    React.createElement(
                                        'a',
                                        {className: "passwordSave"},
                                        "Сохранить"
                                    )
                                ),
                            ),
                            React.createElement(
                                'a',
                                {},
                                "Изменить"
                            ),
                        ),
                    );
                }
            }

            document.querySelectorAll('.profileFrame__withoutVK')
                .forEach(domContainer => {
                    ReactDOM.render(
                        React.createElement(Profile, {Name: data.username, Email: data.email}),
                        domContainer
                    );
                });
            $('.changeLink a').on('click', function () {
                this.parentNode.classList.add("open");
            });

            $('.close').on('click', function () {
                this.parentNode.parentNode.parentNode.classList.remove("open");
            });
        }

        $.ajax({
            type: "GET",
            url: pathToServer + "/api/userpage/",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).done(function (data) {
            // alert(JSON.stringify(data));
            profileAdd(data);
            bracAdd(data);
        }).fail(function (xhr, textStatus) {
        });

        function profileAdd(data) {
            let profileFrame__add = document.getElementsByClassName('profileFrame__addBlock');
            // let profileFrame__brac = document.getElementsByClassName('profileFrame__bracletes')[0];
            let count = 0;

            for (let i = 0; i < data.length; i++) {
                profileFrame__add[0].insertAdjacentHTML('beforebegin',
                    '        <div class="profileFrame__profileBlock">\n' +
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
                    '            <a class="profileFrame__block">\n' +
                    '            </a>\n' +
                    '            <div class="profileFrame__linkBrac">\n' +
                    '                <a href="./disconnect?brac_id=' + data[i].id + '">Перейти к браслетам</a>\n' +
                    '            </div>\n' +
                    '            <div class="profileFrame__linkProf">\n' +
                    '                <a href="./profile?id=' + data[i].id + '">Перейти к профилю</a>\n' +
                    '            </div>\n' +
                    '            <input class="profile_id" name="profile_id" type="hidden" value="' + data[i].id + '"> \n' +
                    '        </div>');
            }

            class ProfileBlocks extends React.Component {
                constructor(props) {
                    super(props);
                }

                render() {
                    return React.createElement(
                        'div',
                        {className: "profileFrame__profileTitle"},
                        React.createElement(
                            'input',
                            {type: "text", className: "profile_name", defaultValue: this.props.Name, maxLength: "30"},
                        )
                    );
                }
            }

            document.querySelectorAll('.profileFrame__block')
                .forEach(domContainer => {
                    ReactDOM.render(
                        React.createElement(ProfileBlocks, {Name: data[count].name}),
                        domContainer
                    );
                    count++;
                });
            let profes = document.getElementsByClassName('profileFrame__profileBlock');
            if (profes.length > 9) {
                let addBlock = document.getElementsByClassName('profileFrame__addBlock');
                addBlock[0].style.display = "none"
            }
            profile();
            $('.profile_name').on("focusout", function () {
                bracDelete();
                $.ajax({
                    type: "GET",
                    url: pathToServer + "/api/userpage/",
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }).done(function (data) {
                    bracAdd(data);
                }).fail(function (xhr, textStatus) {
                });
            })
        }

        function bracDelete() {
            $('.profileFrame__braceletBlock').remove();
        }

        function addDelete() {
            let frofes = document.getElementsByClassName('profileFrame__profileBlock');
            if (frofes.length > 9) {
                let addBlock = document.getElementsByClassName('profileFrame__addBlock');
                addBlock[0].style.display = "none"
            }
        }

        function addAdd() {
            let addBlock = document.getElementsByClassName('profileFrame__addBlock');
            addBlock[0].style.display = "flex";
        }

        function bracAdd(data) {
            let profileFrame__brac = document.getElementsByClassName('profileFrame__bracletes')[0];
            let bracelets = [];
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].bracelets.length; j++) {
                    profileFrame__brac.insertAdjacentHTML('afterend',
                        '        <div class="profileFrame__braceletBlock">\n' +
                        '            <div class="braceletDescription">\n' +
                        '            </div>\n' +
                        '            <div class="shading">\n' +
                        '                <div class="wind profileWind">\n' +
                        '                    <div class="ChangeInfo profileInfo">\n' +
                        '                        <p>Выберите профиль, к которому хотите привязать браслет</p>\n' +
                        '                    </div>\n' +
                        '                    <div class="line"></div>' +
                        '                    <div class="blockWithProfilesInBraclet">' +
                        '                       <div class="blockWithProf">' +
                        '                       </div>' +
                        '                   </div>' +
                        '                    <a class="close">Отмена</a>\n' +
                        '                    <a class="Ok">OK</a>\n' +
                        '                </div>\n' +
                        '            </div>\n' +
                        '            <a class="settings">\n' +
                        '                <svg width="25" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                        '                    <rect width="30" height="30" rx="5" fill="#093D64"></rect>\n' +
                        '                    <path d="M26.6211 12.2153L24.4258 11.666C24.3101 11.3423 24.1743 11.0181 24.0201 10.6963L25.1865 8.75194C25.3047 8.55516 25.2735 8.3032 25.1114 8.14111L21.8589 4.88817C21.6968 4.72556 21.4439 4.69528 21.2481 4.81298L19.3033 5.97998C18.982 5.82567 18.6578 5.68992 18.334 5.57423L17.7847 3.37889C17.729 3.15623 17.5293 3 17.2998 3H12.7002C12.4707 3 12.271 3.15623 12.2153 3.37889L11.666 5.57419C11.3423 5.68992 11.0181 5.82567 10.6968 5.97994L8.75194 4.81294C8.55516 4.69575 8.3032 4.72552 8.14111 4.88812L4.88869 8.14106C4.72659 8.30316 4.69533 8.55511 4.8135 8.75189L5.97998 10.6962C5.82567 11.018 5.68992 11.3422 5.57423 11.666L3.37889 12.2153C3.15623 12.271 3 12.4707 3 12.7002V17.2998C3 17.5293 3.15623 17.729 3.37889 17.7847L5.57419 18.334C5.68992 18.6578 5.82567 18.982 5.97994 19.3038L4.81345 21.2481C4.69528 21.4449 4.72655 21.6968 4.88864 21.8589L8.14106 25.1114C8.30222 25.273 8.55464 25.3037 8.75189 25.1865L10.6962 24.0201C11.018 24.1744 11.3422 24.3101 11.666 24.4258L12.2153 26.6211C12.271 26.8438 12.4707 27 12.7002 27H17.2998C17.5293 27 17.729 26.8438 17.7847 26.6211L18.334 24.4258C18.6577 24.3101 18.9819 24.1743 19.3037 24.0201L21.2481 25.1865C21.4448 25.3042 21.6968 25.274 21.8589 25.1114L25.1113 21.8589C25.2734 21.6968 25.3047 21.4449 25.1865 21.2481L24.02 19.3038C24.1743 18.982 24.3101 18.6578 24.4258 18.334L26.6211 17.7847C26.8437 17.729 27 17.5293 27 17.2998V12.7002C27 12.4707 26.8438 12.271 26.6211 12.2153ZM26 16.9097L23.919 17.4302C23.7515 17.4717 23.6172 17.5972 23.5644 17.7613C23.4209 18.2056 23.2329 18.6553 23.0058 19.0982C22.9267 19.2515 22.9331 19.4351 23.022 19.5835L24.1284 21.4278L21.4277 24.1285L19.584 23.022C19.436 22.9342 19.2534 22.9273 19.0986 23.0059C18.6553 23.233 18.2055 23.421 17.7612 23.5645C17.5972 23.6173 17.4717 23.7516 17.4301 23.919L16.9096 26.0001H13.0903L12.5698 23.919C12.5283 23.7516 12.4028 23.6173 12.2387 23.5645C11.7944 23.421 11.3447 23.233 10.9013 23.0059C10.747 22.9263 10.5635 22.9332 10.416 23.022L8.57227 24.1285L5.87156 21.4277L6.978 19.5835C7.06687 19.435 7.0732 19.2515 6.99412 19.0981C6.76706 18.6553 6.57909 18.2055 6.43552 17.7612C6.38278 17.5972 6.24848 17.4717 6.081 17.4301L3.99998 16.9097V13.0903L6.08105 12.5698C6.24853 12.5283 6.38283 12.4028 6.43556 12.2387C6.57914 11.7944 6.76711 11.3447 6.99417 10.9018C7.0733 10.7485 7.06692 10.5649 6.97805 10.4165L5.87156 8.57227L8.57227 5.87109L10.4165 6.97805C10.565 7.06739 10.7485 7.07423 10.9019 6.99417C11.3447 6.76711 11.7945 6.57914 12.2388 6.43556C12.4028 6.38283 12.5283 6.24853 12.5699 6.08105L13.0904 3.99998H16.9097L17.4302 6.08105C17.4717 6.24853 17.5972 6.38283 17.7613 6.43556C18.2056 6.57914 18.6553 6.76711 19.0982 6.99417C19.251 7.0733 19.4351 7.06645 19.5835 6.97805L21.4278 5.87109L24.1285 8.57227L23.022 10.4165C22.9332 10.565 22.9268 10.7485 23.0059 10.9019C23.233 11.3447 23.421 11.7945 23.5645 12.2388C23.6173 12.4028 23.7516 12.5283 23.919 12.5699L26.0001 13.0904V16.9097H26Z" fill="#F3F3F3"></path>\n' +
                        '                    <path d="M15 9C11.6914 9 9 11.6914 9 15C9 18.3086 11.6914 21 15 21C18.3086 21 21 18.3086 21 15C21 11.6914 18.3086 9 15 9ZM15 20C12.2431 20 9.99998 17.7569 9.99998 15C9.99998 12.2431 12.2432 9.99998 15 9.99998C17.7568 9.99998 20 12.2432 20 15C20 17.7568 17.7569 20 15 20Z" fill="#F3F3F3"></path>\n' +
                        '                </svg>\n' +
                        '            </a>\n' +
                        '        </div>');
                    // alert(JSON.stringify(data[i].bracelets[j]));
                    bracelets.push({
                        name: data[i].name,
                        id: data[i].bracelets[j].id,
                        unique_code: data[i].bracelets[j].unique_code
                    });
                }
            }

            for (let i = 0; i < bracelets.length; i++) {
                let allProf = document.getElementsByClassName('blockWithProf')[i];
                for (let j = 0; j < data.length; j++) {
                    allProf.insertAdjacentHTML('beforeend',
                        '<div class="prof">' +
                        '                               <p>' + data[j].name + '</p>' +
                        '                               <svg class="circle" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                        '                                   <circle cx="15" cy="15" r="15" fill="#F3F3F3"/>\n' +
                        '                               </svg>\n' +
                        '<svg class="check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                        '<g clip-path="url(#clip0)">\n' +
                        '<path d="M19.7071 2.94904C19.3166 2.55849 18.6835 2.55849 18.2929 2.94904L6.31228 14.9298L1.70713 10.3246C1.31662 9.93408 0.683496 9.93412 0.29291 10.3246C-0.0976367 10.7151 -0.0976367 11.3483 0.29291 11.7388L5.60518 17.051C5.99557 17.4415 6.62916 17.4412 7.01939 17.051L19.7071 4.36326C20.0977 3.97275 20.0976 3.33959 19.7071 2.94904Z" fill="#093D64"/>\n' +
                        '</g>\n' +
                        '<defs>\n' +
                        '<clipPath id="clip0">\n' +
                        '<rect width="20" height="20" fill="white"/>\n' +
                        '</clipPath>\n' +
                        '</defs>\n' +
                        '</svg>\n' +
                        '<input class="profile_id" name="profile_id" type="hidden" value="' + data[j].id + '">' +
                        '                           </div>');
                }
            }
            let count = 0;

            class ProfileBracelets extends React.Component {
                constructor(props) {
                    super(props);
                }

                render() {
                    return React.createElement(
                        'div',
                        {className: "profileFrame__braceletDesctription"},
                        React.createElement(
                            'p',
                            {},
                            React.createElement(
                                'span',
                                {className: "boldDesc"},
                                "Код:"
                            ),
                            React.createElement(
                                'span',
                                {className: "desc1"},
                                this.props.Code
                            ),
                        ),
                        React.createElement(
                            'p',
                            {},
                            React.createElement(
                                'span',
                                {className: "boldDesc"},
                                "ID:"
                            ),
                            React.createElement(
                                'span',
                                {className: "desc2"},
                                this.props.Id
                            ),
                        ),
                        React.createElement(
                            'p',
                            {},
                            React.createElement(
                                'span',
                                {className: "boldDesc"},
                                "Профиль:"
                            ),
                            React.createElement(
                                'span',
                                {className: "desc3"},
                                this.props.Name
                            ),
                        )
                    );
                }
            }

            document.querySelectorAll('.braceletDescription')
                .forEach(domContainer => {
                    ReactDOM.render(
                        React.createElement(ProfileBracelets, {
                            Name: bracelets[count].name,
                            Id: bracelets[count].id,
                            Code: bracelets[count].unique_code
                        }),
                        domContainer
                    );
                    count++;
                });


            let profileCheck = [];
            // profileCheck[0] = 0;
            let profile_id = -1;
            let brac_id = -1;
            let unique_code = -1;

            $('.settings').on('click', function () {
                let settings = this;
                let profiles = settings.parentNode.getElementsByClassName("prof");
                brac_id = settings.parentNode.getElementsByClassName('desc2')[0].innerHTML;
                unique_code = settings.parentNode.getElementsByClassName('desc1')[0].innerHTML;
                let namePr = settings.parentNode.getElementsByClassName('desc3')[0].innerHTML;
                let allProf = settings.parentNode.getElementsByClassName('blockWithProf')[0];
                let names = [];
                for (let i = 0; i < profiles.length; i++) {

                    names.push(profiles[i].getElementsByTagName("p")[0].innerHTML);
                }

                for (let i = 0; i < profiles.length; i++) {
                    if (namePr === names[i]) {
                        profiles[i].classList.add("activated");
                        profile_id = profiles[i].getElementsByClassName('profile_id')[0].value;
                    }
                }

                settings.parentNode.classList.add("open");

                for (let i = 0; i < profiles.length; i++) {
                    if (profileCheck[i] === 1) {
                        profiles[i].classList.add("activated");
                    }
                }
                for (let i = 0; i < profiles.length; i++) {
                    let l = i;
                    profiles[i].addEventListener("click", function () {
                        if (profileCheck[l] !== 1) {
                            profileCheck[l] = 1;
                            this.classList.add('activated');
                            let profileId = this.getElementsByClassName('profile_id');
                            profile_id = profileId[0].value;
                            for (let j = 0; j < profiles.length; j++) {
                                if (l !== j) {
                                    profileCheck[j] = 0;
                                    profiles[j].classList.remove('activated');
                                }
                            }
                        }
                    }, false);
                }
            });


            $('.Ok').on('click', function () {
                let ok = this;
                $.ajax({
                    type: "PUT",

                    url: pathToServer + "/api/userpage/bracelet/registration/" + brac_id,
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    },
                    data: {profile_id: profile_id}
                }).done(function () {
                    bracDelete();
                    $.ajax({
                        type: "GET",
                        url: pathToServer + "/api/userpage/",
                        headers: {
                            "Authorization": localStorage.getItem("token")
                        }
                    }).done(function (data) {
                        bracAdd(data);
                    }).fail(function (xhr, textStatus) {
                    });
                    ok.parentNode.parentNode.parentNode.classList.remove("open");
                }).fail(function (xhr, textStatus) {
                });

            });

            $('.close').on('click', function () {
                this.parentNode.parentNode.parentNode.classList.remove("open");
            });

        }

        function profile() {
            let deleteCheck = [];

            function addListeners() {

                $('.changeLink a').on('click', function () {
                    this.parentNode.classList.add("open");
                });

                $('.close').on('click', function () {
                    this.parentNode.parentNode.parentNode.classList.remove("open");
                });

                $('.profileFrame__deleteBlock').on('click', function () {
                    this.parentNode.classList.add("open");
                });

                deleteBtns = $('.delete');
                for (let i = 0; i < deleteBtns.length; i++) {
                    let j = i;
                    if (deleteCheck[i] !== 1) {
                        deleteCheck[i] = 1;
                        deleteBtns[i].addEventListener("click", function () {
                            let prof_id = this.parentNode.parentNode.parentNode.getElementsByClassName('profile_id');
                            prof_id = prof_id[0];
                            $.ajax({
                                type: "DELETE",
                                url: pathToServer + "/api/userpage/profile/" + prof_id.value,
                                headers: {
                                    "Authorization": localStorage.getItem("token")
                                },
                                data: {name: "Название профиля"}
                            }).done(function (data) {
                                bracDelete();
                                addAdd();
                                $.ajax({
                                    type: "GET",
                                    url: pathToServer + "/api/userpage/",
                                    headers: {
                                        "Authorization": localStorage.getItem("token")
                                    }
                                }).done(function (data) {
                                    bracAdd(data);
                                }).fail(function (xhr, textStatus) {
                                });
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
                            "Authorization": localStorage.getItem("token")
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
                    if (email.length < 1) {
                        msg.classList.add('wrong');
                        msg.innerHTML = "Все поля должны быть заполнены";
                        success = 0;
                    } else if (email.search(pattern) !== 0) {
                        msg.classList.add('wrong');
                        msg.innerHTML = "Некорректный email";
                        success = 0;
                    }
                    if (success === 1) {
                        $.ajax({
                            type: "POST",
                            url: pathToServer + "/change_email/",
                            headers: {
                                "Authorization": localStorage.getItem("token")
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
                    if (oldPassword.length < 1 || newPassword.length < 1 || repeatPassword.length < 1) {
                        msg.classList.add('wrong');
                        msg.innerHTML = "Все поля должны быть заполнены";
                        success = 0;
                    } else if (newPassword.length < 8) {
                        msg.classList.add('wrong');
                        msg.innerHTML = "Новый пароль должен быть не меньше 8 символов";
                        success = 0;
                    } else if (newPassword != repeatPassword) {
                        msg.classList.add('wrong');
                        msg.innerHTML = "Поля для нового пароля не совпадают";
                        success = 0;
                    }
                    if (success === 1) {
                        $.ajax({
                            type: "POST",
                            url: pathToServer + "/auth/users/set_password/",
                            headers: {
                                "Authorization": localStorage.getItem("token")
                            },
                            data: {current_password: oldPassword, new_password: newPassword}
                        }).done(function (data) {
                            msg.classList.remove("wrong");
                            msg.parentNode.classList.remove('open');
                            msg.parentNode.parentNode.parentNode.classList.remove('open');

                            $.ajax({
                                type: "POST",
                                url: pathToServer + "/auth/token/login",
                                data: {
                                    username: document.getElementsByClassName('userLogin')[0].innerHTML,
                                    password: newPassword
                                }
                            }).done(function (data) {
                                localStorage.setItem('token', "Token" + data.auth_token);
                            }).fail(function () {
                            });
                        }).fail(function (xhr, textStatus) {
                            if (xhr.responseJSON.current_password == "Неправильный пароль.") {
                                msg.classList.add('wrong');
                                msg.innerHTML = "Неправильный пароль";
                            }
                        });
                    }
                });
            }

            addListeners();
            listenerAdd();

            function listenerAdd() {
                $('.profileFrame__addBlock').on('click', function () {

                    $.ajax({
                        type: "POST",
                        url: pathToServer + "/api/userpage/add/",
                        headers: {
                            "Authorization": localStorage.getItem("token")
                        },
                        data: {name: "Название профиля"}
                    }).done(function (data) {
                        createNewProfile(data);
                        bracDelete();
                        addDelete();
                        $.ajax({
                            type: "GET",
                            url: pathToServer + "/api/userpage/",
                            headers: {
                                "Authorization": localStorage.getItem("token")
                            }
                        }).done(function (data) {
                            bracAdd(data);
                            addListeners();
                        }).fail(function (xhr, textStatus) {
                        });
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
                            '            <a class="profileFrame__block"><div class="profileFrame__profileTitle"><input type="text" maxlength="30" class="profile_name" value="Название профиля"></div></a>\n' +
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
        }
    }

}
