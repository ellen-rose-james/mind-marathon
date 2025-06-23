function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Check if the user has failed the quiz
  if (localStorage.getItem(`failed_${email}`)) {
    alert(
      "You are not allowed to retake the quiz as you have previously failed."
    );
    return;
  }

  // Check if the user has already logged in before
  if (localStorage.getItem(`loggedIn_${email}`)) {
    alert("You have already logged in once. You cannot log in again.");
    return;
  }

  // Store values in localStorage
  localStorage.setItem("username", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);

  // Index Redirect
  if (name && email && phone) {
    sessionStorage.setItem("loggedIn", true);
    // Set a flag so this user can't log in again
    localStorage.setItem(`loggedIn_${email}`, true);
    window.location.href = "index.html";
  } else {
    alert("Please fill in all fields.");
  }
}
