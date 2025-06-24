function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Basic validation
  if (!name || !email || !phone) {
    alert("Please fill in all fields.");
    return;
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

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

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone }),
  })
    .then((response) =>
      response.json().then((data) => ({ status: response.status, data }))
    )
    .then(({ status, data }) => {
      if (status === 201) {
        // Success: proceed
        localStorage.setItem("username", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        sessionStorage.setItem("loggedIn", true);
        window.location.href = "index.html";
      } else {
        // Error: show message
        alert(data.error || "Registration failed.");
      }
    })
    .catch(() => {
      alert("Server error. Please try again later.");
    });
}
