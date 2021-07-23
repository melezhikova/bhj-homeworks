let links = document.getElementsByClassName("menu__link");
let menuSubAll = document.querySelectorAll(".menu_sub");
console.log(menuSubAll);

for (i = 0; i < links.length; i++) {
    let link = links.item(i);
    link.onclick = openMenu;

    function openMenu () {
        let menu = link.closest("li");
        let menuSub = menu.querySelector(".menu_sub");

        if (menuSub) {
            if (menuSub.className === "menu menu_sub menu_active") {
                menuSub.className = "menu menu_sub";
            } else {
                for (i = 0; i < menuSubAll.length; i++) {
                    menuSubAll.item(i).className = "menu menu_sub";
                }
                menuSub.className = "menu menu_sub menu_active";
            }
            
            return false;
        }
    }
}
