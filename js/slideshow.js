/* //////////////////////////////////////////// */
/*                  SLIDESHOW                   */
/* //////////////////////////////////////////// */

/* Save the butons of actions */
const BUT_SPREV = document.querySelector(".prev");
const BUT_SNEXT = document.querySelector(".next");
const BUT_SPLAY = document.querySelector(".play");
const BUT_SPAUSE = document.querySelector(".pause");

/* Save the array of pictures inside "slid-images" */
const SPIC = document.querySelectorAll(".slid-img");
/* -------------- */
let actual_display = 0;
/* -------------- */

/* Animate the Slideshow */
const mstowait = 3500;
const transition_duration = 15;
const tvel = 10;
let _int, _trint;
let _transform;
let _isdoing_fade = false;

_int = setInterval(ChangeDisplay, mstowait);

function ChangeDisplay() 
{
    if (actual_display < SPIC.length - 1)
        actual_display++;
    else if (actual_display == SPIC.length - 1)
        actual_display = 0;

    _transform = screen.width;
    ActualizeDisplay();
    ActivePicture("prev");
    _trint = setInterval(_Transform, transition_duration);
}

function _Transform() 
{
    if (_transform > 0)
    {
        _isdoing_fade = true;
        _transform -= tvel;
        SPIC[actual_display].style.left = _transform / 16 + "rem";
        if (_transform <= 0)
        {
            _transform = 0;
            SPIC[actual_display].style.left = _transform / 16 + "rem";
            _isdoing_fade = false;
            clearInterval(_trint);
        }
    }
    else if (_transform < 0)
    {
        _isdoing_fade = true;
        _transform += tvel;
        SPIC[actual_display].style.left = _transform / 16 + "rem";
        if (_transform >= 0)
        {
            _transform = 0;
            _isdoing_fade = false;
            SPIC[actual_display].style.left = _transform / 16 + "rem";
            clearInterval(_trint);
        }
    }
    SPIC[actual_display].style.left = _transform / 16 + "rem";
}
/* ********************* */

/* Event Listener */
BUT_SPREV.addEventListener("click", () => 
{
    if (actual_display > 0)
        actual_display--;
    else if (actual_display == 0)
        actual_display = SPIC.length - 1;

    clearInterval(_int);
    ActualizeDisplay();
    _int = setInterval(ChangeDisplay, mstowait + mstowait);
})
BUT_SNEXT.addEventListener("click", () => 
{
    if (actual_display < SPIC.length - 1)
        actual_display++;
    else if (actual_display == SPIC.length - 1)
        actual_display = 0;

    clearInterval(_int);
    ActualizeDisplay();
    _int = setInterval(ChangeDisplay, mstowait + mstowait);
})

BUT_SPLAY.addEventListener("click", () => 
{
    BUT_SPLAY.classList.toggle("play");
    BUT_SPAUSE.classList.toggle("play");
    _int = setInterval(ChangeDisplay, mstowait);
})
BUT_SPAUSE.addEventListener("click", () => 
{
    BUT_SPLAY.classList.toggle("play");
    BUT_SPAUSE.classList.toggle("play");
    clearInterval(_int);
})
/* -------------- */

/* Actualize Display */
function ActualizeDisplay()
{
    for (let i = 0; i < SPIC.length; i++)
        SPIC[i].className = "slid-img-hide";
    SPIC[actual_display].className = "slid-img-show slid-img-overlap";
    SPIC[actual_display].style.left = _transform / 16 + "rem";
}

function ActivePicture(_case)
{
    if (_case === "next" || _case === "NEXT") 
    {
        if (actual_display + 1 > SPIC.length - 1)
            tmp = 0;
        else
            tmp = actual_display + 1;
        SPIC[tmp].className = "slid-img-show slid-img-preview";
    }
    if (_case === "prev" || _case === "PREV") 
    {
        if (actual_display - 1 < 0)
            tmp = SPIC.length - 1;
        else
            tmp = actual_display - 1;
        SPIC[tmp].className = "slid-img-show slid-img-preview";
    }
}
/* ******************* */
/* ******************************************** */