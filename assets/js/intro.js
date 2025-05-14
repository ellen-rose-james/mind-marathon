// Redirect to login.html if accessed directly
if (!sessionStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}

// Check if the user has failed the quiz
const email = localStorage.getItem("email");
if (email && localStorage.getItem(`failed_${email}`)) {
  alert(
    "You are not allowed to access the quiz as you have previously failed."
  );
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
