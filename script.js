const mobile_trigger = document.querySelector(".mobile-trigger");
const main_navigation = document.getElementById('main-navigation');

mobile_trigger.addEventListener('click',()=>{
    if(mobile_trigger.getAttribute('aria-expanded')=='false') {
        mobile_trigger.setAttribute('aria-expanded','true');
        main_navigation.setAttribute('data-visible','true')
    }else {
        mobile_trigger.setAttribute('aria-expanded','false');
        main_navigation.setAttribute('data-visible','false')
    }
})
