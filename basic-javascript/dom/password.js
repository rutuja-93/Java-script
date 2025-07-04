const input = document.getElementById("password-input");
const btn = document.getElementById("btn");

function showhide() {
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "Hide";
  } else {
    input.type = "password";
    btn.textContent = "Show";
  }
}
