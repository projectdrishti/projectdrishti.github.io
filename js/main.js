$(document).on("scroll", scrollHandler);

function scrollHandler() {
    let scrolled = $(document).scrollTop();
    let slide1 = $("#slide_1").outerHeight();
    let slide2 = $("#slide_2").outerHeight();
    let slide3 = $("#slide_3").outerHeight();
    let slide4 = $("#slide_4").outerHeight();

    var color = "#d2ffd5";
    var blackLogo = false;

    var header = true;

    if (scrolled >= (slide1 + slide4 - 100)) {
        header = false;
    }

    if (scrolled >= (slide1 - 50)) {
        color = "black";
        blackLogo = true;
    }

    $(".header li").css("color", color);
    $(".logo span").css("color", color);

    if (blackLogo) {
        $(".logo img").attr("src", "images/logoblack.png");
        $(".header").css("background", "transparent");
    } else {
        $(".logo img").attr("src", "images/logo.png");
        $(".header").css("background", "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))");
    }

    if(scrolled >= slide1 + slide2 + slide3 + slide4 / 2){
        indicateCircle(5);
    }else if(scrolled >= slide1 + slide2 + slide3 / 2){
        indicateCircle(4);
    }else if(scrolled >= slide1 + slide2 / 2){
        indicateCircle(3);
    }else if(scrolled >= slide1 / 2){
        indicateCircle(2);
    }else{
        indicateCircle(1);
    }

}

function indicateCircle(index){
    index = index - 1;
    let circles = document.querySelectorAll(".circle");
    for(let i = 0; i < circles.length; i++){
        if(i == index){
            circles[i].classList.add("active");
        }else{
            circles[i].classList.remove("active");
        }
    }
}

var drawer = false;
function drawerController(){
    if(drawer){
        $(".navigation2").fadeOut();
    }else{
        $(".navigation2").fadeIn();
    }
    drawer = !drawer;
}

let nav2 = document.querySelector(".navigation2");
let anchors = nav2.children[0].children;

for(let i = 0; i < anchors.length; i++){
    anchors[i].onclick = function(){
        $(".navigation2").fadeOut();
        drawer = false;
    };
}