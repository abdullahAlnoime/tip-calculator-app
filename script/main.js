let errorMsgBill = document.querySelector('.bill span');
let errorMsgPeople = document.querySelector('.num-people span');
var numBill = document.getElementById("bill");
var numOfPeople = document.getElementById("numOfPeople");

function onlynum() {
  var resBill = numBill.value;
  var resPeople = numOfPeople.value;
  if (resBill != '') {
    if (isNaN(resBill)) {
      numBill.value = "";
      errorMsgBill.style.visibility = 'visible';
      errorMsgBill.textContent = "Not Valid";
      numBill.style.border = '1px solid #FF2222';
      return false;
    } else {
      if (resBill == 0) {
        errorMsgBill.style.visibility = 'visible';
        errorMsgBill.textContent = "Not Valid";
        numBill.style.border = '1px solid #FF2222';
        return false;
      }
      errorMsgBill.style.visibility = 'hidden';
      numBill.style.border = '1px solid transparent';
      return true;
    }
  }
  if (resPeople != '') {
    if (isNaN(resPeople)) {
      numOfPeople.value = "";
      errorMsgPeople.textContent = "Not Valid";
      errorMsgPeople.style.visibility = 'visible';
      numOfPeople.style.border = '1px solid #FF2222';
      return false;
    } else {
      if (resPeople == 0) {
        errorMsgPeople.style.visibility = 'visible';
        errorMsgPeople.textContent = "Not Valid";
        numOfPeople.style.border = '1px solid #FF2222';
        return false;
      }
      errorMsgPeople.style.visibility = 'hidden';
      numOfPeople.style.border = '1px solid transparent';
      return true;
    }
  }
}
let tipPerPerson = document.querySelector('.result p:nth-of-type(2)');
let totalPerPerson = document.querySelector('.result p:last-of-type');
let selectTip = document.querySelectorAll('.tip span');
let resetButton = document.querySelector('.result button');
resetButton.onclick = function() {
  tipPerPerson.textContent = '$0.00';
  totalPerPerson.textContent = '$0.00';
  numBill.value = '' ;
  numOfPeople.value = '1' ;
};

selectTip.forEach((elm) => {
  elm.addEventListener('click', (e) => {
    removeAllSelected();
    e.target.classList.add('clicked');
    if ( numBill.value == '') {
      errorMsgBill.style.visibility = 'visible';
      errorMsgBill.textContent = "Not Valid";
      numBill.style.border = '1px solid #FF2222';
      tipPerPerson.textContent = '$0.00';
      totalPerPerson.textContent = '$0.00';
    } 
    else if (numOfPeople.value == '' || numOfPeople.value == '0') {
      errorMsgPeople.style.visibility = 'visible';
      errorMsgPeople.textContent = "Not Valid";
      numOfPeople.style.border = '1px solid #FF2222';
      tipPerPerson.textContent = '$0.00';
      totalPerPerson.textContent = '$0.00';
    } else {
      errorMsgPeople.style.visibility = 'hidden';
      numOfPeople.style.border = '1px solid transparent';
      errorMsgBill.style.visibility = 'hidden';
      numBill.style.border = '1px solid transparent';
      if (e.target.textContent === 'Custom') {
        let a = parseFloat(numBill.value) / parseFloat(numOfPeople.value);
        let b = (a * 15) / 100;
        let c = a + b;
        tipPerPerson.textContent = '$' + b.toFixed(2);
        totalPerPerson.textContent = '$' + c.toFixed(2);
      } else {
        let a = parseFloat(numBill.value) / parseFloat(numOfPeople.value);
        let b = (a * parseInt(e.target.textContent.slice(0, length - 1))) / 100;
        let c = a + b;
        tipPerPerson.textContent = '$' + b.toFixed(2);
        totalPerPerson.textContent = '$' + c.toFixed(2);
      }
    }
  });
});

function removeAllSelected() {
  selectTip.forEach((elm) => {
    elm.classList.remove('clicked');
  });
}