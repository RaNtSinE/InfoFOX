function addListeners()
{

    $('.close').on('click', function () {
        this.parentNode.parentNode.parentNode.classList.remove("open");
    });

    $('.deleteNews').on('click',function () {
        this.parentNode.classList.add("open");
    });


    $('.blockWithFile input[type=file]').change(function(){

            var x = document.getElementById("file");
            var txt = "";
            if ('files' in x) {
                if (x.files.length == 0) {
                    txt = "Select one or more files.";
                } else {
                    for (var i = 0; i < x.files.length; i++) {
                        var file = x.files[i];
                        if ('name' in file) {
                            txt += file.name;
                        }
                    }
                }
            }
        let fileName = document.getElementsByClassName("js-fileName");
            fileName[0].innerHTML = txt;
    });

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
                    complete: function (data, status, xhr) {
                        if(data.status === 400)
                        {
                            let title = document.getElementById('title');
                            let img = document.getElementById('file');
                            let content = document.getElementById('content');
                            if(title.value.length < 1)
                            {
                                title.classList.add('wrongF');
                                title.placeholder = "Это поле должно быть заполнено";
                            }
                            if(img.value.length < 1)
                            {
                                img.parentNode.classList.add('wrongF');
                            }
                            if(content.value.length < 1)
                            {
                                content.classList.add('wrongF');
                                content.placeholder = "Это поле должно быть заполнено";
                            }
                        }
                        else
                        {
                            document.location.href = "./news";
                        }
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
                complete: function (data) {
                    if(data.status === 400)
                    {
                        let title = document.getElementById('title');
                        let content = document.getElementById('content');
                        if(title.value.length < 1)
                        {
                            title.classList.add('wrongF');
                            title.placeholder = "Это поле должно быть заполнено";
                        }
                        if(content.value.length < 1)
                        {
                            content.classList.add('wrongF');
                            content.placeholder = "Это поле должно быть заполнено";
                        }
                    }
                    else
                    {
                        document.location.href = "./news";
                    }
                }
            }).done(function(data){

            }).fail(function () {
            });
        });
    })

    let check = document.getElementsByClassName('redactedNews');
    if(check.length > 0)
    {
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
    }


    function fields(data) {

        let title = document.getElementById("title");
        let content = document.getElementById("content");
        let field = document.getElementsByClassName("js-fileName");
        let txt = data.img.split('/');
        txt = txt[txt.length - 1];
        field[0].innerHTML = txt;
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


}
addListeners();