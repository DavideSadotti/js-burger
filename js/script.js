// DEFINISCO LE VARIABILI
var calculate = document.getElementById('calculate');
var burgerName = document.getElementById('burger-name-input');
var addIngredient = document.getElementsByClassName('add-ingredient');
var coupons = document.getElementById('coupon-input');
var coupon = ["davide20", "burger20", "power20"]
var total = document.getElementById('total');

// AGGIUNGO L'EVENTO CLICK AL BOTTONE 'calculate'
calculate.addEventListener("click",
  function(){
    // CONTROLLO SE IL NOME DEL PANINO SIA STATO INSERITO
    if(burgerName.value != ""){
      // CICLO GLI INGREDIENTI
      var sum = 50;
      for(var i = 0; i < addIngredient.length; i++){
        // SOMMO IL VALORE DELL'INGREDIENTE SE E' STATO SELEZIONATO
        if(addIngredient[i].checked == true){
          sum += parseInt(addIngredient[i].value);
        }
      }

      // APPLICO EVENTUALE SCONTO
      if(coupon.includes(coupons.value)){
        sum -= sum * 0.2;
      }

      // STAMPO IL RISULTATO
      total.innerHTML = sum.toFixed(2) + " €";
    }else{
      alert("Inserisci il nome del panino");
    }
  }
);
