document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const colorInput = document.getElementById("colorInput");
    const changeColorButton = document.getElementById("changeColorButton");
  
    changeColorButton.addEventListener("click", function () {
      const color = colorInput.value;
  
      // Update the header text color
      header.style.color = color;
  
      // Clear the input field
      colorInput.value = "";
    });
  });
  