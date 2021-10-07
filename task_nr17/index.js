let first = parseInt(prompt("Please insert the first number", ""));
let second = parseInt(prompt("Please insert the second number", ""));

function contor(initialValue, incrementValue) {
  this.first = initialValue;
  this.second = incrementValue;

  let result = first + second;

  return alert(result);
}

contor();
