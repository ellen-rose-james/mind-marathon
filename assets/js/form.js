function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Store values in localStorage
  localStorage.setItem("username", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);

  // Index Redirect
  if (name && email && phone) {
    sessionStorage.setItem('loggedIn', true); 
    window.location.href = 'index.html';
  } else {
    alert("Please fill in all fields.");
  }

  
}