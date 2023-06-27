var settingMenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn")

function settingsMenuToggle() {
  settingMenu.classList.toggle("setting-menu-height");
}

darkBtn.onclick = function(){
  darkBtn.classList.toggle("dark-btn-on");
}