const toggler = document.querySelector('.toggler');
const menu = document.querySelector('.menuMobile');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

toggler.addEventListener('click', toggleMenu);
    function toggleMenu(){
        if (menu.classList.contains("showMenu")){
            menu.classList.remove("showMenu");
            close.style.display = "none";
            open.style.display = "block";
        } else {
            menu.classList.add("showMenu");
            close.style.display = "block";
            open.style.display = "none";
        }
    }
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(
    function(menuLink) {
        menuLink.addEventListener("click", toggleMenu);
    }
)