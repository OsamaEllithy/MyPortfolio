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

    emailjs.init("MrcZLQBbWMJOhWoAd");

    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs.sendForm("service_lgai73o", "template_364bdal", form)
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
            const phoneNumber = "+2001203494855";
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

const descriptions = ['A modern landing page for an e-commerce website with clean layout and user-focused design.', 'Homepage for a digital innovation platform highlighting features and value propositions.', 'A clean and interactive JavaScript Calculator performing basic arithmetic operations with a user-friendly interface.', 'Makeup product showcase website featuring a responsive, aesthetic UI for beauty products.', "A tourism landing page allowing users to explore, book, and learn about Egypt's attractions.", 'Library system demo project illustrating clean, maintainable code structure and UI.', 'Signup page designed for an innovation platform focusing on UX and visual appeal.', 'A WordPress-based academic LMS with full course management and student interaction tools.'];
const titles = ['E-Commerce Landing Page', 'Digital Platform Homepage', 'JavaScript Calculator', 'Trendy Makeup Shop UI', 'Tourism Landing Page', 'Library System Showcase', 'SignUp Page UI', 'Academic LMS Platform'];

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