function toggleMenu() {
  var popup = document.getElementById("popup");
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
