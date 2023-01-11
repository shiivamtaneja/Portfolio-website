

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
var html_content = document.querySelector('.main-wrapper')
var bg_img_wrapper2 = document.querySelector('.bg-image-wrapper2')

html_content.addEventListener('mousemove', function(e){
    
    var X = e.pageX;
    var Y = e.pageY;

    // html_content.style.transform = "translate(" + X/100  + "px, " + (Y/90) +"px)"
    bg_img_wrapper2.style.transform = "translate(" + (-X/25)  + "px, " + (-Y/25) +"px)"
    bg_img_wrapper.style.transform = "translate(" + (X/25)  + "px, " + (Y/25) +"px)"
})

function sendMail() {
    
    
    var Sname = document.getElementById('name').value;
    var Semail = document.getElementById('email').value;
    var SMessage = document.getElementById('message').value;
    
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shivamsmtp@gmail.com",
        Password : "DC5F3F031AEB0D10B722E1759C4187473DBA",
        // SecureToken: "E3834BE4FAA8ADFD55C1A393C150D3913B0B",
        To : 'shivamsmtp@gmail.com',
        From : "shivamsmtp@gmail.com",
        Subject : "Mail from Contact Page",
        Body : "Name: " + Sname + "<br/> User Email: " + Semail + "<br/> User Message: " + SMessage
    }).then(
      message => alert(message, "I'll get back to you")
    );
}

