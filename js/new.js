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

        $(document).ready(function () {

            $(".newImage img").load(function () {
                let width = $('body').innerWidth();
                if(width > 1000) {
                    if ($(this).width() >= $(this).height()) {
                        $(this).css("width", "auto");
                        $(this).css("height", "13vw");
                    }
                    else
                    {
                        $(this).css("width", "15vw");
                        $(this).css("height", "auto");
                    }
                }
                else if(width <= 1000 && width > 500)
                {
                    if ($(this).width() >= $(this).height()) {
                        $(this).css("width", "auto");
                        $(this).css("height", "31vw");
                    }
                    else
                    {
                        $(this).css("width", "36vw");
                        $(this).css("height", "auto");
                    }
                }
                else
                {
                    if ($(this).width() >= $(this).height()) {
                        $(this).css("width", "auto");
                        $(this).css("height", "68vw");
                    }
                    else
                    {
                        $(this).css("width", "79vw");
                        $(this).css("height", "auto");
                    }
                }
            });
        });


    }
    setInterval(function(){ imageResize()},1000);
    function imageResize()
    {
        let width = $('body').innerWidth();
        if(width > 1000) {
            let news = document.getElementsByClassName("new");
            for (let i = 0; i < news.length; i++) {
                let image = news[i].getElementsByClassName("newImage");
                let img = image[0].getElementsByTagName("img");

                if (img[0].style.width === "auto") {
                    img[0].style.width = "auto";
                    img[0].style.height = "13vw";
                } else {
                    img[0].style.width = "15vw";
                    img[0].style.height = "auto";
                }
            }
        }
        else if(width <= 1000 && width > 500)
        {
            let news = document.getElementsByClassName("new");
            for (let i = 0; i < news.length; i++) {
                let image = news[i].getElementsByClassName("newImage");
                let img = image[0].getElementsByTagName("img");

                if (img[0].style.width === "auto") {
                    img[0].style.width = "auto";
                    img[0].style.height = "31vw";
                } else {
                    img[0].style.width = "36vw";
                    img[0].style.height = "auto";
                }
            }
        }
        else
        {
            let news = document.getElementsByClassName("new");
            for (let i = 0; i < news.length; i++) {
                let image = news[i].getElementsByClassName("newImage");
                let img = image[0].getElementsByTagName("img");

                if (img[0].style.width === "auto") {
                    img[0].style.width = "auto";
                    img[0].style.height = "68vw";
                } else {
                    img[0].style.width = "79vw";
                    img[0].style.height = "auto";
                }
            }
        }
    }

}
