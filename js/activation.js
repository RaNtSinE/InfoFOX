function activation()
{
    let profiles = document.getElementsByClassName("profileBlock");
    let profileCheck = [];
    profileCheck[0] = 1;
    let profile_id = -1;

    for(let i = 0; i < profiles.length; i++)
    {
        if(profileCheck[i] === 1)
        {
            profiles[i].classList.add("activated");
        }
    }

    for (let i = 0; i < profiles.length; i++)
    {
        let l = i;
        profiles[i].addEventListener("click",function () {
            if(profileCheck[l] !== 1)
            {
                profileCheck[l] = 1;
                this.classList.add('activated');
                let profileId = this.getElementsByClassName('profile_id');
                profile_id = profileId[0].value;
                for(let j = 0; j < profiles.length; j++)
                {
                    if(l !== j)
                    {
                        profileCheck[j] = 0;
                        profiles[j].classList.remove('activated');
                    }
                }
            }
        }, false);
    }
}