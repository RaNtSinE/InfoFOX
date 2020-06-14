// using jQuery
async function f() {


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

}

f();

let delBtns = $('.del');
let blocks = $('.userInfo');
let check = [];
let inputCheck = [];
let success = 0;

var listener = function () {
    let msg = document.getElementById("alert");
    function open()
    {
        function opsav()
        {
            $('#sav').addClass('closee');
        }
        function opal()
        {
            $('#alert').addClass('openn');
        }
        function clal()
        {
            $('#alert').removeClass('openn');
        }
        function clsav()
        {
            $('#sav').removeClass('closee');
        }
        opsav();
        setTimeout(opal, 500);
        setTimeout(clal, 2000);
        setTimeout(clsav, 2500);
    }
    function opensav()
    {
        success = 0;
        function opsav()
        {
            $('#sav').addClass('closee');
        }
        function opsuc()
        {
            $('#suc').addClass('openn');
        }
        function clsuc()
        {
            $('#suc').removeClass('openn');
        }
        function clsav()
        {
            $('#sav').removeClass('closee');
        }
        opsav();
        setTimeout(opsuc, 500);
        setTimeout(clsuc, 2000);
        setTimeout(clsav, 2500);
    }
    success = 1;
    for(let i = 0; i < blocks.length - 1; i++)
    {
        let infoblock = blocks[i].getElementsByClassName("form-control");

        if (infoblock[0].value == "" || infoblock[1].value == "")
        {
            infoblock[0].parentElement.classList.add("red-border");
            success = 0;
        }
    }
    if(success === 0)
    {
        msg.innerHTML = "Заполните или удалите пустые блоки";
        open();
    }
    else if(success === 1)
    {
        success = 0;
        for(let i = 0; i < blocks.length - 1; i++)
        {
            j = i;

            if(check[i] === 1)
            {
                check[i] = 0;
                let infoblock = blocks[j].getElementsByClassName("form-control");
                if (infoblock[0].value !== "" && infoblock[1].value !== "")
                {
                    if (infoblock[2].value !== "-1")
                    {
                        $.ajax({
                            type: "POST",
                            url: "/user/edit_block",
                            data: {block_id: infoblock[2].value, name: infoblock[0].value, content: infoblock[1].value }
                        }).done(function () {
                            opensav();
                        }).fail(function () {
                            msg.innerHTML = "Сервер недоступен, попробуйте позже";
                            open();
                        });
                    }
                    else
                    {
                        var request = $.ajax({
                            type: "POST",
                            url: "/user/add_block",
                            dataType: 'json',
                            data: {name: infoblock[0].value, content: infoblock[1].value }
                        });
                        request.done(function(data){
                            infoblock[2].value = data.block_id;
                            opensav();
                        }).fail(function () {
                            msg.innerHTML = "Сервер недоступен, попробуйте позже";
                            open();
                        });
                    }

                }
            }
        }
    }
};

function addSaveListener() {
    let saveBtn = $('#sav');
    blocks = $('.userInfo');
    saveBtn[0].removeEventListener("click", listener, false);
    saveBtn[0].addEventListener("click",listener, false);

}

addSaveListener();

function addInputListeners() {
    blocks = $('.userInfo');
    for (let i = 0; i < blocks.length - 1; i++)
    {
        let j = i;

        if(inputCheck[i] !== 1)
        {
            inputCheck[i] = 1;
            let infoblock = blocks[j].getElementsByClassName("form-control");
            infoblock[0].addEventListener("input", function () {
               check[j] = 1;
                infoblock[0].parentElement.classList.remove("red-border");
            });
            infoblock[1].addEventListener("input", function () {
                check[j] = 1;
                infoblock[1].parentElement.classList.remove("red-border");
            });
        }
    }
}

addInputListeners();

function addDeleteListeners() {
    delBtns = $('.del');
    for (let i = 0; i < delBtns.length; i++)
    {
        let j = i;
        delBtns[i].addEventListener("click",function () {
                this.parentNode.classList.add("open");
        });

    }
    closeBtns = $('.close');
    for (var i = 0; i < closeBtns.length; i++) {
            closeBtns[i].addEventListener("click", function() {
            this.parentNode.parentNode.parentNode.classList.remove("open");
        });
    }

    deleteBtns = $('.delete');
    for (let i = 0; i < deleteBtns.length; i++)
    {
        let j = i;
        deleteBtns[i].addEventListener("click",function () {
            let infoblock = this.parentNode.parentNode.parentNode.getElementsByClassName("form-control");
            this.parentNode.parentNode.parentNode.classList.remove("open");
            $(this).parent().parent().parent().remove();
            addSaveListener();
            check[j] = 0;
            inputCheck[j] = 0;

            var request = $.ajax({
                url: "/user/delete_block",
                type: "POST",
                data: {block_id : infoblock[2].value}
            });
            request.done(function(status) {
            });
        });
    }
}

addDeleteListeners();

let newdiv = document.createElement("div");
newdiv.innerHTML = "    <div class=\"userInfo\">\n" +
    "        <div class=\"shading\">\n" +
    "            <div class=\"wind\">\n" +
    "                <div class=\"right\">\n" +
    "                    <p>Вы уверены, что хотите удалить данный блок?</p>\n" +
    "                </div>\n" +
    "                <div class=\"warn\">\n" +
    "                    <p>Удаленные данные будет невозможно восстановить</p>\n" +
    "                </div>\n" +
    "\n" +
    "                <a class=\"delete\">Удалить</a>\n" +
    "                <a class=\"close\">Отмена</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <a class=\"but del\">\n" +
    "            <svg width=\"25\" height=\"25\" viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                <g clip-path=\"url(#clip0)\">\n" +
    "                    <path d=\"M15.9478 9.05756C15.6244 9.05756 15.3623 9.31965 15.3623 9.64304V20.7086C15.3623 21.0318 15.6244 21.2941 15.9478 21.2941C16.2712 21.2941 16.5333 21.0318 16.5333 20.7086V9.64304C16.5333 9.31965 16.2712 9.05756 15.9478 9.05756Z\" fill=\"#00B1DF\"/>\n" +
    "                    <path d=\"M9.03958 9.05756C8.7162 9.05756 8.4541 9.31965 8.4541 9.64304V20.7086C8.4541 21.0318 8.7162 21.2941 9.03958 21.2941C9.36297 21.2941 9.62506 21.0318 9.62506 20.7086V9.64304C9.62506 9.31965 9.36297 9.05756 9.03958 9.05756Z\" fill=\"#00B1DF\"/>\n" +
    "                    <path d=\"M4.00465 7.44265V21.8676C4.00465 22.7202 4.31729 23.5209 4.86343 24.0954C5.40705 24.6715 6.1636 24.9985 6.95537 24.9999H18.0328C18.8248 24.9985 19.5813 24.6715 20.1247 24.0954C20.6709 23.5209 20.9835 22.7202 20.9835 21.8676V7.44265C22.0692 7.15448 22.7727 6.10565 22.6274 4.99164C22.482 3.87786 21.5331 3.0447 20.4097 3.04447H17.4121V2.31262C17.4155 1.69719 17.1722 1.10622 16.7365 0.671456C16.3008 0.236921 15.709 -0.00504608 15.0935 -1.46257e-05H9.89465C9.27921 -0.00504608 8.68733 0.236921 8.25165 0.671456C7.81598 1.10622 7.57264 1.69719 7.57607 2.31262V3.04447H4.57846C3.45508 3.0447 2.50619 3.87786 2.36074 4.99164C2.21551 6.10565 2.919 7.15448 4.00465 7.44265ZM18.0328 23.829H6.95537C5.95434 23.829 5.17561 22.969 5.17561 21.8676V7.49411H19.8126V21.8676C19.8126 22.969 19.0338 23.829 18.0328 23.829ZM8.74702 2.31262C8.74314 2.00776 8.86298 1.71434 9.07933 1.49913C9.29545 1.28392 9.58956 1.16568 9.89465 1.17094H15.0935C15.3986 1.16568 15.6927 1.28392 15.9088 1.49913C16.1252 1.71411 16.245 2.00776 16.2411 2.31262V3.04447H8.74702V2.31262ZM4.57846 4.21543H20.4097C20.9918 4.21543 21.4636 4.68724 21.4636 5.26929C21.4636 5.85134 20.9918 6.32315 20.4097 6.32315H4.57846C3.99642 6.32315 3.5246 5.85134 3.5246 5.26929C3.5246 4.68724 3.99642 4.21543 4.57846 4.21543Z\" fill=\"#00B1DF\"/>\n" +
    "                    <path d=\"M12.4947 9.05756C12.1713 9.05756 11.9092 9.31965 11.9092 9.64304V20.7086C11.9092 21.0318 12.1713 21.2941 12.4947 21.2941C12.818 21.2941 13.0801 21.0318 13.0801 20.7086V9.64304C13.0801 9.31965 12.818 9.05756 12.4947 9.05756Z\" fill=\"#00B1DF\"/>\n" +
    "                </g>\n" +
    "                <defs>\n" +
    "                    <clipPath id=\"clip0\">\n" +
    "                        <rect width=\"25\" height=\"25\" fill=\"white\"/>\n" +
    "                    </clipPath>\n" +
    "                </defs>\n" +
    "            </svg>\n" +
    "        </a>\n" +
    "        <div class=\"inputZone\">\n" +
    "                <input type=\"text\" name=\"name\" maxlength=\"65\" class=\"form-control block_name\"\n" +
    "                       placeholder=\"Введите имя блока...\" autocomplete=\"off\">\n" +
    "\n" +
    "                <textarea name=\"content\" class=\"form-control block_content expand\" maxlength=\"650\"\n" +
    "                          placeholder=\"Введите текст блока...\" autocomplete=\"off\"></textarea>\n" +
    "                <input name=\"block_id\" class=\"form-control block_id\" type=\"hidden\" value=\"-1\">\n" +
    "        </div>\n" +
    "    </div>";


var $block = $(newdiv).clone();

$('.add').click(function() {
    $(this).before($block.clone());
    jQuery_1_3_2("textarea[class*=expand]").TextAreaExpander();
    addDeleteListeners();
    addSaveListener();
    addInputListeners();
});
