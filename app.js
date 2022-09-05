const billAndCash = document.querySelectorAll(".cash");

const btnEl = document.querySelector("#btn");

const rowEls = document.querySelectorAll(".notes");

console.log(rowEls);

const warningEl = document.querySelector("#errormsg");

var denominationList = [2000, 500, 100, 20, 10, 5, 1];

function checkForReturnChange() {
  var bill = Number(billAndCash[0].value);
  var cashGiven = Number(billAndCash[1].value);
  if ((bill > 0) & (cashGiven > 0)) {
    if (cashGiven < bill) {
      warningEl.innerText = "Go and Wash The Plates For sometime.";
    } else {
      warningEl.innerText = "";
      let returnChange = cashGiven - bill;

      for (var i = 0; i < denominationList.length; i++) {
        var respectiveNotes = Math.trunc(returnChange / denominationList[i]);
        returnChange = returnChange % denominationList[i];
        rowEls[i].innerText = respectiveNotes;
      }
    }
  } else {
    warningEl.innerText = "Enter Valid Values";
  }
}

btnEl.addEventListener("click", checkForReturnChange);
