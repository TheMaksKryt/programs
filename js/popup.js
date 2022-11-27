const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const success = document.querySelector('#success');
let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e) {
            const popupName = popupLink.getAttribute('href').replace('#','');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function(e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}
const form = document.getElementById('myForm');
    form.addEventListener('submit', formSend);
    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);
        if (error === 0){
            success.classList.add('_successful');
            for (let index = 0; index < popupCloseIcon.length; index++) {
                const el = popupCloseIcon[index];
                    popupClose(el.closest('.popup'));
                    e.preventDefault();
            }
            form.reset();
        } else{
            success.classList.remove('_successful');
        }
    }

function popupOpen(curentPopup) {
    if(curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive){
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        success.classList.remove('_successful');
        curentPopup.addEventListener("click", function (e){
            if(!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true){
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock(){
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
function bodyUnLock(){
    setTimeout(function(){
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
    }
}
body.style.paddingRight = '0px';
body.classList.remove('lock');
}, timeout );

unlock = false;
setTimeout(function () {
    unlock = true;
}, timeout);
}

function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if(input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                    } 
                } else {
                    if (input.value === ''){
                        formAddError(input);
                        error++;
                    }
                }
            
        }
        return error;
    }
function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};