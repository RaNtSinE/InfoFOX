let hash = window.location.hash;
hash = hash.split('#');
hash = hash[hash.length - 1];
hash = hash.split('&');
let first = hash[0];
let second = hash[1];
let third = hash[2];
first = first.split('=');
first = first[first.length - 1];
second = second.split('=');
second = second[second.length - 1];
third = third.split('=');
third = third[third.length - 1];

if(first == "access_denied")
{
    document.location.href = "./";
}
else
{
    $.ajax({
        type: "POST",
        url: "https://coolstorybob.pythonanywhere.com/auth/convert-token",
        data: {grant_type: "convert_token", client_id: "FkRzR3USRmaB6uNWkHvkysE4K1d8vbBmiwymnOGW", backend: "vk-oauth2", token: first}
    }).done(function (data) {
        localStorage.setItem('token', "Bearer " + data.access_token);
        if(localStorage.getItem('id_brac_for_vk') !== "")
        {
            document.location.href = "./bracelet?id=" + localStorage.getItem("id_brac_for_vk");
        }
        else
        {
            document.location.href = "./userpage";
        }
    }).fail(function () {
        let errors = document.getElementsByClassName("errorlist")[0]
            .getElementsByTagName("li");
        errors[0].innerHTML = "Неверный логин или пароль";
    });
}