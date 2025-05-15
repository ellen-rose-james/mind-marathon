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

  // Create a user data object
  const userData = {
    name,
    email,
    phone,
    timestamp: new Date().toISOString(), // Add a timestamp for when the user logged in
  };

  // Retrieve existing users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(userData); // Add the new user to the list

  // Save updated users list back to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // Store current user session
  sessionStorage.setItem("loggedIn", true);
  sessionStorage.setItem("currentUser", JSON.stringify(userData));

  // Redirect to index.html
  if (name && email && phone) {
    window.location.href = "index.html";
  } else {
    alert("Please fill in all fields.");
  }
}
