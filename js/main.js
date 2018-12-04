//To scroll to a specified element
function scroll1(element) {
    document.getElementById(element).scrollIntoView({
        behavior: 'smooth'
    });
}
//To open/close modal for eboard descriptions
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}
//For Slide Show 
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}

function scrollDown() {
    if (document.body.scrollTop > screen.height || document.documentElement.scrollTop > screen.height ) {
        document.getElementById('top_nav').style.top = "0";
        document.getElementById('top_nav').style.backgroundColor = "black";
        document.getElementById('top_nav').style.opacity = "0.9";
        
    } 
    else if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
        document.getElementById('top_nav').style.top = "0";
        document.getElementById('top_nav').style.backgroundColor = "transparent";
    }
    else {
        document.getElementById('top_nav').style.display = "none";
    }

}

function menutoggle() {
    if (screen.width <= 991) {
        document.getElementById('top_nav').style.display = "none";
        document.getElementById('mob_nav').style.display = "block";
    } 
    else {
        document.getElementById('top_nav').style.display = "block";
        document.getElementById('mob_nav').style.display = "none";
        
    }
}





