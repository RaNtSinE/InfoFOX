function addListeners()
{

    $('.close').on('click', function () {
        this.parentNode.parentNode.parentNode.classList.remove("open");
    });

    $('.deleteNews').on('click',function () {
        this.parentNode.classList.add("open");
    });

    // deleteBtns = $('.delete');
    // for (let i = 0; i < deleteBtns.length; i++)
    // {
    //     let j = i;
    //     if(deleteCheck[i] !== 1)
    //     {
    //         deleteCheck[i] = 1;
    //         deleteBtns[i].addEventListener("click",function () {
    //             this.parentNode.parentNode.parentNode.classList.remove("open");
    //             $(this).parent().parent().parent().remove();
    //         });
    //     }
    // }
<<<<<<< HEAD

    $(function () {
        $('#redactNews').on('submit', function (e) {
            e.preventDefault();

            var $that = $(this);
            formData = new FormData($that.get(0));
            $.ajax({
                url: pathToServer + '/api/news/add/',
                type: 'POST',
                dataType: 'json',
                contentType: false,
                processData: false,
                data: formData,
                headers: {
                    Authorization: localStorage.token
                },
                complete: function () {
                    document.location.href = "./news";
                }
            }).done(function(data){

            }).fail(function () {
            });
        });
        $('#redactedNews').on('submit', function (e) {
            e.preventDefault();

            var $that = $(this);
            formData = new FormData($that.get(0));
            $.ajax({
                url: 'https://coolstorybob.pythonanywhere.com/api/news/change/' + localStorage.getItem("new_id"),
                type: 'PUT',
                dataType: 'json',
                contentType: false,
                processData: false,
                data: formData,
                headers: {
                    Authorization: localStorage.token
                },
                complete: function () {
                    document.location.href = "./news";
                }
            }).done(function(data){

            }).fail(function () {
            });
        });
    })
    // $(function () {
    //
    // })

    $.ajax({
        url:'https://coolstorybob.pythonanywhere.com/api/news/' + localStorage.getItem("new_id"),
        type: 'GET',
        headers: {
            Authorization: localStorage.token
        },
    }).done(function(data){
        fields(data);
    }).fail(function () {
    });

    function fields(data) {
        let title = document.getElementById("title");
        let content = document.getElementById("content");
        title.value = data.title;
        content.value = data.content;
    }

    $('.delete').on('click', function () {
        $.ajax({
            url:'https://coolstorybob.pythonanywhere.com/api/news/delete/' + localStorage.getItem("new_id"),
            type: 'DELETE',
            headers: {
                Authorization: localStorage.token
            },
        }).done(function(data){
            document.location.href = "./news";
        }).fail(function () {
        });
    });


=======
>>>>>>> a098337f28ecd623e3d8c9419133ed7f5d9b1f8a
}
addListeners();

function redactNews() {
    $.ajax({
        type: "GET",
        url: pathToServer + "/api/news/" + localStorage.news_id + "/",
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
                url: pathToServer + "/api/news/change/" + localStorage.getItem("job_id"),
                data: {name: name, description: description, content: content},
                headers: {
                    "Authorization":'Token ' + localStorage.getItem("token")
                }
            }).done(function () {
                delete localStorage.news_id;
                document.location.href = "news";
            }).fail(function () {

            });
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
                url: pathToServer + "/api/news/delete/" + localStorage.getItem("job_id"),
                headers: {
                    "Authorization":'Token ' + localStorage.getItem("token")
                }
            }).done(function () {
                delete localStorage.news_id;
                document.location.href = "news";
            }).fail(function () {
            });
        });
    }
}