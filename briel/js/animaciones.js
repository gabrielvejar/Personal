$('#ventana-contacto').hide();


if(window.innerWidth<=640){
    document.querySelector('#iconos').setAttribute("data-aos" , "slide-down");
} else {
    document.querySelector('#iconos').setAttribute("data-aos" , "slide-right");
}


$(function(){

    
    
    var titulos_gabriel = new Typed('#titulos-gabriel', {
    // strings: ['engen' , 'enginier' , 'enge' , 'engine' , 'e^2000' , 'ingeniero', 'web designer' , 'JavaScript programmer' , 'PHP programmer' , 'Java programmer' , 'Python programmer', 'and more...^2000' , '1313' ],
    strings: ['Ingeniero en Telecomunicaciones,<br> Conectividad y Redes' , 'Desarrollador Web' , 'Programador JavaScript' , 'Programador PHP' , 'Programador Java' , 'Programador Python'],
    // strings: ['Ingeniero en Telecomunicaciones, Conectividad y Redes' , 'Code enthusiast'],
    // strings: ['Java develo' , 'Java programm' , 'Java coder' , 'Java ^2000' , 'Java lover <3'],
    typeSpeed: 40,
    startDelay: 1000,
    loop: true,
    showCursor: false,
});

var typed1 = new Typed('#typed-info', {
    stringsElement: '#texto-info',
    typeSpeed: 20,
    startDelay: 1000,
    loop: false,
    showCursor: true,
});
typed1.stop();



var typed2 = new Typed('#typed-formacion', {
    stringsElement: '#texto-formacion',
    typeSpeed: 0,
    startDelay: 1000,
    loop: false,
    showCursor: true,
    fadeOut: true
});
typed2.stop();



document.addEventListener('aos:in:info', ({ detail }) => {
    typed1.start();
    
});

document.addEventListener('aos:in:formacion', ({ detail }) => {
    typed2.start();
    
});


document.addEventListener('aos:in:contacto', ({ detail }) => {
    
    
});



$('#icono-inicio').addClass('borde');
$('#icono-inicio').addClass('activo');


window.addEventListener('scroll', () => {
    
    $('#ventana-contacto').show();
    const scrolled = window.scrollY;
    

    //main - inicio
    if (scrolled < window.innerHeight) {
        // ventana('texto-principal');
        $('.clase-iconos').removeClass('borde');
        $('#icono-inicio').addClass('borde');
        $('.clase-iconos').removeClass('activo');
        $('#icono-inicio').addClass('activo');
    }
    
    //seccion info personal
    if (scrolled >= window.innerHeight*.75 && scrolled < window.innerHeight*1.75){
        
        $('.clase-iconos').removeClass('borde');
        $('#icono-info-personal').addClass('borde');
        $('.clase-iconos').removeClass('activo');
        $('#icono-info-personal').addClass('activo');
    }
    
    //seccion formacion academica
    if (scrolled >= window.innerHeight*1.75 && scrolled < window.innerHeight*2.75) {
        
        $('.clase-iconos').removeClass('borde');
        $('#icono-formacion').addClass('borde');
        $('.clase-iconos').removeClass('activo');
        $('#icono-formacion').addClass('activo');
        
    }
    
    //seccion contacto
    if (scrolled >= window.innerHeight*2.75 && scrolled < window.innerHeight*3.75) {
        
        $('.clase-iconos').removeClass('borde');
        $('#icono-contacto').addClass('borde');
        $('.clase-iconos').removeClass('activo');
        $('#icono-contacto').addClass('activo');
        
        
    }
    
});




});



