'use strict';

function loadUser()
{
    let infoBlocks = [
        { id: 1, name: '28.03.2020', text: 'Много текста Много текста Много текста Много текстаМного текста Много ' +
                'текста Много текста Много текста Много текста Много текста Много текста Много текста Много текста' +
                ' Много текста Много текста Много текста Много текста Много текста Много текста Много текста Много' +
                ' текста Много текста Много текста Много текста Много текста Много текста Много текста Много текста' +
                ' Много текста Много текста Много текста Много текста Много текста Много текста Много текста Много' +
                ' текста Много текста Много текста Много текста Много текстаМного текста Много текста Много текста' +
                ' Много текста Много текста Много текста Много текста Много текста Много текста Много текста Мk'},
        { id: 2, name: '22.03.2020', text: 'Hello'},
        { id: 3, name: '21.03.2020', text: '#Wow'}];

    loadUser();

    function loadUser()
    {
        let add = document.getElementsByClassName('add');
        let user = document.getElementsByClassName('User');
        if (isLogin)
        {
            user[0].insertAdjacentHTML('afterbegin',
                '        <a id="sav">Сохранить все блоки</a>\n' +
                '        <p id="suc">Блоки сохранены!</p>\n' +
                '        <p id="alert">Заполните или удалите пустые блоки</p>');
            user[0].insertAdjacentHTML('beforeend',
                '        <a class="userInfo add">\n' +
                '            <div class="inputZone plus">\n' +
                '                <div>\n' +
                '                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '                        <path class="circle" d="M25 0C11.2144 0 0 11.2144 0 25C0 38.7856 11.2144 50 25 50C38.7856 50 50 38.7856 50 25C50 11.2144 38.7856 0 25 0Z" fill="#3AB9DA"/>\n' +
                '                        <path d="M35.9367 27.083H27.0824V35.9373C27.0824 37.0875 26.1494 38.0205 24.9992 38.0205C23.8491 38.0205 22.916 37.0875 22.916 35.9373V27.083H14.0617C12.9116 27.083 11.9785 26.15 11.9785 24.9998C11.9785 23.8497 12.9116 22.9166 14.0617 22.9166H22.916V14.0623C22.916 12.9122 23.8491 11.9791 24.9992 11.9791C26.1494 11.9791 27.0824 12.9122 27.0824 14.0623V22.9166H35.9367C37.0869 22.9166 38.0199 23.8497 38.0199 24.9998C38.0199 26.15 37.0869 27.083 35.9367 27.083Z" fill="#FAFAFA"/>\n' +
                '                    </svg>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </a>')
            for (let i = 0; i < infoBlocks.length; i++) {
                add[0].insertAdjacentHTML('beforebegin', '<div class="userInfo"></div>');
            }

        }
        else
        {
            user[0].setAttribute('id', "nologgined");
            for (let i = 0; i < infoBlocks.length; i++) {
                user[0].insertAdjacentHTML('beforeend', '<div class="userInfo"></div>');
            }
        }

        let count = 0;

        class Block extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                if (this.props.IsLogin) {

                    return React.createElement(
                        'div',
                        {className: "innerBlock"},
                        React.createElement(
                            'div',
                            {className: "shading"},
                            React.createElement(
                                'div',
                                {className: "wind"},
                                React.createElement(
                                    'div',
                                    {className: "right"},
                                    React.createElement(
                                        'p',
                                        {},
                                        'Вы уверены, что хотите удалить данный блок?'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    {className: "warn"},
                                    React.createElement(
                                        'p',
                                        {},
                                        'Удаленные данные будет невозможно восстановить'
                                    )
                                ),
                                React.createElement(
                                    'a',
                                    {className: "delete"},
                                    'Удалить'
                                ),
                                React.createElement(
                                    'a',
                                    {className: "close"},
                                    'Отмена'
                                )
                            ),
                        ),
                        React.createElement(
                            'a',
                            {className: "but del"},
                            React.createElement(
                                'svg',
                                {
                                    width: "25", height: "25", viewBox: "0 0 25 25", fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                },
                                React.createElement(
                                    'g',
                                    {},
                                    React.createElement(
                                        'path',
                                        {
                                            d: "M15.9478 9.05756C15.6244 9.05756 15.3623 9.31965 15.3623 " +
                                                "9.64304V20.7086C15.3623 21.0318 15.6244 21.2941 15.9478 21.2941C16.2712 " +
                                                "21.2941 16.5333 21.0318 16.5333 20.7086V9.64304C16.5333 9.31965 16.2712 " +
                                                "9.05756 15.9478 9.05756Z", fill: "#00B1DF"
                                        },
                                    ),
                                    React.createElement(
                                        'path',
                                        {
                                            d: "M9.03958 9.05756C8.7162 9.05756 8.4541 9.31965 8.4541 " +
                                                "9.64304V20.7086C8.4541 21.0318 8.7162 21.2941 9.03958 21.2941C9.36297" +
                                                " 21.2941 9.62506 21.0318 9.62506 20.7086V9.64304C9.62506 9.31965 9.36297" +
                                                " 9.05756 9.03958 9.05756Z", fill: "#00B1DF"
                                        },
                                    ),
                                    React.createElement(
                                        'path',
                                        {
                                            d: "M4.00465 7.44265V21.8676C4.00465 22.7202 4.31729 23.5209 4.86343 " +
                                                "24.0954C5.40705 24.6715 6.1636 24.9985 6.95537 24.9999H18.0328C18.8248 " +
                                                "24.9985 19.5813 24.6715 20.1247 24.0954C20.6709 23.5209 20.9835 22.7202 " +
                                                "20.9835 21.8676V7.44265C22.0692 7.15448 22.7727 6.10565 22.6274 " +
                                                "4.99164C22.482 3.87786 21.5331 3.0447 20.4097 " +
                                                "3.04447H17.4121V2.31262C17.4155 1.69719 17.1722 1.10622 16.7365 " +
                                                "0.671456C16.3008 0.236921 15.709 -0.00504608 15.0935" +
                                                " -1.46257e-05H9.89465C9.27921 -0.00504608 8.68733 0.236921 8.25165 " +
                                                "0.671456C7.81598 1.10622 7.57264 1.69719 7.57607 " +
                                                "2.31262V3.04447H4.57846C3.45508 3.0447 2.50619 3.87786 " +
                                                "2.36074 4.99164C2.21551 6.10565 2.919 7.15448 4.00465 7.44265ZM18.0328" +
                                                " 23.829H6.95537C5.95434 23.829 5.17561 22.969 5.17561" +
                                                " 21.8676V7.49411H19.8126V21.8676C19.8126 22.969 19.0338 23.829 18.0328 " +
                                                "23.829ZM8.74702 2.31262C8.74314 2.00776 8.86298 1.71434 9.07933 " +
                                                "1.49913C9.29545 1.28392 9.58956 1.16568 9.89465 1.17094H15.0935C15.3986" +
                                                " 1.16568 15.6927 1.28392 15.9088 1.49913C16.1252 1.71411 16.245 2.00776" +
                                                " 16.2411 2.31262V3.04447H8.74702V2.31262ZM4.57846 4.21543H20.4097C20.9918" +
                                                " 4.21543 21.4636 4.68724 21.4636 5.26929C21.4636 5.85134 20.9918 6.32315" +
                                                " 20.4097 6.32315H4.57846C3.99642 6.32315 3.5246 5.85134 3.5246 " +
                                                "5.26929C3.5246 4.68724 3.99642 4.21543 4.57846 4.21543Z", fill: "#00B1DF"
                                        },
                                    ),
                                    React.createElement(
                                        'path',
                                        {
                                            d: "M12.4947 9.05756C12.1713 9.05756 11.9092 9.31965 11.9092 " +
                                                "9.64304V20.7086C11.9092 21.0318 12.1713 21.2941 12.4947 21.2941C12.818 " +
                                                "21.2941 13.0801 21.0318 13.0801 20.7086V9.64304C13.0801 9.31965 12.818 " +
                                                "9.05756 12.4947 9.05756Z", fill: "#00B1DF"
                                        },
                                    )
                                ),
                                React.createElement(
                                    'defs',
                                    {},
                                    React.createElement(
                                        'clipPath',
                                        {id: "clip0"},
                                        React.createElement(
                                            'rect',
                                            {width: "25", height: "25", fill: "white"},
                                        ),
                                    ),
                                ),
                            ),
                        ),
                        React.createElement(
                            'div',
                            {className: "inputZone"},
                            React.createElement(
                                'input',
                                {
                                    type: "text", name: "name", maxLength: "65", className: "form-control block_name",
                                    placeholder: "Введите имя блока...", autoComplete: "off", defaultValue: this.props.Name
                                },
                            ),
                            React.createElement(
                                'textarea',
                                {
                                    name: "content", className: "form-control block_content expand", maxLength: "650",
                                    placeholder: "Введите текст блока...", autoComplete: "off", defaultValue: this.props.Text
                                },
                            ),
                            React.createElement(
                                'input',
                                {
                                    name: "block_id",
                                    className: "form-control block_id",
                                    type: "hidden",
                                    defaultValue: this.props.Id
                                }
                            ),
                        )
                    );
                }
                else
                {
                    return React.createElement(
                        'div',
                        {className: "innerBlock"},
                        React.createElement(
                            'div',
                            {className: "inputZone"},
                            React.createElement(
                                'p',
                                {className: "form-control block_name"},
                                this.props.Name
                            ),
                            React.createElement(
                                'p',
                                {className: "form-control block_content expand"},
                                this.props.Text
                            ),
                            React.createElement(
                                'input',
                                {className: "form-control block_id", name: "block_id", type: "hidden",
                                    value: this.props.Id }
                            ),
                        )
                    );
                }
            }
        }

        document.querySelectorAll('.userInfo')
            .forEach(domContainer => {
                if (count < infoBlocks.length)
                {
                    ReactDOM.render(
                        React.createElement(Block, { Name: infoBlocks[count].name, Text: infoBlocks[count].text,
                            Id: infoBlocks[count].id,  IsLogin: isLogin}),
                        domContainer
                    );
                }
                count ++;
            });

        if (isLogin)
        {
            userScript();
            jQuery_1_3_2("textarea[class*=expand]").TextAreaExpander();
            jQuery_1_3_2("input[class*=expand]").TextAreaExpander();
        }
    }
}

