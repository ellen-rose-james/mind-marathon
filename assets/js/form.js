async function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Check if the user has failed the quiz
  if (localStorage.getItem(`failed_${email}`)) {
    alert("You are not allowed to retake the quiz as you have previously failed.");
    return;
  }

  if (!name || !email || !phone) {
    alert("Please fill in all fields.");
    return;
  }

  // Store values in localStorage
  localStorage.setItem("username", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);

  // Prepare data
  const data = new URLSearchParams();
  data.append("name", name);
  data.append("email", email);
  data.append("phone", phone);

  try {
    await fetch("https://google-script-proxy-b7ksi78az-ellen-rose-james-projects.vercel.app/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data.toString(),
    });
    
    sessionStorage.setItem("loggedIn", true);
    window.location.href = "index.html";
    
  
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    alert("Something went wrong while submitting your data.");
  }
  
}
