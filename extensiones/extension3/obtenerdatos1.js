function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

function imeii(){
    imei1 = document.querySelectorAll('td')[13].innerText;
    openInNewTab("http://localhost/proyectos_php/validacionDatos/formulario.php?imei="+imei1);
    
}
imeii();


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }


  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('input')[0].value = getParameterByName ('imei');
  });
