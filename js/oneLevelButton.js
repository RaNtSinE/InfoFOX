var textInput = document.getElementsByClassName('jobInfo');
let maxHeight = 18;

function level()
{
    if (window.innerWidth > 1000)
    {
        for(let i = 0; i < textInput.length; i++)
        {
            if(textInput[i].offsetHeight > maxHeight)
            {
                maxHeight = textInput[i].offsetHeight;

            }
            if((i % 3) === 2)
            {
                for(let j = i - 2; j < i + 1; j++)
                {
                    textInput[j].style.height = maxHeight + 'px';
                }
                maxHeight = 18;
            }
            if(i === textInput.length - 1 && (i % 3) !== 2)
            {
                for(let j = (i / 3) * 3 - 1; j < textInput.length; j ++)
                {
                    textInput[j].style.height = maxHeight + 'px';
                }
            }
        }
    }
    else if (window.innerWidth <= 1000 && window.innerWidth > 600)
    {
        for(let i = 0; i < textInput.length; i++)
        {
            if(textInput[i].offsetHeight > maxHeight)
            {
                maxHeight = textInput[i].offsetHeight;

            }
            if((i % 2) === 1)
            {

                for(let j = i - 1; j < i + 1; j++)
                {
                    textInput[j].style.height = maxHeight + 'px';
                }
                maxHeight = 18;
            }
            if(i === textInput.length - 1 && (i % 2) !== 1)
            {
                for(let j = (i / 2) * 2 - 1; j < textInput.length; j ++)
                {
                    textInput[j].style.height = maxHeight + 'px';
                }
            }
        }
    }
}

level();

var textTitle = document.getElementsByClassName('jobTitle');
maxHeight = 18;

function levelTitle()
{
    if (window.innerWidth > 1000)
    {
        for(let i = 0; i < textTitle.length; i++)
        {
            if(textTitle[i].offsetHeight > maxHeight)
            {
                maxHeight = textTitle[i].offsetHeight;

            }
            if((i % 3) === 2)
            {
                for(let j = i - 2; j < i + 1; j++)
                {
                    textTitle[j].style.height ='calc(' + maxHeight + 'px - 20px)';
                }
                maxHeight = 18;
            }
            if(i === textTitle.length - 1 && (i % 3) !== 2)
            {
                for(let j = (i / 3) * 3 - 1; j < textTitle.length; j ++)
                {
                    textTitle[j].style.height = 'calc(' + maxHeight + 'px - 20px)';
                }
            }
        }
    }
    else if (window.innerWidth <= 1000 && window.innerWidth > 600)
    {
        for(let i = 0; i < textTitle.length; i++)
        {
            if(textTitle[i].offsetHeight > maxHeight)
            {
                maxHeight = textTitle[i].offsetHeight;

            }
            if((i % 2) === 1)
            {

                for(let j = i - 1; j < i + 1; j++)
                {
                    textTitle[j].style.height = 'calc(' + maxHeight + 'px - 20px)';
                }
                maxHeight = 18;
            }
            if(i === textTitle.length - 1 && (i % 2) !== 1)
            {
                for(let j = (i / 2) * 2 - 1; j < textTitle.length; j ++)
                {
                    textTitle[j].style.height = 'calc(' + maxHeight + 'px - 20px)';
                }
            }
        }
    }
}

levelTitle();

