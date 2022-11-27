function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();
var header = $('.js-header'),
    cloneHeader = header.clone();
    cloneHeader.addClass('header--fixed')
header.before(cloneHeader);
$(window).scroll(function(){
    if ($(window).scrollTop() > 99){
        cloneHeader.addClass('header--is-show')
    } else {

     cloneHeader.removeClass('header--is-show')};
});
// Рабочий код для якорей, но не работает при перемещении на якорь другой страницы
/*
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors){
anchor.addEventListener("click", function(e){
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
};
*/
