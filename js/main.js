const btnMobileMenu = document.querySelector(".mobile_open-btn");
const btnMobileMenuActive = document.querySelectorAll(".mobile_open");
const mobileMenu = document.querySelector(".header__menu-burger");

btnMobileMenu.addEventListener("click", () => {
    btnMobileMenuActive.forEach(active => active.classList.toggle("active"))
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
})