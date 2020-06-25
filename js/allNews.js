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
                    ),
                    React.createElement(
                        'input',
                        {className: "new_id", name: "new_id", type: "hidden", value: this.props.Id}
                    )
                );
            }
        }
        document.querySelectorAll('.new')
            .forEach(domContainer => {
                ReactDOM.render(
                    React.createElement(News, { Created_at: data[count].created_at, Title: data[count].title, Img: data[count].img,
                        Content: data[count].content, Id: data[count].id}),
                    domContainer
                );
                count --;
            });
        if(isAdmin)
        {
            let allNews = document.getElementById('allNews');
            allNews.insertAdjacentHTML('afterbegin', '                    <div class="addNew">' +
                '               <a class="new" href="./addNews">\n' +
                '                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '                            <path class="circle" d="M50 0C22.4289 0 0 22.4289 0 50C0 77.5711 22.4289 100 50 100C77.5711 100 100 77.5711 100 50C100 22.4289 77.5711 0 50 0Z" fill="#F3F3F3"></path>\n' +
                '                            <path class="plusInCircle" d="M71.8734 54.1658H54.1649V71.8744C54.1649 74.1747 52.2987 76.0408 49.9984 76.0408C47.6982 76.0408 45.832 74.1747 45.832 71.8744V54.1658H28.1234C25.8232 54.1658 23.957 52.2997 23.957 49.9994C23.957 47.6992 25.8232 45.833 28.1234 45.833H45.832V28.1244C45.832 25.8242 47.6982 23.958 49.9984 23.958C52.2987 23.958 54.1649 25.8242 54.1649 28.1244V45.833H71.8734C74.1737 45.833 76.0399 47.6992 76.0399 49.9994C76.0399 52.2997 74.1737 54.1658 71.8734 54.1658Z" fill="#093D64"></path>\n' +
                '                        </svg>\n' +
                '\n' +
                '                    </a></div>');
            let news = document.getElementsByClassName('new');
            for (let i = 0; i < news.length - 1; i++)
            {
                news[i + 1].insertAdjacentHTML('afterbegin','<a class="settings" href="./redactNews">' +
                    '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<rect width="40" height="40" rx="5" fill="#093D64"></rect>\n' +
                    '<g clip-path="url(#clip0)">\n' +
                    '<path d="M35.4948 16.2871L32.5678 15.5547C32.4134 15.1231 32.2324 14.6907 32.0268 14.2617L33.5821 11.6692C33.7396 11.4069 33.6979 11.0709 33.4818 10.8548L29.1453 6.51756C28.9291 6.30075 28.5919 6.26037 28.3308 6.41731L25.7377 7.97331C25.3093 7.76756 24.877 7.58656 24.4454 7.43231L23.7129 4.50519C23.6387 4.20831 23.3724 4 23.0664 4H16.9336C16.6276 4 16.3614 4.20831 16.2871 4.50519L15.5547 7.43225C15.1231 7.58656 14.6908 7.76756 14.2624 7.97325L11.6693 6.41725C11.4069 6.261 11.0709 6.30069 10.8548 6.5175L6.51825 10.8547C6.30213 11.0709 6.26044 11.4068 6.418 11.6692L7.97331 14.2616C7.76756 14.6907 7.58656 15.1229 7.43231 15.5546L4.50519 16.2871C4.20831 16.3613 4 16.6276 4 16.9336V23.0664C4 23.3724 4.20831 23.6387 4.50519 23.7129L7.43225 24.4454C7.58656 24.877 7.76756 25.3093 7.97325 25.7384L6.41794 28.3308C6.26038 28.5932 6.30206 28.9291 6.51819 29.1452L10.8548 33.4818C11.0696 33.6973 11.4062 33.7383 11.6692 33.5821L14.2616 32.0267C14.6907 32.2325 15.1229 32.4135 15.5546 32.5677L16.2871 35.4948C16.3613 35.7917 16.6276 36 16.9336 36H23.0664C23.3724 36 23.6386 35.7917 23.7129 35.4948L24.4453 32.5677C24.8769 32.4134 25.3093 32.2324 25.7383 32.0267L28.3308 33.5821C28.5931 33.7389 28.9291 33.6986 29.1452 33.4818L33.4818 29.1452C33.6979 28.9291 33.7396 28.5932 33.582 28.3308L32.0267 25.7384C32.2324 25.3093 32.4134 24.8771 32.5677 24.4454L35.4948 23.7129C35.7916 23.6387 35.9999 23.3724 35.9999 23.0664V16.9336C36 16.6276 35.7917 16.3613 35.4948 16.2871ZM34.6667 22.5462L31.8919 23.2402C31.6686 23.2956 31.4896 23.4629 31.4193 23.6817C31.2278 24.2741 30.9772 24.8737 30.6744 25.4642C30.5689 25.6687 30.5774 25.9135 30.6959 26.1114L32.1712 28.5704L28.5703 32.1713L26.1119 30.6961C25.9147 30.5789 25.6712 30.5697 25.4648 30.6746C24.8737 30.9773 24.2741 31.2279 23.6816 31.4194C23.4629 31.4897 23.2956 31.6687 23.2402 31.8921L22.5462 34.6668H17.4538L16.7598 31.8921C16.7044 31.6687 16.5371 31.4897 16.3183 31.4194C15.7259 31.2279 15.1263 30.9773 14.5351 30.6746C14.3294 30.5684 14.0846 30.5776 13.888 30.6961L11.4297 32.1713L7.82875 28.5703L9.304 26.1113C9.4225 25.9134 9.43094 25.6686 9.3255 25.4642C9.02275 24.8737 8.77213 24.2741 8.58069 23.6816C8.51038 23.4629 8.33131 23.2956 8.108 23.2402L5.33331 22.5462V17.4537L8.10806 16.7597C8.33138 16.7044 8.51044 16.5371 8.58075 16.3183C8.77219 15.7259 9.02281 15.1262 9.32556 14.5357C9.43106 14.3313 9.42256 14.0865 9.30406 13.8886L7.82875 11.4297L11.4297 7.82812L13.8887 9.30406C14.0866 9.42319 14.3314 9.43231 14.5358 9.32556C15.1263 9.02281 15.7259 8.77219 16.3184 8.58075C16.5371 8.51044 16.7044 8.33137 16.7598 8.10806L17.4538 5.33331H22.5463L23.2403 8.10806C23.2956 8.33137 23.4629 8.51044 23.6817 8.58075C24.2741 8.77219 24.8738 9.02281 25.4643 9.32556C25.668 9.43106 25.9135 9.42194 26.1114 9.30406L28.5704 7.82812L32.1713 11.4297L30.6961 13.8887C30.5776 14.0866 30.5691 14.3314 30.6746 14.5358C30.9773 15.1263 31.2279 15.7259 31.4194 16.3184C31.4897 16.5371 31.6688 16.7044 31.8921 16.7598L34.6668 17.4538V22.5462H34.6667Z" fill="#F3F3F3"></path>\n' +
                    '<path d="M20 12C15.5886 12 12 15.5886 12 20C12 24.4114 15.5886 28 20 28C24.4114 28 28 24.4114 28 20C28 15.5886 24.4114 12 20 12ZM20 26.6667C16.3242 26.6667 13.3333 23.6758 13.3333 20C13.3333 16.3242 16.3242 13.3333 20 13.3333C23.6757 13.3333 26.6667 16.3242 26.6667 20C26.6667 23.6757 23.6758 26.6667 20 26.6667Z" fill="#F3F3F3"></path>\n' +
                    '</g>\n' +
                    '<defs>\n' +
                    '<clipPath id="clip0">\n' +
                    '<rect width="32" height="32" fill="white" transform="translate(4 4)"></rect>\n' +
                    '</clipPath>\n' +
                    '</defs>\n' +
                    '</svg></a>')
            }
            $(".settings").on("click", function () {
                localStorage.setItem('new_id', this.parentNode.getElementsByClassName('new_id')[0].value);
            })
        }
    }
}