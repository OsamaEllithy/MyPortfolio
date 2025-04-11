document.addEventListener('DOMContentLoaded', function () {
    function initializeGallary(gallaryId) {
        const container = document.querySelector(`#${gallaryId}`);
        const prevBtn = container.previousElementSibling;
        const nextBtn = container.nextElementSibling;

        if (!prevBtn || !nextBtn) {
            console.error("أزرار التنقل غير موجودة");
            return;
        }

        let currentIndex = 0;

        nextBtn.addEventListener('click', function() {
            const totalCards = container.children.length;
            console.log("Next button clicked, currentIndex:", currentIndex);
            if (currentIndex < totalCards - 1) {
                currentIndex++;
                updateGallary();
            }
        });

        prevBtn.addEventListener('click', function() {
            console.log("Prev button clicked, currentIndex:", currentIndex);
            if (currentIndex > 0) {
                currentIndex--;
                updateGallary();
            }
        });

        function updateGallary() {
            const cardWidth = container.children[0].offsetWidth + 20;
            console.log("Updating gallery, translating by:", currentIndex * cardWidth);
            container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }

    initializeGallary('gallary1');
});


lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets6.lottiefiles.com/packages/lf20_qp1q7mct.json'
});

let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

emailjs.init("MrcZLQBbWMJOhWoAd");

document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("contact-form");

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
});

document.getElementById("phone-icon").addEventListener("click", function () {
    const phoneNumber = "+2001203494855";
    navigator.clipboard.writeText(phoneNumber).then(() => {
    const toast = document.getElementById("copy-toast");
    toast.style.opacity = 1;
    setTimeout(() => {
        toast.style.opacity = 0;
    }, 3000);
    });
});