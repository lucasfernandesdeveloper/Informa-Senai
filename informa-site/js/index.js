function toggleMenu() {
  var menuItems = document.getElementById("menu-items");
  if (menuItems.style.display === "block") {
    menuItems.style.display = "none";
  } else {
    menuItems.style.display = "block";
  }
}

function abrirMenu(){
  var side_menu = document.getElementById("side_menu");
  if(side_menu.style.display === 'flex'){
    side_menu.style.display = "none";
  } else{
    side_menu.style.display = 'flex';
  }
}
