const desktop = window.matchMedia("(min-width: 950px)");
//reusable menu funtion
function burger(id) {
    // const burger = document.getElementById('mobile-hamburger');
    const menu = document.getElementById(id);
    // body will change any time burger function is used 
    //unless you add another input variable. 
    const body = document.getElementById('body');
    const logo = document.getElementById('logo-div');
    // const menu = document.getElementById(id);
    if (menu.style.opacity == "1") {
        menu.style.opacity = '0';
        menu.style.pointerEvents = 'none';
        //new
        body.style.backgroundImage = 'url("./images/curcuit-board.jpg")';
        logo.style.opacity = '1';
        // body.style.backgroundColor = 'white';
    } else {
        menu.style.opacity = "1";
        menu.style.pointerEvents = "auto";
        // new
        body.style.backgroundImage = 'none';
        // $('#body').css("background-image", 'none').fadeOut();
        logo.style.opacity = '0';
        // body.style.backgroundColor = 'rgba(162, 174, 187, 1)';
    }
}
// not entire certain how I want to handle image / word swap for mobile.
// if (!desktop.matches){
//     const sideLoad = document.getElementsByClassName('landing-top-image-odd');

// }