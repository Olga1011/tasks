function firstClick() {
  let message = (document.getElementById("message").innerHTML =
    "You clicked the first button");
  return message;
}

let handleEvent = () => {
  document.getElementById("message").innerHTML =
    "You clicked the second button";
};

second.addEventListener("click", handleEvent);

third.onclick = function () {
  document.getElementById("message").innerHTML = "You clicked the third button";
};
