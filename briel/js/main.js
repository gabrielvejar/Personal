function typedInfoPersonal(){
    $('#info_personal').html("");
    var typed = new Typed('#info_personal', {
        strings: [  
                        "<span class=\"parametros\">name:</span>           <span class=\"datos\">\"Gabriel\"</span>, ^200\n" + 
                        "<span class=\"parametros\">lastname:</span>       <span class=\"datos\">\"Vejar\"</span>,^200\n" + 
                        "<span class=\"parametros\">age:</span>             <span class=\"datos\">28</span>,^200\n" + 
                        "<span class=\"parametros\">nationality:</span>    <span class=\"datos\">\"chilean\"</span> ^5000"
                    ],
        typeSpeed: 20,
        startDelay: 1000,
        loop: true,
        showCursor: false,
    
    });

} /* fin  typedInfoPersonal()*/

$('#ventana-terminal').hide();

$(function() {


    typedInfoPersonal();
    window.addEventListener('scroll', () => {

        // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const alturavh = window.innerHeight/100;
        const scrolled = window.scrollY;

        // console.log("scrollable" + scrollable);
        console.log(alturavh);
        console.log("scrolled" + scrolled);
        
        if (scrolled >= 120*alturavh && scrolled < 140*alturavh){
            $('#ventana-terminal').show();
            $('#ventana-terminal').addClass('animated bounceInLeft');
            
        } else {
            $('#ventana-terminal').fadeOut();
            $('#ventana-terminal').addClass('animated bounceInLeft');
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