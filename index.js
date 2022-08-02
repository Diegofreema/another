const navbar = document.querySelector(".navbars");
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};


var typed = new Typed(".typing", {
    strings: ["a Graphics Designer", "an APP Designer", "a Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const tablinks = document.querySelector(".tablinks"),
p = document.querySelector("p");

p.onclick = () => {
    var id = this.id;
    console.log(id)
};

const menubtn = document.querySelector(".menubtn"),
menu = document.querySelector(".menu"),
menuafter = document.querySelector(".menu::after"),
menubefore = document.querySelector(".menu::before");



