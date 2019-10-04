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
$(document).ready(function() {

    $('.services-card').click(function() {
        if (!desktop.matches) {
            const height = $(this).css('height');
            if (height == '75px') {
                $(this).animate({ height: '550px' }, 500);
                $(this).removeClass("services-card-not-selected"); //only way to effectivly change opacity
                $(this).addClass("services-card-selected");
            } else {
                $(this).animate({ height: '75px' }, 500);
                $(this).removeClass("services-card-selected");
                $(this).addClass("services-card-not-selected");
            }
        } else {
            const height = $(this).css('height');
            if (height == '100px') {
                $(this).animate({ height: '680px' }, 500);
                $(this).removeClass("services-card-not-selected");
                $(this).addClass("services-card-selected");
            } else {
                $(this).animate({ height: '100px' }, 500);
                $(this).removeClass("services-card-selected");
                $(this).addClass("services-card-not-selected");
            }
        }
        
    })
})
