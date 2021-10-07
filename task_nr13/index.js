function getTheEcuationRes() {
  const a = parseInt(prompt("Please insert the value of a", ""));
  const b = parseInt(prompt("Please insert the value of b", ""));
  const c = parseInt(prompt("Please insert the value of c ", ""));

  const delta = b * b - 4 * a * c;
  const result1 = -(b / (2 * a));
  const result2 = (-b + Math.sqrt(delta)) / (2 * a);
  const result3 = (-b - Math.sqrt(delta)) / (2 * a);

  if (delta == 0) {
    document.getElementById("result").innerHTML = `Value of x = ${result1}`;
  }
  if (delta > 0) {
    document.getElementById(
      "result"
    ).innerHTML = `Value of x1 = ${result2} and x2 = ${result3}`;
  }
  if (delta < 0) {
    document.getElementById("result").innerHTML =
      " Delta is less than 0, x has no result ";
  }
}

getTheEcuationRes();
