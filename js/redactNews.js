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

}
addListeners();