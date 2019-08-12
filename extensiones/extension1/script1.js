function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

function imeii(){
    imei1 = document.querySelectorAll('td')[13].innerText;
    openInNewTab("http://localhost/proyectos_php/validacionDatos/formulario.php?imei="+imei1);
    
}
imeii();