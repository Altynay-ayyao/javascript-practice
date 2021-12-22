const panels = document.querySelectorAll(".panel");

console.log(panels); //it is an array

panels.forEach((panel) => {
  //forEach takes a function as an argument
  //console.log(panel); //it will lopp through and show me each panel
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  }); //we add event listener to each of these, so if we click it, something happens.When we click , i want to add a class of active, classList gives a list of classes,after adding active, it will expand from 0.5px to 5
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
