document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href =
        "https://www.facebook.com/profile.php?id=61571633125408";
    });
  });
});
