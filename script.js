document.addEventListener("DOMContentLoaded", function() {
    gsap.from("header", { duration: 1, y: '-100%', ease: "bounce" });
    gsap.from(".hero-text h1", { duration: 1, opacity: 0, scale: 0.3, ease: "back" });
    gsap.from(".hero-text button", { duration: 1, opacity: 0, delay: 0.5, y: 30 });
    gsap.from("section h2", { duration: 1, opacity: 0, y: 30, stagger: 0.2 });
    gsap.from("section .card", { duration: 1, opacity: 0, scale: 0.9, stagger: 0.2, delay: 0.5 });
    
    const controller = new ScrollMagic.Controller();

    document.querySelectorAll("section").forEach((section) => {
        new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.8
        })
        .setClassToggle(section, "animate__animated animate__fadeIn")
        .addTo(controller);
    });
});
