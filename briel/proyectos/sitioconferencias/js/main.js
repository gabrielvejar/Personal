(function() {
    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function(){


        // var map = L.map('mapa').setView([-33.443203, -70.655852], 16);

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // }).addTo(map);

        // L.marker([-33.443203, -70.655852]).addTo(map)
        //     .bindPopup('GDLWEBCAMP<br>Entradas ya a la venta.<br><a target="_blank" href="https://goo.gl/maps/MK1qQJr2c9vJSTDT7">Abrir en Google Maps</a>')
        //     .openPopup();

        //Campos Datos usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //Campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');
        
        //Botones y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //Extras
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');


        calcular.addEventListener('click' , calcularMontos);

        pase_dia.addEventListener('change', mostrarDias);
        pase_dosdias.addEventListener('change', mostrarDias);
        pase_completo.addEventListener('change', mostrarDias);
        


        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === '') {
                alert("Debes elegir un regalo");
                regalo.focus();
            } else {
                var boletosDia = parseInt(pase_dia.value, 10)|| 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                    boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
                    cantCamisas = parseInt(camisas.value, 10)|| 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;

                var totalPagar = (boletosDia*7000) + (boletos2Dias*10000) + (boletoCompleto*12000) + ((cantCamisas*5000) * .93) + (cantEtiquetas * 1500);

                var listadoProductos = [];

                if(boletosDia >= 1) {
                    listadoProductos.push(boletosDia + ' Pases por día');
                }
                if(boletos2Dias >= 1) {
                    listadoProductos.push(boletos2Dias + ' Pases por 2 días');
                }
                if(boletoCompleto >= 1) {
                    listadoProductos.push(boletoCompleto + ' Pases completos');
                }
                if(cantCamisas >= 1) {
                    listadoProductos.push(cantCamisas + ' Camisas');
                }
                if(cantEtiquetas >= 1) {
                    listadoProductos.push(cantEtiquetas + ' Etiquetas');
                }

                lista_productos.style.display = 'block';
                lista_productos.innerHTML = '';
                for (var i = 0; i < listadoProductos.length; i++){
                    lista_productos.innerHTML += listadoProductos[i] + '</br>';
                }

                var regaloSeleccionado = regalo.value;
                switch(regaloSeleccionado){
                    case 'ETI': 
                        regaloSeleccionado = 'Etiquetas';
                        break;
                    case 'PUL': 
                        regaloSeleccionado = 'Pulsera';
                        break;
                    case 'PLU': 
                        regaloSeleccionado = 'Plumas';
                        break;
                }

                lista_productos.innerHTML+='Regalo: '+ regaloSeleccionado;


                suma.innerHTML = "$ " + totalPagar.toFixed(0);
                
            }
            
        }

        function mostrarDias(){
            var boletosDia = parseInt(pase_dia.value, 10)|| 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                boletoCompleto = parseInt(pase_completo.value, 10)|| 0;


            var diasElegidos = [];

            if(boletosDia > 0) {
                diasElegidos.push('viernes');
            }
            
            if(boletos2Dias > 0) {
                diasElegidos.push('viernes','sabado');
            }
            
            if(boletoCompleto > 0) {
                diasElegidos.push('viernes','sabado','domingo');
            }

            document.getElementById('viernes').style.display = 'none';
            document.getElementById('sabado').style.display = 'none';
            document.getElementById('domingo').style.display = 'none';
            
            for (var i = 0; i < diasElegidos.length; i++) {

                document.getElementById(diasElegidos[i]).style.display = 'block';

            }


        }




        




    }); // DOM Content Loaded

})();


$(function() {


    //Menú fijo
     var windowHeight = $(window).height();
         var barraAltura = $('.barra').innerHeight();



    $(window).scroll(function(){

        var scroll = $(window).scrollTop();

        if (scroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top' : barraAltura+'px'});
        }else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top' : '0px'});
        }
        
    });


    //Lettering
    $('.nombre-sitio').lettering();


    //Programa de conferencias
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');
    $('.menu-programa a').on('click', function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });

    //Animacion para los numeros

    var resumenLista = $('.resumen-evento');
    if (resumenLista.length > 0){
        $('.resumen-evento').waypoint(function() {
        
            $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6} , 1200);
            $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15} , 1200);
            $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3} , 1700);
            $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9} , 1400);

        }, {
            offset: '60%'
        }) ;  
    }

    //Animacion cuenta regresiva

    $('.cuenta-regresiva').countdown('2019/12/10 09:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    })

});