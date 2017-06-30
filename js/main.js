// DOM manipulator file

// Improvements:
// (1) operators should not be allowed to string (e.g. 9+*2)

document.addEventListener('DOMContentLoaded', init)

function init () {
  var basicCalc = calculator()
  var display = document.querySelector('.display')  // define variable here is better than outside the function, as a global variable

  document.addEventListener('keyup', onKeyUp)

  function onKeyUp (event) {
    console.log(event)  // check out the event object (see Inspector): contains 'key' property
    if (checkkey(event.key)) {
      // check if wee're clicking Enter
      if (event.key !== 'Enter') {
        if (event.key == 'Shift') {
          // do nothing. Prevents "alert" below from firing. Actually, not sure if that's right. may not need this line
        }
        else {display.value += ' ' + event.key}   // event object also contains "key" property
        // alternative: display.setAttribute('value',event.key)
      }
      else if (event.key == 'Enter') {
        makeCalculation(display.value)  // [!!!] this fn not yet defined
      }
    }
    else { alert('cannot type beside number') }
  }

  function makeCalculation (str) {
    result = eval(str)
    displayresult(result)
  }

  // function calculateAdd (str) {
  //   var splitStr = str.split('+')
  //   var firstNum = parseInt('splitStr[0]')
  //   var secondNum = parseInt('splitStr[1]')
  //   var result = basicCalc.add(firstNum, secondNum)
  //   displayresult(result)
  // }

  function displayresult (str) {
    display.value = str
  }

  function checkkey (key) {
    if (typeof parseInt(key) === 'number') {return true}
    else if (key === 'Enter' || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Shift'  ) {
      return true
    } return false
    }

}
