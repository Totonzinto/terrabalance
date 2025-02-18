document
  .getElementById("myLoginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page reload

    alert("Form Submitted ");
    window.location.href = "/";
  });
