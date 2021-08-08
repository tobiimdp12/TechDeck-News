document.querySelector('.menu-btn').addEventListener('click',()=>
{
//console.log("click!");
//del elemento nav-menu vamos a añadir una clase llamada show y con el metodo toggle se añade 
// o se quita segun si ya lo tiene
    //si se activo
    if(document.querySelector('.nav-menu').classList.toggle('show'))
    {
        document.body.style.overflow = 'hidden';
    }else
    {
        document.body.style.overflow = 'visible';
    }
   
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-news', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

