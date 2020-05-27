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
    top: PROGECTS.offsetTop,
    left: 100,
    behavior: 'smooth'
    });
}
aboutBut.onclick=function()
{
    'use strict';
    
    window.scrollTo({
    top: about.offsetTop,
    left: 100,
    behavior: 'smooth'
    });
}
educaBut.onclick=function()
{
    'use strict';
    
    window.scrollTo({
    top: Educ.offsetTop,
    left: 100,
    behavior: 'smooth'
    });
}
skillsBut.onclick=function()
{
    'use strict';
    
    window.scrollTo({
    top: skills.offsetTop,
    left: 100,
    behavior: 'smooth'
    });
}
acBut.onclick=function()
{
    'use strict';
    
    window.scrollTo({
    top: ac.offsetTop,
    left: 100,
    behavior: 'smooth'
    });
}
