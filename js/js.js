function posTop() 
{
return typeof window.pageYOffset != 'undefined' ?  window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
} 
//start icons scroll
var pro=document.getElementById("p"),
    PROGECTS=document.getElementById("pro"),
    aboutBut=document.getElementById('a'),
    about=document.getElementById('about'),
    educaBut=document.getElementById('e'),
    Educ=document.getElementById('ed'),
    skillsBut=document.getElementById('s'),
    skills=document.getElementById('sk'),
    acBut=document.getElementById('ac'),
    ac=document.getElementById('AC');
pro.onclick=function()
{
    'use strict';
    
    window.scrollTo({
    top: PROGECTS.offsetTop-80,
    left: 100,
    behavior: 'smooth'
    });
    menuDiv.classList.add('hide');
}
aboutBut.onclick=function()
{
    'use strict';
    
    window.scrollTo({
    top: about.offsetTop-80,
    left: 100,
    behavior: 'smooth'
    });
    menuDiv.classList.add('hide');
}
educaBut.onclick=function()
{
    'use strict';
    
    window.scrollTo({
    top: Educ.offsetTop-80,
    left: 100,
    behavior: 'smooth'
    });
    menuDiv.classList.add('hide');
}
skillsBut.onclick=function()
{
    'use strict';
    
    window.scrollTo({
    top: skills.offsetTop-80,
    left: 100,
    behavior: 'smooth'
    });
    menuDiv.classList.add('hide');
}
acBut.onclick=function()
{
    'use strict';
    
    window.scrollTo({
    top: ac.offsetTop,
    left: 100,
    behavior: 'smooth'
    });
    menuDiv.classList.add('hide');
}
//end icons scroll
console.log(posTop());
window.addEventListener("scroll", function() {
    if(posTop() >=1146&&posTop() <=1800)
        pro.classList.add('active');
    else
        pro.classList.remove('active');
    })

window.addEventListener("scroll", function() {
    if(posTop() >=100&&posTop() <=350)
        aboutBut.classList.add('active');
    else
        aboutBut.classList.remove('active');
    })
window.addEventListener("scroll", function() {
    if(posTop() >=600&&posTop() <=888)
        educaBut.classList.add('active');
    else
        educaBut.classList.remove('active');
    })

window.addEventListener("scroll", function() {
    if(posTop() >=2089&&posTop() <=2400)
        skillsBut.classList.add('active');
    else
        skillsBut.classList.remove('active');
    })

window.addEventListener("scroll", function() {
    if(posTop() >=2401&&posTop() <=2716)
        acBut.classList.add('active');
    else
        acBut.classList.remove('active');
    })


var div=document.getElementById("child");
window.addEventListener("scroll", function() {
    div.style.width=posTop()/2+"px";
    })
    

var menuBut=document.getElementById('menuBut');

var menuDiv=document.getElementById('menuDiv');

menuBut.onclick=function()
{
    menuDiv.classList.toggle('hide');
}