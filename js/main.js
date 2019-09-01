

$('#iconos').hide();
$('#texto-principal').hide();

$('#ventana-terminal').hide();
$('#ventana-terminal2').hide();

$(function() {

    function ventana(id) {
        if (id !== 'texto-principal'){
            $('#texto-principal').fadeOut(); 
        }
        if (id !== 'ventana-terminal'){
            $('#ventana-terminal').fadeOut(); 
        }
        if (id !== 'ventana-terminal2'){
            $('#ventana-terminal2').fadeOut(); 
        }
        if (id !== ''){
            $('#'+id).show(); 
        }
    }

    
    $('#iconos').show();
    $('#texto-principal').show(); 
    $('#icono-inicio').addClass('borde');
    
    
    /* Animaciones entrada */
    $('#iconos').addClass('animated fadeInLeft delay-1s');
    $('#texto-principal').addClass('animated fadeInDown');
    $('#ventana-terminal').addClass('animated bounceInRight');
    $('#ventana-terminal2').addClass('animated bounceInRight');



            var titulos_gabriel = new Typed('#titulos-gabriel', {
                strings: ['engineer' , 'web designer' , 'JavaScript programmer' , 'PHP programmer' , 'Java programmer' , 'Python programmer'],
                // strings: ['Ingeniero en Telecomunicaciones, Conectividad y Redes' , 'Desarrollador web' , 'Programador JavaScript' , 'Programador PHP' , 'Programador Java' , 'Programador Python'],
                // strings: ['Ingeniero en Telecomunicaciones, Conectividad y Redes' , 'Code enthusiast'],
                typeSpeed: 20,
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





    window.addEventListener('scroll', () => {

        // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const alturavh = window.innerHeight/100;
        const scrolled = window.scrollY;

        // console.log("scrollable" + scrollable);
        console.log(alturavh);
        console.log("scrolled" + scrolled);

        
        if (scrolled < window.innerHeight) {
            ventana('texto-principal');


            $('.clase-iconos').removeClass('borde');
            $('#icono-inicio').addClass('borde');
        }

        if (scrolled >= window.innerHeight && scrolled < window.innerHeight*2){

           
                typed1.start();

                ventana('ventana-terminal');
            

                $('.clase-iconos').removeClass('borde');
                $('#icono-info-personal').addClass('borde');


        } 
        if (scrolled >= window.innerHeight*2 && scrolled < window.innerHeight*3) {

            typed2.start();
            

            // $('#ventana-terminal').fadeOut();
            // $('#texto-principal').fadeOut();
            // $('#ventana-terminal2').show();

            ventana('ventana-terminal2');
            

            $('.clase-iconos').removeClass('borde');
            $('#icono-formacion').addClass('borde');

        }

        if (scrolled >= window.innerHeight*3 && scrolled < window.innerHeight*4) {


            ventana('');
            

            $('.clase-iconos').removeClass('borde');
            $('#icono-contacto').addClass('borde');


        }
    
    });

});


// var tipeando = false;

// function typedInfoPersonal(){
//     tipeando = true;
//     $('#info_personal').html("");
//     var typed = new Typed('.info_personal', {
//         strings: [  
//                         "<span class=\"parametros\">name:</span>           <span class=\"datos\">\"Gabriel\"</span>, ^200\n" + 
//                         "<span class=\"parametros\">lastname:</span>       <span class=\"datos\">\"Vejar\"</span>,^200\n" + 
//                         "<span class=\"parametros\">age:</span>             <span class=\"datos\">28</span>,^200\n" + 
//                         "<span class=\"parametros\">nationality:</span>    <span class=\"datos\">\"chilean\"</span> ^5000"
//                     ],
//         typeSpeed: 20,
//         startDelay: 1000,
//         loop: true,
//         showCursor: false
    
//     });

// } /* fin  typedInfoPersonal()*/

// $('#ventana-terminal').hide();

// $(function() {
//     typedInfoPersonal();
//     window.addEventListener('scroll', () => {

//         // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//         const scrolled = window.scrollY;

//         // console.log("scrollable" + scrollable);
//         console.log("scrolled" + scrolled);

//         if (scrolled >= 600 && scrolled <1200){
//             $('#ventana-terminal').show();
//             $('#ventana-terminal').addClass('animated bounceInLeft');
//             if (tipeando === false){
//                 $('#info_personal').addClass('.info_personal');
//             }
            
//         } else {
//             $('#ventana-terminal').fadeOut();
//             $('#ventana-terminal').addClass('animated bounceInLeft');
//             $('#info_personal').removeClass('.info_personal');
//             tipeando = false;
//         }
    
//     });

// });