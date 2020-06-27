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


}
addListeners();