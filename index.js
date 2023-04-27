const dropDownContainers = document.querySelectorAll(".dropdown-container");
const dropDownMenus = document.querySelectorAll(".dropdown-menu");
const mainContent = document.querySelector(".all-content");
// add a listener to the button that does a thing on click

// watch for bubbling! check that the click happened on a button

// Menu is open, register another click

// if there is a click outside the dropdown menu, close menu with previous choice active
// how to make the code work regardless of which dropdown menu is clicked? Attach a listener to the entire thing? Or attach a listener to each menu/button?
// add a listener to each of the dropdowns on the page
dropDownContainers.forEach((menu) => {
  const menuOptions = Array.from(menu.querySelectorAll("li"));
  menu.addEventListener("click", (e) => {
    // Wheen the menu ul element is clicked
    e.preventDefault();
    // If the first element in the nodelist is visible, since we're applying visible
    // en masse, we can toggle it for all of them
    if (menuOptions[0].classList.contains("visible")) {
      // if any are visible, the menu is "open" so register this click as a selection
      removeActive(menuOptions);
      selectOption(e.target);
    }
    // show/hide the options regardless
    toggleDisplayOptions(menuOptions);

    // clickDropdown(menuOptions);
  });
});

// function to call on click
// function clickDropdown(options) {
// toggleDisplayOptions(options);
// make all options visible, or... "drop" down
// how to pass in just the li children of the clicked element?
// toggleDisplayOptions(e);
// if an option is clicked
// select the option, or make it active and clear other active
// if outside the box is clicked,
// do nothing, persist previous selection
// hide all options but the active one
// }

// remove active class from all options passed
function removeActive(options) {
  options.forEach((option) => {
    option.classList.remove("active");
  });
}

// toggle options visible using a class
function toggleDisplayOptions(options) {
  options.forEach((option) => {
    option.classList.toggle("visible");
  });
}

function selectOption(selection) {
  selection.classList.add("active");
}

// add a listener to each button on page load
