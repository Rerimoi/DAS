/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function findunit()
{
var eID = document.getElementById("unitsCombo");
var unitVal = eID.options[eID.selectedIndex].value;
var unittxt = eID.options[eID.selectedIndex].text;
alert("Selected Item  " +  unitxt + ", Value " + unitVal);
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
<buttononclick="find unit()">GetSelectedunit </button>





