'use strict';

class News extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="innerNew">
                <div class="newImage">
                    <img src="img/New3.png"/>
                </div>
                <div class="newTitle">
                    <p class="newTitle">Открыты вакансии</p>
                </div>
                <div class="newText">
                    <p>Мы рады представить вам наш новый раздел вакансий…Мы рады представить вам наш новый раздел
                     вакансий…Мы рады представить вам наш новый раздел вакансий…Мы рады представить вам наш новый
                     раздел вакансий…Мы рады представить вам наш новый раздел вакансий…Мы рады представить вам
                     наш новый раздел вакансий…Мы рады представить вам наш новый раздел вакансий…Мы рады представить
                      вам наш новый раздел вакансий…Мы рады представить вам наш новый раздел вакансий…Мы рады
                     представить вам наш новый раздел вакансий…Мы рады представить вам наш новый раздел вакансий…
                    </p>
                </div>
                <div class="date">
                 <p class="date">21.03.2020</p>
                </div>
            </div>
        );
    }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.new')
    .forEach(domContainer => {
        ReactDOM.render(<News />, domContainer);
    });