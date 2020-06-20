'use strict';

function jobs()
{
    if (!isAdmin)
    {
        let jobBlocks = document.getElementsByClassName('innerJob');
        let jobs = document.getElementById('jobs');
        jobs.classList.remove("admin");
        for (let i = 0; i < jobBlocks.length; i++)
        {
            jobBlocks[i].getElementsByClassName("settings")[0].remove();
        }
        document.getElementsByClassName("jobAdd")[0].remove();
    }
    $.ajax({
        type: "GET",
        url: pathToServer + "/api/vacancy/",
        headers: {
            "Authorization":'Token ' + localStorage.getItem("token")
        }
    }).done(function (data) {
        // alert(JSON.stringify(data));
        jobsFromServer(data);
    }).fail(function () {
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
                jobBlocks[i].insertAdjacentHTML('beforeend',
                    '            <div class="settings">\n' +
                          '                <a href="changeJob">\n' +
                          '                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                          '                        <path d="M15.7474 6.14356L14.2839 5.77734C14.2067 5.56153 14.1162 5.34538 14.0134 5.13084L14.791 3.83463C14.8698 3.70344 14.849 3.53547 14.7409 3.42741L12.5726 1.25878C12.4646 1.15037 12.2959 1.13019 12.1654 1.20866L10.8688 1.98666C10.6547 1.88378 10.4385 1.79328 10.2227 1.71616L9.85644 0.252594C9.81934 0.104156 9.68619 0 9.53322 0H6.46681C6.31381 0 6.18069 0.104156 6.14356 0.252594L5.77734 1.71613C5.56153 1.79328 5.34538 1.88378 5.13119 1.98662L3.83463 1.20862C3.70344 1.1305 3.53547 1.15034 3.42741 1.25875L1.25912 3.42738C1.15106 3.53544 1.13022 3.70341 1.209 3.83459L1.98666 5.13081C1.88378 5.34534 1.79328 5.56147 1.71616 5.77731L0.252594 6.14356C0.104156 6.18066 0 6.31381 0 6.46681V9.53322C0 9.68622 0.104156 9.81934 0.252594 9.85647L1.71613 10.2227C1.79328 10.4385 1.88378 10.6547 1.98662 10.8692L1.20897 12.1654C1.13019 12.2966 1.15103 12.4646 1.25909 12.5726L3.42738 14.7409C3.53481 14.8487 3.70309 14.8692 3.83459 14.791L5.13081 14.0134C5.34534 14.1163 5.56147 14.2068 5.77731 14.2839L6.14353 15.7474C6.18066 15.8958 6.31378 16 6.46678 16H9.53319C9.68619 16 9.81931 15.8958 9.85644 15.7474L10.2227 14.2839C10.4385 14.2067 10.6546 14.1162 10.8692 14.0134L12.1654 14.791C12.2966 14.8695 12.4645 14.8493 12.5726 14.7409L14.7409 12.5726C14.8489 12.4646 14.8698 12.2966 14.791 12.1654L14.0133 10.8692C14.1162 10.6547 14.2067 10.4385 14.2838 10.2227L15.7474 9.85647C15.8958 9.81934 16 9.68622 16 9.53322V6.46681C16 6.31381 15.8958 6.18066 15.7474 6.14356ZM15.3333 9.27312L13.946 9.62012C13.8343 9.64778 13.7448 9.73147 13.7096 9.84084C13.6139 10.1371 13.4886 10.4369 13.3372 10.7321C13.2845 10.8343 13.2887 10.9568 13.348 11.0557L14.0856 12.2852L12.2851 14.0857L11.056 13.348C10.9573 13.2894 10.8356 13.2849 10.7324 13.3373C10.4368 13.4887 10.137 13.614 9.84081 13.7097C9.73144 13.7448 9.64778 13.8344 9.62009 13.946L9.27309 15.3334H6.72687L6.37988 13.946C6.35222 13.8344 6.26853 13.7448 6.15916 13.7097C5.86294 13.614 5.56312 13.4887 5.26756 13.3373C5.16469 13.2842 5.04231 13.2888 4.944 13.348L3.71484 14.0857L1.91437 12.2852L2.652 11.0557C2.71125 10.9567 2.71547 10.8343 2.66275 10.7321C2.51137 10.4368 2.38606 10.137 2.29034 9.84081C2.25519 9.73144 2.16566 9.64778 2.054 9.62009L0.666656 9.27312V6.72687L2.05403 6.37988C2.16569 6.35222 2.25522 6.26853 2.29037 6.15916C2.38609 5.86294 2.51141 5.56313 2.66278 5.26788C2.71553 5.16566 2.71128 5.04325 2.65203 4.94431L1.91437 3.71484L3.71484 1.91406L4.94434 2.65203C5.04331 2.71159 5.16569 2.71616 5.26791 2.66278C5.56316 2.51141 5.86297 2.38609 6.15919 2.29037C6.26856 2.25522 6.35222 2.16569 6.37991 2.05403L6.72691 0.666656H9.27312L9.62012 2.05403C9.64778 2.16569 9.73147 2.25522 9.84084 2.29037C10.1371 2.38609 10.4369 2.51141 10.7321 2.66278C10.834 2.71553 10.9568 2.71097 11.0557 2.65203L12.2852 1.91406L14.0857 3.71484L13.348 4.94434C13.2888 5.04331 13.2846 5.16569 13.3373 5.26791C13.4887 5.56316 13.614 5.86297 13.7097 6.15919C13.7448 6.26856 13.8344 6.35222 13.946 6.37991L15.3334 6.72691V9.27312H15.3333Z" fill="white"/>\n' +
                          '                        <path d="M8 4C5.79428 4 4 5.79428 4 8C4 10.2057 5.79428 12 8 12C10.2057 12 12 10.2057 12 8C12 5.79428 10.2057 4 8 4ZM8 11.3333C6.16209 11.3333 4.66666 9.83791 4.66666 8C4.66666 6.16209 6.16213 4.66666 8 4.66666C9.83787 4.66666 11.3333 6.16213 11.3333 8C11.3333 9.83787 9.83791 11.3333 8 11.3333Z" fill="white"/>\n' +
                          '                    </svg>\n' +
                          '                </a>\n' +
                          '            </div>');
            }
            jobs.insertAdjacentHTML('beforeend',
                '        <a href="addJob" class="job jobAdd">\n' +
                      '            <div>\n' +
                      '                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                      '                    <path class="circle" d="M25 0C11.2144 0 0 11.2144 0 25C0 38.7856 11.2144 50 25 50C38.7856 50 50 38.7856 50 25C50 11.2144 38.7856 0 25 0Z" fill="#3AB9DA"/>\n' +
                      '                    <path d="M35.9367 27.0829H27.0824V35.9372C27.0824 37.0873 26.1494 38.0204 24.9992 38.0204C23.8491 38.0204 22.916 37.0873 22.916 35.9372V27.0829H14.0617C12.9116 27.0829 11.9785 26.1498 11.9785 24.9997C11.9785 23.8496 12.9116 22.9165 14.0617 22.9165H22.916V14.0622C22.916 12.9121 23.8491 11.979 24.9992 11.979C26.1494 11.979 27.0824 12.9121 27.0824 14.0622V22.9165H35.9367C37.0869 22.9165 38.0199 23.8496 38.0199 24.9997C38.0199 26.1498 37.0869 27.0829 35.9367 27.0829Z" fill="#FAFAFA"/>\n' +
                      '                </svg>\n' +
                      '            </div>\n' +
                      '        </a>')
        }

        jobsWindow();
        $(".settings a").on("click", function () {
            localStorage.setItem('job_id', this.parentNode.parentNode.getElementsByClassName('job_id')[0].value);
        })
    }
}