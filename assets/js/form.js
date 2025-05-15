function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const userData = { name, email, phone };

  // Send data to the backend
  fetch("http://localhost:5000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          throw new Error(data.message);
        });
      }
      return response.json();
    })
    .then((data) => {
      alert(data.message);
      sessionStorage.setItem("loggedIn", true);
      sessionStorage.setItem("currentUser", JSON.stringify(userData));
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message); // Show error message if the user is already logged in
    });
}
