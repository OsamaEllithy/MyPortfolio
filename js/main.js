document.addEventListener('DOMContentLoaded', function () {
    function initializeGallary(gallaryId) {
        const container = document.querySelector(`#${gallaryId}`);
        if (!container) return;
        
        const prevBtn = container.closest('.gallary-container').querySelector('.prev-btn');
        const nextBtn = container.closest('.gallary-container').querySelector('.next-btn');
        
        if (!prevBtn || !nextBtn) {
            console.error("Navigation buttons not found");
            return;
        }

        let currentIndex = 0;
        const cardWidth = container.children[0].offsetWidth + 20;
        const visibleCards = Math.floor(container.parentElement.offsetWidth / cardWidth);
        
        function updateGallary() {
            const maxIndex = container.children.length - visibleCards;
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;
            
            container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }

        nextBtn.addEventListener('click', function() {
            currentIndex++;
            updateGallary();
        });

        prevBtn.addEventListener('click', function() {
            currentIndex--;
            updateGallary();
        });

        window.addEventListener('resize', function() {
            const newCardWidth = container.children[0].offsetWidth + 20;
            if (Math.abs(newCardWidth - cardWidth) > 5) {
                updateGallary();
            }
        });

        updateGallary();
    }

    initializeGallary('gallary1');


    lottie.loadAnimation({
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets6.lottiefiles.com/packages/lf20_qp1q7mct.json'
    });

    emailjs.init("YDb5bj1zjDrfbBB46");

    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs.sendForm("service_ugdl30e", "template_vdhlxum", form)
                .then(function () {
                    alert("✅ Your message has been sent successfully. Thank you!");
                    form.reset();
                }, function (error) {
                    alert("⚠️ Oops! Something went wrong. Please try again later.");
                    console.error("EmailJS Error:", error);
                });
        });
    }

    const phoneIcon = document.getElementById("phone-icon");
    if (phoneIcon) {
        phoneIcon.addEventListener("click", function () {
            const phoneNumber = "+201203494855";
            navigator.clipboard.writeText(phoneNumber).then(() => {
                const toast = document.getElementById("copy-toast");
                toast.style.opacity = 1;
                setTimeout(() => {
                    toast.style.opacity = 0;
                }, 3000);
            });
        });
    }
});

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-btn");

const descriptions = ['A modern landing page for an e-commerce website with clean layout and user-focused design.',
    'Homepage for a digital innovation platform highlighting features and value propositions.',
    'A clean and interactive JavaScript Calculator performing basic arithmetic operations with a user-friendly interface.',
    "A tourism landing page allowing users to explore, book, and learn about Egypt's attractions.",
    'A simple C++ library system that applies clean code principles for managing books, users, and borrowing records with modular, readable, and maintainable structure.',
    'Signup page designed for an innovation platform focusing on UX and visual appeal.',
    'A WordPress-based academic LMS with full course management and student interaction tools.' ,
    'A simple JavaScript project that uses dynamic cards to display, edit, and delete product information. Designed for easy product management with a clean and interactive UI.',
    'Afia is a modern food website built using HTML, CSS, JavaScript, and Bootstrap. It focuses on promoting and selling healthy meals through a clean, responsive, and user-friendly design. The site includes dynamic components, animated sections, and an attractive layout to highlight fresh and nutritious food options.'];
const titles = ['E-Commerce Landing Page', 'Digital Platform Homepage', 'JavaScript Calculator', 'Tourism Landing Page', 'Library Manager - Clean C++', 'SignUp Page UI', 'Academic LMS Platform' , 'CURDS operations JavaScript' , 'Afiaa — Healthy food, happy life.'];

document.querySelectorAll(".collection-card button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const img = btn.closest(".collection-card").querySelector("img").src;
        modalImage.src = img;
        modalTitle.textContent = titles[index];
        modalDescription.textContent = descriptions[index];
        modal.style.display = "flex";
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

// ============= Animation =========== //

window.addEventListener('load', () => {
    const image = document.querySelector('.image-container');
    const contentLines = document.querySelectorAll('.content > *');

    if (image) {
        image.classList.add('visible');
    }

    contentLines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add('visible');
        }, 1200 + index * 500);
    });
});

const serviceCards = document.querySelectorAll('.categories-container .category');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 650);
            obs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});
serviceCards.forEach(card => observer.observe(card));
