function openFitur(evt, fitur) {
  var i, tabcontent, navbar;
  tabcontent = document.getElementsByClassName("main");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  navbar = document.getElementsByClassName("navbar");
  for (i = 0; i < navbar.length; i++) {
    navbar[i].className = navbar[i].className.replace(" active", "");
  }
  document.getElementById(fitur).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
