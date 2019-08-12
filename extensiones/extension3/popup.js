'use strict';


function click(e) {

    if(e.target.id === "btn1"){
        chrome.tabs.executeScript(null,
            {file: "obtenerdatos1.js"});
    }
    if(e.target.id === "btn2"){
        chrome.tabs.executeScript(null,
            {file: "obtenerdatos2.js"});
    }      
    if(e.target.id === "btn3"){
        chrome.tabs.executeScript(null,
            {file: "pegardatos.js"});
    }     
  window.close();
}
document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('button');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});

