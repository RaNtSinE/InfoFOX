'use strict';

let jobsFromServer = [
    {
        id: 1,
        name: 'Слесарь',
        description: 'Стаж работы 20 лет',
        content: 'Стаж работы 20 лет'
    },
    {
        id: 2,
        name: 'Дима гей',
        description: 'Стаж работы 20 лет',
        content: 'Опыт гомосексуализма не менее 16 лет'
    }
];

let jobs = document.getElementById('jobs');

for (let i = 0; i < jobsFromServer.length; i++) {
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
            )
        )
    }
}

document.querySelectorAll('.job')
    .forEach(domContainer => {
        ReactDOM.render(
            React.createElement(
                Job,
                { Name: jobsFromServer[count].name,
                    Description: jobsFromServer[count].description,
                    Content: jobsFromServer[count].content}),
            domContainer
        );
        count ++;
    });
