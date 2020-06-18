'use strict';

let isAdmin = "";
let isLogin = "";
let pathToServer = "https://coolstorybob.pythonanywhere.com";

$.ajax({
    type: "GET",
    url: pathToServer + "/api/news/",
}).done(function (data) {
    isAdmin = false;
    isLogin = false;
    loadMenu();
    try{
        allNews();
    }
    catch (e) {
    }
    try {
        jobs();
    }
    catch (e) {
    }
    try {
        mainNews();
    }
    catch (e) {
    }
    try {
        loadUser();
    }
    catch (e) {
    }
}).fail(function () {
});



