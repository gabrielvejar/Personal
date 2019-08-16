(function() {
    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function(){


        var map = L.map('mapa').setView([-33.443203, -70.655852], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-33.443203, -70.655852]).addTo(map)
            .bindPopup('GDLWEBCAMP<br>Entradas ya a la venta.<br><a target="_blank" href="https://goo.gl/maps/MK1qQJr2c9vJSTDT7">Abrir en Google Maps</a>')
            .openPopup();

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