'use strict';

let news = [
    { id: 1, date: '28.03.2020', title: '#StayHome', img: 'img/New1.png', text: 'В связи со сложной эпидемиологической ситуацией мы вынуждены приостановить работу\n' +
            'пунктов продаж В связи со сложной эпидемиологической ситуацией мы вынуждены\n' +
            'приостановить работу пунктов продаж В связи со сложной эпидемиологической ситуацией\n'+
            'мы вынуждены приостановить работу пунктов продаж В связи со сложной\n'+
            'эпидемиологической ситуацией мы вынуждены приостановить работу пунктов продаж В\n' +
            'связи со сложной эпидемиологической ситуацией мы вынуждены приостановить работу\n' +
            'пунктов продаж В связи со сложной эпидемиологической ситуацией мы вынуждены\n' +
            'приостановить работу пунктов продаж\n' },
    { id: 2, date: '23.03.2020', title: 'Новые пункты продаж', img: 'img/New2.png', text: 'В связи с расширением желающих браслеты, мы открываем новые пункты продаж…В связи\n' +
            'с расширением желающих браслеты, мы открываем новые пункты продаж…В связи с расширением\n' +
            'желающих браслеты, мы открываем новые пункты продаж…В связи с расширением желающих браслеты,\n' +
            'мы открываем новые пункты продаж…В связи с расширением желающих браслеты, мы открываем новые пункты\n' +
            'продаж…В связи с расширением желающих браслеты, мы открываем новые пункты продаж…В связи с расширением\n' +
            'желающих браслеты, мы открываем новые пункты продаж…\n' },
    { id: 3, date: '21.03.2020', title: 'Открыты вакансии', img: 'img/New3.png', text: 'Мы рады представить вам наш новый раздел вакансий…Мы рады представить вам наш новый раздел\n' +
            'вакансий…Мы рады представить вам наш новый раздел вакансий…Мы рады представить вам наш новый\n' +
            'раздел вакансий…Мы рады представить вам наш новый раздел вакансий…Мы рады представить вам\n' +
            'наш новый раздел вакансий…Мы рады представить вам наш новый раздел вакансий…Мы рады представить\n' +
            'вам наш новый раздел вакансий…Мы рады представить вам наш новый раздел вакансий…Мы рады\n' +
            'представить вам наш новый раздел вакансий…Мы рады представить вам наш новый раздел вакансий…\n'}
];

let allNews = document.getElementById('allNews');

for (let i = 0; i < news.length; i++) {
    allNews.insertAdjacentHTML('beforeend', '<div class="new"></div>');
}

let count = 0;

class News extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            {className: "innerNew"},
            React.createElement(
                'div',
                {className: "date"},
                React.createElement(
                    'p',
                    {className: "date"},
                    this.props.Date
                )
            ),
            React.createElement(
                'div',
                { className: "newTitle"} ,
                React.createElement(
                    'p',
                    {className: "newTitle"},
                    this.props.Title
                )
            ),
            React.createElement(
                'div',
                { className: "newImage"} ,
                React.createElement(
                    'img',
                    {src: this.props.Img}
                )
            ),
            React.createElement(
                'div',
                {className: "newText"},
                React.createElement(
                    'p',
                    {},
                    this.props.Text
                )
            )
        );
    }
}
document.querySelectorAll('.new')
    .forEach(domContainer => {
        ReactDOM.render(
            React.createElement(News, { Date: news[count].date, Title: news[count].title, Img: news[count].img,
                Text: news[count].text}),
            domContainer
        );
        count ++;
    });