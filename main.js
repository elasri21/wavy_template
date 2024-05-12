const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close i");
const navMenu = document.querySelector(".navigation");

menu.addEventListener("click", function() {
    navMenu.classList.add("show");
});

closeBtn.addEventListener("click", function() {
    navMenu.classList.remove("show");
});

//panel
const btns = document.querySelectorAll("h3");
btns.forEach(btn => {
    btn.addEventListener("click", function() {
        for (let i = 0; i< btns.length; i++) {
            btns[i].classList.remove("clicked");
        }
        this.classList.add("clicked");
    });
});

const up = document.querySelector(".up");
window.addEventListener("scroll", function() {
    if (this.scrollY > 300) {
        up.style.display = 'flex';
    } else {
        up.style.display = "none"
    }
})
