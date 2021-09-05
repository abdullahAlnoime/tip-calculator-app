let errorMsgBill = document.querySelector('.bill span');
let errorMsgPeople = document.querySelector('.num-people span');
var numBill = document.getElementById("bill");
var numOfPeople = document.getElementById("numOfPeople");

function billNum() {
  var resBill = numBill.value;
  if (resBill != '') {
    if (isNaN(resBill)) {
      numBill.value = "";
      errorMsgBill.style.visibility = 'visible';
      errorMsgBill.textContent = "Not Valid";
      numBill.style.boxShadow = '0 0 0 3px rgba(255,0,0,0.34)';
      return false;
    } else {
      if (resBill == 0) {
        errorMsgBill.style.visibility = 'visible';
        errorMsgBill.textContent = "Not Valid";
        numBill.style.boxShadow = '0 0 0 3px rgba(255,0,0,0.34)';
        return false;
      } else {
        errorMsgBill.style.visibility = 'hidden';
        numBill.style.boxShadow = '0 0 0 3px hsl(185, 41%, 84%)';
        return true;
      }
    }
  } else {
    errorMsgBill.style.visibility = 'visible';
    errorMsgBill.textContent = "Not Valid";
    numBill.style.boxShadow = '0 0 0 3px rgba(255,0,0,0.34)';
    return false;
  }
}

function peopleNum() {
  var resPeople = numOfPeople.value;
  if (resPeople != '') {
    if (isNaN(resPeople)) {
      numOfPeople.value = "";
      errorMsgPeople.textContent = "Not Valid";
      errorMsgPeople.style.visibility = 'visible';
      numOfPeople.style.boxShadow = '0 0 0 3px rgba(255,0,0,0.34)';
      return false;
    } else {
      if (resPeople == 0) {
        errorMsgPeople.style.visibility = 'visible';
        errorMsgPeople.textContent = "Not Valid";
        numOfPeople.style.boxShadow = '0 0 0 3px rgba(255,0,0,0.34)';
        return false;
      } else {
        errorMsgPeople.style.visibility = 'hidden';
        numOfPeople.style.boxShadow = '0 0 0 3px hsl(185, 41%, 84%)';
        return true;
      }
    }
  } else {
    errorMsgBill.style.visibility = 'visible';
    errorMsgBill.textContent = "Not Valid";
    numBill.style.boxShadow = '0 0 0 3px rgba(255,0,0,0.34)';
    return false;
  }
}
let tipPerPerson = document.querySelector('.result p:nth-of-type(2)');
let totalPerPerson = document.querySelector('.result p:last-of-type');
let selectTip = document.querySelectorAll('.tip span');
let selectCustomTip = document.querySelector('.tip input');
let resetButton = document.querySelector('.result button');
resetButton.onclick = function() {
  tipPerPerson.textContent = '$0.00';
  totalPerPerson.textContent = '$0.00';
  removeAllSelected();
  numBill.value = '';
  numOfPeople.value = '1';
  selectCustomTip.value = 'Custom' ;
  resetButton.classList.remove('active');
};
selectCustomTip.onclick = function(e) {
  removeAllSelected();
  e.target.classList.add('clicked');
  if (!billNum()) {
    errorMsgBill.style.visibility = 'visible';
    errorMsgBill.textContent = "Not Valid";
    numBill.style.boxShadow = '0 0 0 3px rgba(255,0,0,0.34)';
    tipPerPerson.textContent = '$0.00';
    totalPerPerson.textContent = '$0.00';
    resetButton.classList.remove('active');
    console.log('bill');
  }
  else if (!peopleNum()) {
    errorMsgPeople.style.visibility = 'visible';
    errorMsgPeople.textContent = "Not Valid";
    numOfPeople.style.boxShadow = '0 0 0 3px rgba(255,0,0,0.34)';
    tipPerPerson.textContent = '$0.00';
    totalPerPerson.textContent = '$0.00';
    resetButton.classList.remove('active');
    console.log('people');
  } else {
    errorMsgPeople.style.visibility = 'hidden';
    numOfPeople.style.boxShadow = '0 0 0 3px transparent';
    errorMsgBill.style.visibility = 'hidden';
    numBill.style.boxShadow = '0 0 0 3px transparent';
    resetButton.classList.add('active');
    let a = parseFloat(numBill.value) / parseFloat(numOfPeople.value);
    let b = (a * parseFloat(e.target.value)) / 100;
    let c = a + b;
    tipPerPerson.textContent = '$' + b.toFixed(2);
    totalPerPerson.textContent = '$' + c.toFixed(2);
  }
}
selectTip.forEach((elm) => {
  elm.addEventListener('click', (e) => {
    removeAllSelected();
    e.target.classList.add('clicked');
    if (!billNum()) {
      errorMsgBill.style.visibility = 'visible';
      errorMsgBill.textContent = "Not Valid";
      numBill.style.boxShadow = '0 0 0 3px rgba(255,0,0,0.34)';
      tipPerPerson.textContent = '$0.00';
      totalPerPerson.textContent = '$0.00';
      resetButton.classList.remove('active');
      console.log('bill');
    }
    else if (!peopleNum()) {
      errorMsgPeople.style.visibility = 'visible';
      errorMsgPeople.textContent = "Not Valid";
      numOfPeople.style.boxShadow = '0 0 0 3px rgba(255,0,0,0.34)';
      tipPerPerson.textContent = '$0.00';
      totalPerPerson.textContent = '$0.00';
      resetButton.classList.remove('active');
      console.log('people');
    } else {
      errorMsgPeople.style.visibility = 'hidden';
      numOfPeople.style.boxShadow = '0 0 0 3px transparent';
      errorMsgBill.style.visibility = 'hidden';
      numBill.style.boxShadow = '0 0 0 3px transparent';
      resetButton.classList.add('active');
      let a = parseFloat(numBill.value) / parseFloat(numOfPeople.value);
      let b = (a * parseInt(e.target.textContent.slice(0, length - 1))) / 100;
      let c = a + b;
      tipPerPerson.textContent = '$' + b.toFixed(2);
      totalPerPerson.textContent = '$' + c.toFixed(2);
    }
  });
});

function removeAllSelected() {
  selectCustomTip.classList.remove('clicked');
  selectTip.forEach((elm) => {
    elm.classList.remove('clicked');
  });
}