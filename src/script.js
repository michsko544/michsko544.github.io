var homeY = document.querySelector(".home").getBoundingClientRect().y;
var techY = document.querySelector(".technologies").getBoundingClientRect().y;
var projY = document.querySelector(".projects").getBoundingClientRect().y;
var oldText = "home";
var oldScroll = 0;

document.addEventListener("scroll",function(){
    var scrollVal = window.scrollY;
    var direction = scrollVal - oldScroll;
    oldScroll = scrollVal
    var durationTime=1000;  
    var type ="ease-in-out";
    var screenHeight = screen.height;
    var offset = 150;

    function animation(name){
        document.querySelector(".scroll").animate([{opacity:0},{visibility:"hidden"}],{duration:durationTime,easing:type})
        oldText = name;
        document.querySelector(".section-name").innerHTML=name;
    }
    function scroll(scrollVal){
        document.querySelector(".scroll-bar").animate([{transform:"translate3d(-50%, " + scrollVal + "px, 0)"}],{duration:durationTime,easing:type})
        setTimeout(function(){document.querySelector(".scroll-bar").style.transform = "translate3d(-50%, " + scrollVal + "px, 0)"},durationTime-10);
    }

    //scroll up
    if(direction<0){
        var scrollTrigger = scrollVal + offset;

        if(scrollTrigger >= homeY && scrollTrigger < techY && oldText!=="home"){
            animation("home");
            scroll(-50);
        }
        else if(scrollVal + offset >=techY && scrollVal + offset<projY && oldText!=="technologies"){
            animation("technologies");
            scroll(-25);
        }
    //scroll down
    } else if(direction>0) {
        var scrollTrigger = scrollVal + screenHeight - offset;

        if( scrollTrigger>= techY && scrollTrigger < projY && oldText!=="technologies"){
            animation("technologies");
            scroll(-25);
        }
        if( scrollTrigger >= projY && oldText!=="projects"){
            animation("projects");
            scroll(0);
        }
    }
})
