function changeJob() {
    $.ajax({
        type: "GET",
        url: pathToServer + "/api/vacancy/" + localStorage.job_id + "/",
        headers: {
            "Authorization":localStorage.getItem("token")
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
            let success = 1;
            if (name.length < 1)
            {
                let nameF = document.getElementById('id_name');
                nameF.classList.add('wrongF');
                nameF.placeholder = "Это поле должно быть заполнено";
                success = 0;
            }
            if(description.length < 1)
            {
                let descriptionF = document.getElementById('id_description');
                descriptionF.classList.add('wrongF');
                descriptionF.placeholder = "Это поле должно быть заполнено";
                success = 0;
            }
            if (content.length < 1)
            {
                let contentF = document.getElementById('id_content');
                contentF.classList.add('wrongF');
                contentF.placeholder = "Это поле должно быть заполнено";
                success = 0;
            }
            if(success === 1)
            {
                $.ajax({
                    type: "PUT",
                    url: pathToServer + "/api/vacancy/change/" + localStorage.getItem("job_id"),
                    data: {name: name, description: description, content: content},
                    headers: {
                        "Authorization":localStorage.getItem("token")
                    }
                }).done(function () {
                    delete localStorage.job_id;
                    document.location.href = "jobs";
                }).fail(function () {
                });
            }
        });

            $('.close').on('click', function () {
                this.parentNode.parentNode.parentNode.classList.remove("open");
            });

            $('.del a').on('click',function () {
                this.parentNode.parentNode.classList.add("open");
            });

        $('.delete').on('click',function()
        {
            $.ajax({
                type: "DELETE",
                url: pathToServer + "/api/vacancy/delete/" + localStorage.getItem("job_id"),
                headers: {
                    "Authorization":localStorage.getItem("token")
                }
            }).done(function () {
                delete localStorage.job_id;
                document.location.href = "jobs";
            }).fail(function () {
            });
        });
    }
}