'use strict';

let isAdmin = "";
let isLogin = "";
let pathToServer = "https://coolstorybob.pythonanywhere.com";

userStatus();
function userStatus()
{
    $.ajax({
        type: "GET",
        url: pathToServer + "/auth/is_admin",
        headers: {
            "Authorization":'Token ' + localStorage.getItem("token")
        }
    }).done(function (data) {
        if(data.User_is_admin)
        {
            isAdmin = true;
        }
        else
        {
            isAdmin = false;
        }
        if (localStorage.getItem("token") != "" && localStorage.getItem("token") != null)
        {
            isLogin = true;
        }
        else {
            isLogin = false;
        }
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
            loadUser();
        }
        catch (e) {
        }
        try {
            mainNews();
        }
        catch (e) {
        }
        try {
            addJob();
        }
        catch (e) {
        }
        try {
            changeJob();
        }
        catch (e) {
        }
        try {
            loadProfile();
        }
        catch (e) {
        }
        try {
            loadActivation();
        }
        catch (e) {
        }

    }).fail(function (xhr, textStatus) {
        isAdmin = false;
        if(xhr.status === 401)
        {
            localStorage.setItem("token","");
        }
        if (localStorage.getItem("token") != "" && localStorage.getItem("token") != null)
        {
            isLogin = true;
        }
        else {
            isLogin = false;
        }
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
            loadUser();
        }
        catch (e) {
        }
        try {
            mainNews();
        }
        catch (e) {
        }
        try {
            addJob();
        }
        catch (e) {
        }
        try {
            changeJob();
        }
        catch (e) {
        }
        try {
            loadProfile();
        }
        catch (e) {
        }
        try {
            loadActivation();
        }
        catch (e) {
        }
    });

}


