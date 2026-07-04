// ================================
// Best Writings - script.js
// ================================

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ================================
// Header Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ================================
// Fade Animation
// ================================

const sections = document.querySelectorAll("section");

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

};

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all .8s";

});

window.addEventListener("scroll", reveal);

window.addEventListener("load", reveal);

// ================================
// Booking Form
// ================================

const bookingForm = document.querySelector("#booking form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = bookingForm.querySelector('input[type="text"]').value;

        alert(
            "✅ Thank you " + name +
            "!\n\nYour booking has been received.\n\nPlease complete the UPI payment."
        );

        document.getElementById("payment").scrollIntoView({
            behavior: "smooth"
        });

    });

}

// ================================
// Copy UPI ID
// ================================

const copyBtn = document.getElementById("copyUPI");

if (copyBtn) {

    copyBtn.addEventListener("click", () => {

        navigator.clipboard.writeText("8106266163@ibl");

        alert("✅ UPI ID Copied!");

    });

}

// ================================
// Payment Button
// ================================

const payBtn = document.getElementById("payNow");

if (payBtn) {

    payBtn.addEventListener("click", () => {

        window.location.href =
            "upi://pay?pa=8106266163@ibl&pn=Best Writings";

    });

}

// ================================
// WhatsApp Button
// ================================

const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {

    whatsapp.addEventListener("click", function(e) {

        e.preventDefault();

        const message =
            "Hello, I want to book a Record Writing service.";

        window.open(
            "https://wa.me/918106266163?text=" +
            encodeURIComponent(message),
            "_blank"
        );

    });

}

// ================================
// Back To Top
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================================
// Gallery Hover
// ================================

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// ================================
// Welcome Message
// ================================

window.onload = function() {

    console.log("Best Writings Website Loaded Successfully");

};