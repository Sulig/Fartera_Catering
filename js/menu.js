/* //////////////////////////////////////////// */
/*              TOP NAVIGATION MENU             */
/*                                              */
/* When the "Hamburger" icon appears,           */
/* the .top-prinav disapears and will appear as */
/* a layer with "<=" transition when the button */
/* is clicked                                   */
/* //////////////////////////////////////////// */

/* Save the "hamburguer button" + nav */
const BUT_HAM = document.querySelector(".ham_menu");
const TOPNAV = document.querySelector(".top-prinav");

let menu_active = false;
let isdoing_fade = false;
let mleft, tim;

const mt_msec = 10;
const vel = 15;

/* Event Listener */
BUT_HAM.addEventListener("click", () => {
    if (!menu_active && !isdoing_fade)
    {
        mleft = screen.width;
        TOPNAV.classList.toggle("top-prinav_layer");
        isdoing_fade = true;
        tim = setInterval(FadeIn, mt_msec);
    }
    else if (menu_active && !isdoing_fade) 
    {
        mleft = 0;
        isdoing_fade = true;
        tim = setInterval(FadeOut, mt_msec);
    }
    console.log(`Status isdoing_fade: ${isdoing_fade}`);
});

function FadeIn() 
{
    TOPNAV.style.left = mleft / 16 + "rem";
    if (mleft > 0)
        mleft -= vel;
    if (mleft <= 0)
    {
        mleft = 0;
        TOPNAV.style.left = mleft / 16 + "rem";
        menu_active = true;
        isdoing_fade = false;
        clearInterval(tim);
    }
}
function FadeOut() 
{
    TOPNAV.style.left = mleft / 16 + "rem";
    if (mleft <= screen.width)
        mleft += vel;
    if (mleft >= screen.width)
    {
        menu_active = false;
        isdoing_fade = false;
        TOPNAV.classList.toggle("top-prinav_layer");
        clearInterval(tim);
    }
}
/* ******************************************** */