const form = document.getElementById("contactForm");
const button = document.querySelector(".send-btn");

const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  subject: document.getElementById("subject"),
  message: document.getElementById("message")
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  Object.values(fields).forEach(field => {
    field.classList.remove("error", "success");

    if (field.id === "email") {
      if (!isValidEmail(field.value.trim())) {
        setError(field);
        valid = false;
      } else {
        setSuccess(field);
      }
    } else if (field.id === "message") {
      if (field.value.trim().length < 10) {
        setError(field);
        valid = false;
      } else {
        setSuccess(field);
      }
    } else {
      if (field.value.trim() === "") {
        setError(field);
        valid = false;
      } else {
        setSuccess(field);
      }
    }
  });

  if (!valid) return;

  button.classList.add("loading");
  button.textContent = "Sending";

  setTimeout(() => {
    button.classList.remove("loading");
    button.textContent = "Send Message ↑";
    alert("Message sent successfully!");
    form.reset();
    clearStates();
  }, 1500);
});

/* Helpers */

function setError(field) {
  field.classList.add("error");
  field.classList.remove("success");
}

function setSuccess(field) {
  field.classList.add("success");
  field.classList.remove("error");
}

function clearStates() {
  Object.values(fields).forEach(field => {
    field.classList.remove("error", "success");
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* Live correction */
Object.values(fields).forEach(field => {
  field.addEventListener("input", () => {
    field.classList.remove("error");
  });
});
