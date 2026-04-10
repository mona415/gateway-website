// HERO TEXT SLIDER
let slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
    i = (i + 1) % slides.length;
}, 3000);


// 🔥 FLYERS SCROLL ANIMATION
let cards = document.querySelectorAll("#flyers .card");

window.addEventListener("scroll", () => {
    let trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        let top = card.getBoundingClientRect().top;

        if(top < trigger){
            card.classList.add("show");
        }
    });
});