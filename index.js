
function getCurrentYear() {
  const date= new Date()

  const year = date.getFullYear()

  const copyrightText = document.getElementById('footerCopyright')

  console.log(copyrightText.innerHTML)

  copyrightText.innerHTML = '&copy; ' + year + ' ' + copyrightText.innerHTML

  console.log(year)

   console.log(copyrightText)
}

function generateGretting() {
  const date= new Date()
  const hours = date.getHours()
  let greeting

console.log(date.getHours())

  if(hours < 12) {
    console.log('before 12') ;
    greeting = "Good Morning!"

  } else if(hours >= 12 && hours < 18) {
    console.log('12-5') ;
    greeting = "Good Afternoon!"
  } else {
    console.log('after 5') ;
    greeting = "Good Evening!"
  }

  const greetingElement = document.getElementById('greeting') ;

  greetingElement.innerHTML = greeting;

}

function alertButton() {
  alert("Nice To Meet You")
}

function alertBtnHover() {
  const button = document.getElementById('alert-button') ;

  button.innerText = "hovering"
}

function revertBtn() {
  const button = document.getElementById('alert-button') ;
  button.innerText = "Click Me"
}

function populateList() {

  const numbers = document.getElementById('numbers') ;
   
  for (i=1; i <= 12; i = i + 1) {

    const listItem = document.createElement('li')

    if( i % 2 === 0  ){

        listItem.textContent = 'even';
    } else {
        listItem.textContent = 'odd';
    }

    

    numbers.appendChild(listItem)


  }
}

populateList()
getCurrentYear()
generateGretting()