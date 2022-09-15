let bars = document.querySelector(".bars");
let mobileNav = document.querySelector(".mobile-navbar");
bars.onclick = function () {
    mobileNav.classList.toggle("clicked");
    overlay.classList.toggle("clicked");
}
let overlay = document.querySelector('header .overlay');
overlay.onclick = function () {
    mobileNav.classList.remove("clicked");
    this.classList.remove("clicked")
}
let icons = document.querySelectorAll("header .container .mobile-navbar .dropdown-parent i");
icons.forEach(icon => {
    icon.addEventListener("click",(eo) => {
        eo.target.parentElement.classList.toggle("clicked");
    })
});