var path = location.pathname.split('/');
let pathToServer = "https://coolstorybob.pythonanywhere.com";
var path_first = path[path.length-2];
var path_second = path[path.length-1];

$.ajax({
    type: "POST",
    url: pathToServer + "/auth/users/activation/",
    data: {uid: path_first, token: path_second}
}).done(function (data) {
    document.location.href = "../../login_success";
}).fail(function () {
    document.location.href = "../../404"
});