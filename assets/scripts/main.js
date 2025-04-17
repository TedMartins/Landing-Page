document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleFake");
  const dummyElement = document.querySelector(".dummy");

  button.addEventListener("click", () => {
    dummyElement.classList.add("is-active");

    setTimeout(() => {
      dummyElement.classList.remove("is-active");
    }, 3000);
  });

  const ctaButton = document.querySelector(".cta-button .button");
  const notification = document.getElementById("success-notification");

  ctaButton.addEventListener("click", function () {
    notification.classList.add("show");

    setTimeout(function () {
      notification.classList.remove("show");
    }, 5000);
  });

  document.getElementById('currentYear').textContent = new Date().getFullYear();
});
