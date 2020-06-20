function addJob()
{
    $('.sav a').on('click',function()
    {
        let name = document.getElementById('id_name').value;
        let description = document.getElementById('id_description').value;
        let content = document.getElementById('id_content').value;
        $.ajax({
            type: "POST",
            url: pathToServer + "/api/vacancy/add/",
            data: {name: name, description: description, content: content},
            headers: {
                "Authorization":'Token ' + localStorage.getItem("token")
            }
        }).done(function () {
            document.location.href = "jobs";
        }).fail(function () {

        });
    });
}