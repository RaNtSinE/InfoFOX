'use strict';

function allNews() {
    $.ajax({
        type: "GET",
        url: pathToServer + "/api/news/",
    }).done(function (data) {
        renderNews(data);
    }).fail(function () {
    });

    function renderNews(data)
    {

        let allNews = document.getElementById('allNews');

        for (let i = 0; i < data.length; i++) {
            allNews.insertAdjacentHTML('beforeend', '<div class="new"></div>');
        }

        let count = data.length - 1;

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
                            this.props.Created_at
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
                            {src: pathToServer + this.props.Img}
                        )
                    ),
                    React.createElement(
                        'div',
                        {className: "newText"},
                        React.createElement(
                            'p',
                            {},
                            this.props.Content
                        )
                    )
                );
            }
        }
        document.querySelectorAll('.new')
            .forEach(domContainer => {
                ReactDOM.render(
                    React.createElement(News, { Created_at: data[count].created_at, Title: data[count].title, Img: data[count].img,
                        Content: data[count].content}),
                    domContainer
                );
                count --;
            });
    }
}