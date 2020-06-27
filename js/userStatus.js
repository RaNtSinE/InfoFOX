'use strict';

let isAdmin = "";
let isLogin = "";
let pathToServer = "https://coolstorybob.pythonanywhere.com";
let token = "";
if(localStorage.getItem("token") != "" && localStorage.getItem("token") != null)
{
    token = localStorage.getItem("token").split(' ');
    token = token[0];
}
let isVk = "";

userStatus();
function userStatus()
{
    $.ajax({
        type: "GET",
        url: pathToServer + "/auth/is_admin/",
        headers: {
            "Authorization":localStorage.getItem("token")
        }
    }).done(function (data) {
        if(data.is_admin)
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
        if (token === "Bearer")
        {
            isVk = true;
        }
        else
        {
            isVk = false;
        }
        try{
            allNews();
        }
        catch (e) {
        }
        try {
            loadMenu();
        } catch (e) {
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
        if (token === "Bearer")
        {
            isVk = true;
        }
        else
        {
            isVk = false;
        }

        try{
            allNews();
        }
        catch (e) {
        }
        try {
            loadMenu();
        } catch (e) {
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


