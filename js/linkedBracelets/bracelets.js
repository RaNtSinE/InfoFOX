function activation()
{
    let bracelets = document.getElementsByClassName("content__bracelet-block");
    let braceletCheck = [];
    braceletCheck[0] = 1;

    for(let i = 0; i < bracelets.length; i++)
    {
        if(braceletCheck[i] === 1)
        {
            bracelets[i].classList.add("activated");
        }
    }

    for (let i = 0; i < bracelets.length; i++)
    {
        bracelets[i].addEventListener("click",function () {
            if(braceletCheck[i] !== 1)
            {
                braceletCheck[i] = 1;
                this.classList.add('activated');
                for(let j = 0; j < bracelets.length; j++)
                {
                    if(i !== j)
                    {
                        braceletCheck[j] = 0;
                        bracelets[j].classList.remove('activated');
                    }
                }
            }
        }, false);
    }


}