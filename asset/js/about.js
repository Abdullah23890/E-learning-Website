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

const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
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
          {
            transform: startTransform,
            opacity: 0
          },
          {
            transform: "translate(0,0)",
            opacity: 1
          }
        ],
        {
          duration: 1100, // smooth time
          easing: "cubic-bezier(0.16, 1, 0.3, 1)", // ultra smooth
          fill: "forwards"
        }
      );

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.25
  }
);

elements.forEach((el) => observer.observe(el));