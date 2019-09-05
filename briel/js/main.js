
// $('#iconos').hide();
// $('#texto-principal').hide();

//  $('#ventana-terminal').hide();
//  $('#ventana-terminal2').hide();
//  $('#ventana-contacto').hide();


/* Animaciones entrada */

// if(window.innerWidth<=640){
    // $('#iconos').addClass('animated slideInDown delay-1s');
    // $('#texto-principal').addClass('animated fadeInUp');
// } else {
//     $('#iconos').addClass('animated slideInLeft delay-1s');
//     $('#texto-principal').addClass('animated fadeInDown');
// }

    
// $('#ventana-terminal').addClass('animated bounceInRight');
// $('#ventana-terminal2').addClass('animated bounceInRight');
// $('#ventana-contacto').addClass('animated bounceInRight');







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
        if (id !== 'ventana-contacto'){
            $('#ventana-contacto').fadeOut(); 
        }

        if (id !== ''){
            $('#'+id).show(); 
        }
    }
// 
    
    $('#iconos').show();
    $('#texto-principal').show(); 
    $('#icono-inicio').addClass('borde');
    
    




            var titulos_gabriel = new Typed('#titulos-gabriel', {
                // strings: ['engen' , 'enginier' , 'enge' , 'engine' , 'e^2000' , 'ingeniero', 'web designer' , 'JavaScript programmer' , 'PHP programmer' , 'Java programmer' , 'Python programmer', 'and more...^2000' , '1313' ],
                strings: ['Ingeniero en Telecomunicaciones,<br> Conectividad y Redes' , 'Desarrollador web' , 'Programador JavaScript' , 'Programador PHP' , 'Programador Java' , 'Programador Python'],
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



$(function(){



    window.addEventListener('scroll', () => {

        // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const alturavh = window.innerHeight/100;
        const scrolled = window.scrollY;

        // console.log("scrollable" + scrollable);
        // console.log(alturavh);
        // console.log("scrolled" + scrolled);

        //main - inicio
        if (scrolled < window.innerHeight) {
            // ventana('texto-principal');
            $('.clase-iconos').removeClass('borde');
            $('#icono-inicio').addClass('borde');
        }

        //seccion info personal
        if (scrolled >= window.innerHeight && scrolled < window.innerHeight*2){

           
                typed1.start();

                

                // ventana('ventana-terminal');
            

                $('.clase-iconos').removeClass('borde');
                $('#icono-info-personal').addClass('borde');


        } 

        //seccion formacion academica
        if (scrolled >= window.innerHeight*2 && scrolled < window.innerHeight*3) {

            typed2.start();
            

            // $('#ventana-terminal').fadeOut();
            // $('#texto-principal').fadeOut();
            

            // ventana('ventana-terminal2');
            

            $('.clase-iconos').removeClass('borde');
            $('#icono-formacion').addClass('borde');

        }

        //seccion contacto
        if (scrolled >= window.innerHeight*3 && scrolled < window.innerHeight*4) {


            // ventana('ventana-contacto');
            
            // $('#ventana-contacto').show();

            $('.clase-iconos').removeClass('borde');
            $('#icono-contacto').addClass('borde');


        }
    
    });

});

