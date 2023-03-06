function convert() {
    var temp = document.getElementById("input");
    var result = document.getElementById("output");
  
    var e = document.getElementById("degree");
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;
  
    if (temp.value !== "") {
      if (optionSelIndex == 0) {
        alert("Please select a unit");
      } else {
        if (optionSelectedText === "Fahrenheit") {
          result.value = ((temp.value - 32) * 5) / 9 + "°C";
        }
        if (optionSelectedText === "Celcius") {
          result.value = (temp.value * 9) / 5 + 32 + "°F";
        }
      }
    } else {
      alert("Please enter temperature to convert");
    }
  }