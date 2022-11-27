$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
    })
});

window.addEventListener("load", (event) => {
    let HamburgerMenu = () => {
        document.querySelector("#mobile-menu").classList.toggle("active");
        document.querySelector("span.close").classList.toggle("active");
        document.querySelector("span.overlay").classList.toggle("active");
    }
    document.getElementById("menu-icon").addEventListener("click", () => {
        HamburgerMenu();
    })
    document.querySelector("span.close").addEventListener("click", () => {
        HamburgerMenu();
    })
    document.querySelector("span.overlay").addEventListener("click", () => {
        HamburgerMenu();
    })
});