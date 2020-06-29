function addJob()
{
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
                type: "POST",
                url: pathToServer + "/api/vacancy/add/",
                data: {name: name, description: description, content: content},
                headers: {
                    "Authorization":localStorage.getItem("token")
                }
            }).done(function () {
                document.location.href = "jobs";
            }).fail(function () {
            });
        }
    });
}