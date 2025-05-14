function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Store values in localStorage
  localStorage.setItem("username", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);

  // Redirect to instructions page
 
}