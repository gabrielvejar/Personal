$(function(){
    'use strict';

    $('.nuestros-servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');

    $('.servicios nav a').on('click', mostrarTabs);

    function mostrarTabs(){
        $('.servicios nav a').removeClass('activo');
        var enlace = $(this).attr('href');
        $('.nuestros-servicios div').fadeOut();
        $(enlace).fadeIn();

        $(this).addClass('activo');

        return false;
        
    }




    $('aside').load('promociones.html');

    

    $('main article img').on('mouseenter', aumentarImagen);
    $('main article img').on('mouseleave', disminuirImagen);

    function aumentarImagen(){
        $(this).animate({'width':'500px'})
    }
    function disminuirImagen(){
        $(this).animate({'width':'300px'})
    }


    $('#verMenu').on('click', function (event) {
    event.preventDefault();
        if($('div #nav')[0].style.display===""){
            
            $('div #nav').hide();
            $('#verMenu').text('Mostrar Menu');

        }
        else if ($('div #nav')[0].style.display==="none"){
            
            $('div #nav').show();
            $('#verMenu').text('Ocultar Menu');

        }

    });
    
});
