// Admission button
document.getElementById("admissionBtn").addEventListener("click", function () {
    alert(
        "Admission Open!\n\nKrishna Institute of Mathematical Analysis\nCall: +91-XXXXXXXXXX"
    );
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("formStatus").innerText =
        "Thank you! Your message has been sent successfully.";
    document.getElementById("formStatus").style.color = "green";

    this.reset();
});

// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});