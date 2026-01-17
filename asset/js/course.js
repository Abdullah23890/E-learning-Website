function checkEmail() {
  let email = document.getElementById("email").value;

  if(email === ""){
    Swal.fire({
  title: "Email",
  text: "Plz Enter Email",
  icon: "warning"
});
return false;
  } else {
    swal.fire({
      title: "Enjoy",
      text: "Enjoy Our New Letter",
      icon: "success"
    })
return false;
  }
}

// Select all course images
const courseImages = document.querySelectorAll(".course-image1, .course-image2, .course-image3, .course-image4");

// Intersection Observer for scroll
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateImage(entry.target);
            obs.unobserve(entry.target); // animate only once
        }
    });
}, { threshold: 0.3 });

// Function to animate using JS
function animateImage(img) {
    let start = null;
    const duration = 800; // animation time in ms
    const initialScale = 0.8;
    const finalScale = 1;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const scale = initialScale + (finalScale - initialScale) * progress;

        img.style.transform = `scale(${scale})`;
        img.style.opacity = progress; // fade in
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

// Observe each image
courseImages.forEach(img => {
    img.style.transform = "scale(0.8)";
    img.style.opacity = "0";
    observer.observe(img);
});

// Optional: Hover zoom animation with JS
courseImages.forEach(img => {
    img.addEventListener("mouseenter", () => {
        let scale = 1;
        const targetScale = 1.05;
        const duration = 200;
        const start = performance.now();

        function hoverStep(timestamp) {
            const progress = Math.min((timestamp - start) / duration, 1);
            const newScale = scale + (targetScale - scale) * progress;
            img.style.transform = `scale(${newScale})`;
            if (progress < 1) requestAnimationFrame(hoverStep);
        }
        requestAnimationFrame(hoverStep);
    });

    img.addEventListener("mouseleave", () => {
        let scale = 1.05;
        const targetScale = 1;
        const duration = 200;
        const start = performance.now();

        function leaveStep(timestamp) {
            const progress = Math.min((timestamp - start) / duration, 1);
            const newScale = scale + (targetScale - scale) * progress;
            img.style.transform = `scale(${newScale})`;
            if (progress < 1) requestAnimationFrame(leaveStep);
        }
        requestAnimationFrame(leaveStep);
    });
});

const elements = document.querySelectorAll(".animate");

const generalObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const dir = entry.target.dataset.animate;

            let startTransform = "translateY(80px)";

            if (dir === "left") startTransform = "translateX(-120px)";
            if (dir === "right") startTransform = "translateX(120px)";
            if (dir === "bottom") startTransform = "translateY(120px)";

            entry.target.animate(
                [
                    { transform: startTransform, opacity: 0 },
                    { transform: "translate(0,0)", opacity: 1 }
                ],
                {
                    duration: 1100,
                    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                    fill: "forwards"
                }
            );

            generalObserver.unobserve(entry.target);
        });
    },
    { threshold: 0.25 }
);

elements.forEach((el) => generalObserver.observe(el));


$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});

