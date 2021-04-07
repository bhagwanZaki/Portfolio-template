function tooglemenu(){
    var menu = document.querySelector('.menutoggle');
    var nav = document.querySelector('.navigation');
    var start = document.querySelector('.main');
    var skill = document.querySelector('.skill-hide');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    skill.classList.toggle('skill-active')
    if(start.classList.contains('active')){
        start.classList.toggle('overlap');
        skill.classList.toggle('skill-active')
    }
}

function startfun(){
    document.getElementById('about-me').scrollIntoView();
}

function navigation(){
    var menu = document.querySelector('.menutoggle');
    var nav = document.querySelector('.navigation');
    var skill = document.querySelector('.skill-hide');
    setTimeout(() =>{
    if(menu.classList.contains('active')){
        nav.classList.remove('active');
        menu.classList.remove('active');    
        skill.classList.remove('skill-active');
    }
    }, 100);
}
function homefun(){
    navigation();
    document.getElementById('home').scrollIntoView();
}
function aboutme(){
    navigation();
    document.getElementById('about-me').scrollIntoView();
}

function project(){
    navigation();
    document.getElementById('project').scrollIntoView();
}

function contact(){
    navigation();
    document.getElementById('contact').scrollIntoView();
}
