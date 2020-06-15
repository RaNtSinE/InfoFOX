'use strict';

let blocks = [
    { id: 1, name: '28.03.2020', text: '#StayHome'},
    { id: 2, name: '22.03.2020', text: 'Hello'},
    { id: 3, name: '21.03.2020', text: '#Wow'}];

let noLoggined = document.getElementById('nologgined');

for (let i = 0; i < blocks.length; i++) {
    noLoggined.insertAdjacentHTML('beforeend', '<div class="userInfo"></div>');
}

let count = 0;

class Blocks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                    {className: "form-control block_id", name: "block_id", type: "hidden", value: this.props.Id }
                ),
            )
        );
    }
}
document.querySelectorAll('.userInfo')
    .forEach(domContainer => {
        ReactDOM.render(
            React.createElement(Blocks, { Name: blocks[count].name, Text: blocks[count].text, Id: blocks[count].id}),
            domContainer
        );
        count ++;
    });