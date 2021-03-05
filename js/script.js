// DEFINISCO LE VARIABILI
var calculate = document.getElementById('calculate');
var burgerName = document.getElementById('burger-name-input');

// AGGIUNGO L'EVENTO CLICK AL BOTTONE 'calculate'
calculate.addEventListener("click",
  function(){
    // CONTROLLO SE IL NOME DEL PANINO SIA STATO INSERITO
    if(burgerName.value != ""){

    }else{
      alert("Inserisci il nome del panino");
    }

    
  }
);
