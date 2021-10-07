function sum(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }

  return (document.getElementById(
    "message"
  ).innerHTML = `The result of the sum is ${sum}`);
}

sum(1, 2, 3);

function getWeekDay(date) {
  const days = {
    0: "Duminica",
    1: "Luni",
    2: "Marti",
    3: "Miercuri",
    4: "Joi",
    5: "Vineri",
    6: "Simbata",
  };
  const day = date.getDay();

  for (prop in days) {
    if (prop == day) {
      document.getElementById("message2").innerHTML = `Ziua este ${days[prop]}`;
    }
  }
}

let nday = new Date(2021, 10, 23);
let today = new Date();
getWeekDay(nday);
// getWeekDay(today);
