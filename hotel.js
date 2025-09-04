document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});


document.querySelector("form").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting the feedback.");
        e.preventDefault();
    } else {
        alert("Thank you for your feedback, " + name + "!");
    }
});


document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.getElementById(this.getAttribute("href").substring(1));
        target?.scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById("searchBar").addEventListener("keyup", function () {
    const searchValue = this.value.toLowerCase();
    document.querySelectorAll(".hotel-card").forEach(card => {
        const name = card.querySelector("h2").textContent.toLowerCase();
        card.style.display = name.includes(searchValue) ? "block" : "none";
    });
});

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-button");
document.querySelectorAll(".hotel-details button").forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

document.querySelector("form").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please complete all fields.");
        e.preventDefault();
    } else {
        alert("Thanks for your feedback, " + name + "!");
    }
});

document.getElementById("darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

document.querySelectorAll(".book-btn").forEach(button => {
    button.addEventListener("click", function () {
        const hotelName = this.getAttribute("data-hotel");
        const encoded = encodeURIComponent(hotelName);
        window.location.href = `booking.html?hotel=${encoded}`;
    });
});





