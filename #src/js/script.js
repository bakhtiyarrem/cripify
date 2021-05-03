const burger = document.querySelector('.burger')
const mobile_menu = document.querySelector('.mobile-menu')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const mobile_form = document.querySelector('.mobile-form')
const my_modal = document.querySelector('.my-modal')
const my_modal_phone = document.querySelector('.my-modal-phone')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
    body.classList.toggle('fix')
    mobile_form.classList.add('hide')
    my_modal_phone.classList.add('hide')
})
document.querySelector('.mobile-menu__item_reg').addEventListener('click', () => {
    mobile_form.classList.remove('hide')
})

window.onscroll = () =>{
    if(window.innerWidth > 768){
        window.pageYOffset > 250 
        ? header.classList.add('fix')
        : header.classList.remove('fix')
    }
}


for(let i = 1; i <= 3; i++){
    document.querySelector(`.register__form_${i}`).addEventListener("submit", (e) => {
        e.preventDefault()
        
        const name = document.querySelector(`#name_${i}`).value
        const phone = document.querySelector(`#phone_${i}`).value
        const message = document.querySelector(`#message_${i}`).value
        let text;
        if(message){
            text = `Имя: ${name}, Номер телефона: ${phone}, e-mail: ${email}, сообщение: ${message} `
        }else{
            text = `Имя: ${name}, Номер телефона: ${phone}, e-mail: ${email} `
        }
        
    
        const token = '1790344929:AAEbEx6NdTHKWfe0QHQf57xTL6NHo6aMyaY';
        let url = 'https://api.telegram.org/bot'+ token  +'/sendMessage?chat_id=-506969910&text=';
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url + text, true);
        xhttp.send();

        if(window.innerWidth > 768){
            my_modal.classList.remove('hide')
        }else{
            my_modal_phone.classList.remove('hide')
        }
    })
}


document.querySelectorAll('.mobile-menu__item a').forEach(btn => {
    btn.addEventListener("click", () => {
        mobile_menu.classList.remove('active')
        burger.classList.remove('active')
        body.classList.remove('fix')
    })
})

document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener("click", () => {
        my_modal.classList.add('hide')
    })
})


//ПЛАВНЫЙ СКРОЛЛ    
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


var typed = new Typed('.typed', {
    strings: ['любимой кофейне', 'любимом кафе', 'любимом магазине', 'любимой кофейне', ],
    typeSpeed: 80,
    backSpeed: 20,
    smartBackspace: true, // this is a default
    loop: true
});