let colorSwitch = () => {
  let color = document.getElementById("colors");   // get element id

  let bgcolor = color.options[color.selectedIndex].value;  //access value of object property
  
  document.body.style.backgroundColor = bgcolor; // document object property backgroundColor gets the value of selected color
    
}