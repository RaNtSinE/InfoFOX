'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var News = function (_React$Component) {
    _inherits(News, _React$Component);

    function News(props) {
        _classCallCheck(this, News);

        return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));
    }

    _createClass(News, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "innerNew" },
                React.createElement(
                    "div",
                    { "class": "newImage" },
                    React.createElement("img", { src: "img/New3.png" })
                ),
                React.createElement(
                    "div",
                    { "class": "newTitle" },
                    React.createElement(
                        "p",
                        { "class": "newTitle" },
                        "\u041E\u0442\u043A\u0440\u044B\u0442\u044B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "newText" },
                    React.createElement(
                        "p",
                        null,
                        "\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439\u2026\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439\u2026\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439\u2026\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439\u2026\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439\u2026\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439\u2026\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439\u2026\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439\u2026\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439\u2026\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439\u2026\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u0430\u0448 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439\u2026"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "date" },
                    React.createElement(
                        "p",
                        { "class": "date" },
                        "21.03.2020"
                    )
                )
            );
        }
    }]);

    return News;
}(React.Component);

document.querySelectorAll('.new').forEach(function (domContainer) {
    ReactDOM.render(React.createElement(News, null), domContainer);
});