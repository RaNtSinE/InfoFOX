'use strict';

function jobs()
{
    if (!isAdmin)
    {
        let jobBlocks = document.getElementsByClassName('innerJob');
        let jobs = document.getElementById('jobs');
        jobs.classList.remove("admin");
        try {
            for (let i = 0; i < jobBlocks.length; i++) {
                jobBlocks[i].getElementsByClassName("settings")[0].remove();
            }
        }
        catch (e) {
        }
        try {
        document.getElementsByClassName("jobAdd")[0].remove();
        }
        catch (e) {
        }
    }
    $.ajax({
        type: "GET",
        url: pathToServer + "/api/vacancy/",
    }).done(function (data) {
        jobsFromServer(data);
    }).fail(function (xhr, textStatus) {
        alert(xhr);
    });

    function jobsFromServer(data)
    {
        let jobs = document.getElementById('jobs');

        if (data.length === 0)
        {
            jobs.insertAdjacentHTML('beforebegin',
                '    <div class="noJobs">\n' +
                      '        <p>На данный момент вакансий нет</p>\n' +
                      '    </div>');
        }

        for (let i = 0; i < data.length; i++) {
            jobs.insertAdjacentHTML('beforeend', '<div class="job"></div>');
        }

        let count = 0;

        class Job extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                return React.createElement(
                    'div',
                    {className: "innerJob"},
                    React.createElement(
                        'div',
                        {className: "jobTitle"},
                        React.createElement(
                            'p',
                            {},
                            this.props.Name
                        )
                    ),
                    React.createElement(
                        'div',
                        {className: "line"}
                    ),
                    React.createElement(
                        'div',
                        {className: "jobInfo"},
                        React.createElement(
                            'p',
                            {},
                            this.props.Description
                        )
                    ),
                    React.createElement(
                        'div',
                        {className: "shading"},
                        React.createElement(
                            'div',
                            {className: "wind"},
                            React.createElement(
                                'div',
                                {className: "vacs"},
                                React.createElement(
                                    'p',
                                    {},
                                    'Вакансия:'
                                )
                            ),
                            React.createElement(
                                'div',
                                {className: "vacName"},
                                React.createElement(
                                    'p',
                                    {},
                                    this.props.Name
                                )
                            ),
                            React.createElement(
                                'div',
                                {className: "vacInfo"},
                                React.createElement(
                                    'p',
                                    {},
                                    'Описание:'
                                )
                            ),
                            React.createElement(
                                'div',
                                {className: "textVacInfo"},
                                React.createElement(
                                    'p',
                                    {},
                                    this.props.Description
                                )
                            ),
                            React.createElement(
                                'div',
                                {className: "vacTreb"},
                                React.createElement(
                                    'p',
                                    {},
                                    'Требования:'
                                )
                            ),
                            React.createElement(
                                'div',
                                {className: "textVacTreb"},
                                React.createElement(
                                    'p',
                                    {},
                                    this.props.Content
                                )
                            ),
                            React.createElement(
                                'a',
                                {className: "close"},
                                'Скрыть'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        {className: "more"},
                        React.createElement(
                            'a',
                            {className: "more"},
                            'Узнать больше'
                        )
                    ),
                    React.createElement(
                        'input',
                        {className: "job_id", name: "job_id", type: "hidden",
                            value: this.props.Id }
                    ),
                )
            }
        }

        document.querySelectorAll('.job')
            .forEach(domContainer => {
                ReactDOM.render(
                    React.createElement(
                        Job,
                        { Name: data[count].name,
                            Description: data[count].description,
                            Content: data[count].content,
                            Id: data[count].id}),
                    domContainer
                );
                count ++;
            });
        if (isAdmin)
        {
            let jobBlocks = document.getElementsByClassName('innerJob');
            jobs.classList.add('admin');
            for (let i = 0; i < jobBlocks.length; i++)
            {
                jobBlocks[i].insertAdjacentHTML('beforeend','' +
                    '            <div class="settings">\n' +
                          '                <a>\n' +
                            '            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '                <rect width="30" height="30" rx="5" fill="#093D64"/>\n' +
                            '                <path d="M26.6211 12.2153L24.4258 11.666C24.3101 11.3423 24.1743 11.0181 24.0201 10.6963L25.1865 8.75194C25.3047 8.55516 25.2735 8.3032 25.1114 8.14111L21.8589 4.88817C21.6968 4.72556 21.4439 4.69528 21.2481 4.81298L19.3033 5.97998C18.982 5.82567 18.6578 5.68992 18.334 5.57423L17.7847 3.37889C17.729 3.15623 17.5293 3 17.2998 3H12.7002C12.4707 3 12.271 3.15623 12.2153 3.37889L11.666 5.57419C11.3423 5.68992 11.0181 5.82567 10.6968 5.97994L8.75194 4.81294C8.55516 4.69575 8.3032 4.72552 8.14111 4.88812L4.88869 8.14106C4.72659 8.30316 4.69533 8.55511 4.8135 8.75189L5.97998 10.6962C5.82567 11.018 5.68992 11.3422 5.57423 11.666L3.37889 12.2153C3.15623 12.271 3 12.4707 3 12.7002V17.2998C3 17.5293 3.15623 17.729 3.37889 17.7847L5.57419 18.334C5.68992 18.6578 5.82567 18.982 5.97994 19.3038L4.81345 21.2481C4.69528 21.4449 4.72655 21.6968 4.88864 21.8589L8.14106 25.1114C8.30222 25.273 8.55464 25.3037 8.75189 25.1865L10.6962 24.0201C11.018 24.1744 11.3422 24.3101 11.666 24.4258L12.2153 26.6211C12.271 26.8438 12.4707 27 12.7002 27H17.2998C17.5293 27 17.729 26.8438 17.7847 26.6211L18.334 24.4258C18.6577 24.3101 18.9819 24.1743 19.3037 24.0201L21.2481 25.1865C21.4448 25.3042 21.6968 25.274 21.8589 25.1114L25.1113 21.8589C25.2734 21.6968 25.3047 21.4449 25.1865 21.2481L24.02 19.3038C24.1743 18.982 24.3101 18.6578 24.4258 18.334L26.6211 17.7847C26.8437 17.729 27 17.5293 27 17.2998V12.7002C27 12.4707 26.8438 12.271 26.6211 12.2153ZM26 16.9097L23.919 17.4302C23.7515 17.4717 23.6172 17.5972 23.5644 17.7613C23.4209 18.2056 23.2329 18.6553 23.0058 19.0982C22.9267 19.2515 22.9331 19.4351 23.022 19.5835L24.1284 21.4278L21.4277 24.1285L19.584 23.022C19.436 22.9342 19.2534 22.9273 19.0986 23.0059C18.6553 23.233 18.2055 23.421 17.7612 23.5645C17.5972 23.6173 17.4717 23.7516 17.4301 23.919L16.9096 26.0001H13.0903L12.5698 23.919C12.5283 23.7516 12.4028 23.6173 12.2387 23.5645C11.7944 23.421 11.3447 23.233 10.9013 23.0059C10.747 22.9263 10.5635 22.9332 10.416 23.022L8.57227 24.1285L5.87156 21.4277L6.978 19.5835C7.06687 19.435 7.0732 19.2515 6.99412 19.0981C6.76706 18.6553 6.57909 18.2055 6.43552 17.7612C6.38278 17.5972 6.24848 17.4717 6.081 17.4301L3.99998 16.9097V13.0903L6.08105 12.5698C6.24853 12.5283 6.38283 12.4028 6.43556 12.2387C6.57914 11.7944 6.76711 11.3447 6.99417 10.9018C7.0733 10.7485 7.06692 10.5649 6.97805 10.4165L5.87156 8.57227L8.57227 5.87109L10.4165 6.97805C10.565 7.06739 10.7485 7.07423 10.9019 6.99417C11.3447 6.76711 11.7945 6.57914 12.2388 6.43556C12.4028 6.38283 12.5283 6.24853 12.5699 6.08105L13.0904 3.99998H16.9097L17.4302 6.08105C17.4717 6.24853 17.5972 6.38283 17.7613 6.43556C18.2056 6.57914 18.6553 6.76711 19.0982 6.99417C19.251 7.0733 19.4351 7.06645 19.5835 6.97805L21.4278 5.87109L24.1285 8.57227L23.022 10.4165C22.9332 10.565 22.9268 10.7485 23.0059 10.9019C23.233 11.3447 23.421 11.7945 23.5645 12.2388C23.6173 12.4028 23.7516 12.5283 23.919 12.5699L26.0001 13.0904V16.9097H26Z" fill="#F3F3F3"/>\n' +
                            '                <path d="M15 9C11.6914 9 9 11.6914 9 15C9 18.3086 11.6914 21 15 21C18.3086 21 21 18.3086 21 15C21 11.6914 18.3086 9 15 9ZM15 20C12.2431 20 9.99998 17.7569 9.99998 15C9.99998 12.2431 12.2432 9.99998 15 9.99998C17.7568 9.99998 20 12.2432 20 15C20 17.7568 17.7569 20 15 20Z" fill="#F3F3F3"/>\n' +
                            '            </svg>' +
                          '                </a>\n' +
                          '            </div>');
            }
            jobs.insertAdjacentHTML('beforeend',
                '        <a href="addJob" class="job jobAdd">\n' +
                      '            <div>\n' +
                      '                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                      '                    <path class="circle" d="M25 0C11.2144 0 0 11.2144 0 25C0 38.7856 11.2144 50 25 50C38.7856 50 50 38.7856 50 25C50 11.2144 38.7856 0 25 0Z" fill="#F3F3F3"/>\n' +
                      '                    <path class="plusInCircle" d="M35.9367 27.0829H27.0824V35.9372C27.0824 37.0873 26.1494 38.0204 24.9992 38.0204C23.8491 38.0204 22.916 37.0873 22.916 35.9372V27.0829H14.0617C12.9116 27.0829 11.9785 26.1498 11.9785 24.9997C11.9785 23.8496 12.9116 22.9165 14.0617 22.9165H22.916V14.0622C22.916 12.9121 23.8491 11.979 24.9992 11.979C26.1494 11.979 27.0824 12.9121 27.0824 14.0622V22.9165H35.9367C37.0869 22.9165 38.0199 23.8496 38.0199 24.9997C38.0199 26.1498 37.0869 27.0829 35.9367 27.0829Z" fill="#093D64"/>\n' +
                      '                </svg>\n' +
                      '            </div>\n' +
                      '        </a>')
        }

        jobsWindow();
        level();
        levelTitle();
        $(".settings a").on("click", function () {
            localStorage.setItem('job_id', this.parentNode.parentNode.getElementsByClassName('job_id')[0].value);
            document.location.href = "./changeJob";
        })
    }
}