const inputUsername = document.getElementById("username");

const username = sessionStorage.getItem("username");
if (username) inputUsername.value = username;

const acceptButton = document.getElementById("accept-button");
acceptButton.addEventListener("click", () => {
  const username = inputUsername.value.trim();
  if (username) {
    sessionStorage.setItem("username", username);
    window.location = "./pages/settings.html";
  }
});

inputUsername.addEventListener("keydown", (event) => {
  if (event.keyCode !== 13) return;
  const username = inputUsername.value.trim();
  if (username) {
    sessionStorage.setItem("username", username);
    window.location = "./pages/settings.html";
  }
});