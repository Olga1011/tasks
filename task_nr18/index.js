function handleClick() {
  const name = prompt("Please insert you Name", "");

  if (name.length > 2 && name !== null) {
    localStorage.setItem("name", JSON.stringify(name));
  }
  showName();
}

function showName() {
  let nameText = localStorage.getItem("name");
  if (nameText !== null) {
    document.getElementById("message").innerHTML = `Hello ${nameText}`;
  } else {
    alert("Please insert a valid name");
    handleClick();
  }
}

function handleReset() {
  localStorage.removeItem("name");
  document.getElementById("message").innerHTML =
    "Your name was removed from local storage";
}
