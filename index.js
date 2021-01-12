/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(str) {
  const time = str.split(':')
  const hr = parseInt(time[0])
  const min = parseInt(time[1])
  if (hr < 12) {
   return 'Good Morning'
  } else if (hr > 17 || hr == 17 && min > 0) {
    return 'Good Evening'
  } else {
    return 'Good Afternoon'
  }
}

function displayMessage(str) {
  const greeting = document.getElementById('greeting')
  greeting.innerText = str
}



