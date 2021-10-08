// this is the first variant -> using switch case

function showWeekDay() {
  let dayOfTheWeek = prompt("Please enter the day of the week", "Monday");
  if (dayOfTheWeek != null) {
    dayOfTheWeek = dayOfTheWeek.toUpperCase();
  }

  switch (dayOfTheWeek) {
    case "MONDAY":
    case "TUESDAY":
    case "WENDESDAY":
    case "THURSDAY":
    case "FRIDAY":
      alert("Working Day");
      break;
    case "SATURDAY":
    case "SUNDAY":
      alert("Weekend");
      break;

    default:
      alert("Can not define, please try another value");
      showWeekDay();
      break;
  }
}

showWeekDay();
// this is the second variant -> using if statements
function showWeekDay() {
  let dayOfTheWeek = prompt("Please enter the day of the week", "Monday");
  if (dayOfTheWeek != null) {
    // it's to be UPPERCASE
    dayOfTheWeek = dayOfTheWeek.toUpperCase();
  }
  if (
    dayOfTheWeek === "MONDAY" ||
    dayOfTheWeek === "TUESDAY" ||
    dayOfTheWeek === "WENDSEDAY" ||
    dayOfTheWeek === "THURSDAY" ||
    dayOfTheWeek === "FRIDAY"
  ) {
    alert("Working day");
  } else if (dayOfTheWeek === "SUTERDAY" || dayOfTheWeek === "SUNDAY") {
    alert("Weekend");
  } else {
    alert("Can not define, please try another value");
    showWeekDay();
  }
}

showWeekDay();

// here I have some questions :))))
function showWeekDay() {
  let inputDay = prompt("Please insert the day of the week", "");
  if (inputDay != null) {
    inputDay = inputDay.toLowerCase();
  }
  console.log(inputDay);
  const weekdays = {
    monday: "Working day",
    tuesday: "Working day",
    wednesday: "Working day",
    thursday: "Working day",
    friday: "Working day",
    saturday: "Weekend",
    sunday: "Weekend",
  };

  for (let key in weekdays) {
    if (key === inputDay) {
      alert(weekdays[key]);
      {
        break;
      }
    } else {
      alert("Please enter a valid day");
    }
  }
}

showWeekDay();
