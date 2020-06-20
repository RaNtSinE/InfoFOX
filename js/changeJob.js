function changeJob() {
    $.ajax({
        type: "GET",
        url: pathToServer + "/api/vacancy/" + localStorage.job_id + "/",
        headers: {
            "Authorization":'Token ' + localStorage.getItem("token")
        }
    }).done(function (data) {
        document.getElementById("id_name").value = data.name;
        document.getElementById("id_description").value = data.description;
        document.getElementById("id_content").value = data.content;
        saveListener();
    }).fail(function () {

    });

    function saveListener() {
        $('.sav a').on('click',function()
        {
            let name = document.getElementById('id_name').value;
            let description = document.getElementById('id_description').value;
            let content = document.getElementById('id_content').value;
            $.ajax({
                type: "PUT",
                url: pathToServer + "/api/vacancy/change/" + localStorage.getItem("job_id"),
                data: {name: name, description: description, content: content},
                headers: {
                    "Authorization":'Token ' + localStorage.getItem("token")
                }
            }).done(function () {
                delete localStorage.job_id;
                document.location.href = "jobs";
            }).fail(function () {

            });
        });

        $('.del a').on('click',function()
        {
            $.ajax({
                type: "DELETE",
                url: pathToServer + "/api/vacancy/delete/" + localStorage.getItem("job_id"),
                headers: {
                    "Authorization":'Token ' + localStorage.getItem("token")
                }
            }).done(function () {
                delete localStorage.job_id;
                document.location.href = "jobs";
            }).fail(function () {
            });
        });
    }
}