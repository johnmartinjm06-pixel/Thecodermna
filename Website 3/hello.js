const buttons = document.querySelectorAll(".filter");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    if (button.classList.contains("active")) {
      // if clicked again → remove active
      button.classList.remove("active");
    } else {
      // remove active from all buttons
      buttons.forEach(btn => btn.classList.remove("active"));
      
      // activate clicked button
      button.classList.add("active");
    }

  });
});