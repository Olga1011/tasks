const displayText = document.getElementById("myAge");
let myCurrentAge = parseInt(prompt("Please insert your current age", ""));

function showMyAge() {
  if (myCurrentAge >= 25) {
    displayText.innerHTML = "I am over 25";
  } else {
    displayText.innerHTML = "I am under 25";
  }
}

showMyAge();
//Using the ternary operator
function myAge() {
  return myCurrentAge >= 25
    ? (displayText.innerHTML = "I am over 25")
    : (displayText.innerHTML = "I am under 25");
}

myAge();
