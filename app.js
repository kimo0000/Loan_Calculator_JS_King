const loan = document.getElementById('loan');
const interest = document.getElementById('interest');
const monthToPay = document.getElementById('month');
const result = document.getElementById('result');

function getData() {
    // console.log(loan.value);
    // console.log(interest.value);
    // console.log(monthToPay.value);

    if ( monthToPay.value != "") {
      console.log("yes");
      const displayInterest = (+loan.value * +interest.value) / 100;
      console.log(displayInterest);
      const displayResult = (+loan.value + displayInterest) / +monthToPay.value;
      result.innerText = displayResult.toFixed(2) + " $";
    }

}