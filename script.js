// 1. Thumbnail image swap on Product Details page
function swap(el) {
    const mainImg = document.getElementById('mainImg');
    if (mainImg) {
        mainImg.src = el.src;
    }
}

// 2. Mobile nav menu toggle (if using a burger menu)
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
    }
});

// 3. Contact form validation and feedback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const formMsg = document.getElementById('formMsg');

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            formMsg.textContent = 'Please fill in all fields!';
            formMsg.style.color = 'red';
        } else {
            formMsg.textContent = 'Thank you! Your message has been sent.';
            formMsg.style.color = 'green';
            contactForm.reset();
        }
    });
}

