'use strict';
function mainNews(){
    $.ajax({
        type: "GET",
        url: pathToServer + "/api/news/last/",
        data: {count: 4},
    }).done(function (data) {
        mainNews(data);
    }).fail(function () {
    });

    function mainNews(data)
    {

        let allNews = document.getElementById('blockWithNews');

        for (let i = 0; i < data.length; i++) {
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
                        { className: "newImage"} ,
                        React.createElement(
                            'img',
                            {src: pathToServer + this.props.Img}
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
                        {className: "newText"},
                        React.createElement(
                            'p',
                            {},
                            this.props.Text
                        )
                    ),
                    React.createElement(
                        'div',
                        {className: "date"},
                        React.createElement(
                            'p',
                            {className: "date"},
                            this.props.Date
                        )
                    )
                );
            }
        }
        document.querySelectorAll('.new')
            .forEach(domContainer => {
                ReactDOM.render(
                    React.createElement(News, { Img: data[count].img, Title: data[count].title, Text: data[count].content, Date: data[count].created_at }),
                    domContainer
                );
                count ++;
            });

    }

}
