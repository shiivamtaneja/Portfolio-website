

var i = 0
var fed = "front end developer."
var student = "student /"

var html_start = "<html>"
var lang = "lang="


function typing(){

    if(i< fed.length){
        document.querySelector('.auto-type-student').innerHTML += student.charAt(i);
        document.querySelector('.auto-type-fed').innerHTML += fed.charAt(i);        
        i++
        setTimeout(typing, 100);
    }

    
}

typing()


var ham = document.querySelector('.hamburger')
var navUl = document.querySelector(".nav-bar-ul")
var navBarItem = document.querySelector('.nav-bar-items')
var home = document.querySelector('.home')
var aboutMe = document.querySelector('.about-me')
var contact = document.querySelector('.contact')

var counter = 0


ham.addEventListener('click', function(e){
    navUl.classList.toggle("active")
    navBarItem.classList.toggle("active")
    home.classList.toggle("active")
    aboutMe.classList.toggle("active")
    contact.classList.toggle("active")


    if (counter % 2 == 0){
        ham.setAttribute("class", "click")
        
    }
    else 
        ham.setAttribute("class", 'hamburger')
    counter++

})


var bg_img_wrapper = document.querySelector('.bg-image-wrapper')
var html_content = document.querySelector('.main-content')

// var bg_img_wrapper2 = document.querySelector('.bg-image-wrapper2')
wrapperMain.addEventListener('mousemove', function(e){
    
    var X = e.pageX;
    var Y = e.pageY;

    html_content.style.transform = "translate(" + X/100  + "px, " + (Y/90) +"px)"
    // bg_img_wrapper2.style.transform = "translate(" + (-X/25)  + "px, " + (-Y/25) +"px)"
})