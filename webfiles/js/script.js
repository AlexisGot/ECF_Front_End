// - Retour au de page - // 
var lastScrollPosition = 0;

let goTop = document.querySelector(".up");

window.addEventListener("scroll", () => {
    lastScrollPosition = window.scrollY;

    if (lastScrollPosition > 800) {
        goTop.classList.remove("noTopCss");
        goTop.classList.add("goTopCss");
        goTop.addEventListener("click", () => {
            document.body.scrollIntoView({
                behavior: "smooth",
            });
        });
    } else {
        goTop.classList.remove("goTopCss")
        goTop.classList.add("noTopCss");
    }
});

// - Burger Menu - //
let burgerIcon = document.createElement("button");
let nav = document.querySelector("nav");
let ul = document.querySelector("ul");

window.addEventListener("resize", () => {
    if (window.innerWidth <= 1100) {
        if (!nav.contains(burgerIcon)) {
            nav.appendChild(burgerIcon);
        }
    } else {
        burgerIcon.remove();
    }
});

window.addEventListener("load", () => {
   
    if (window.innerWidth <= 1100) {
        if (!nav.contains(burgerIcon)) {
            nav.appendChild(burgerIcon);
        }
    } else {
        burgerIcon.remove();
    }
});

burgerIcon.addEventListener("click", () => {
    ul.classList.toggle("open");
    burgerIcon.classList.toggle("active");
})
