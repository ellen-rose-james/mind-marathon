const db = window.db;

async function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  if (localStorage.getItem(`failed_${email}`)) {
    alert("You are not allowed to retake the quiz.");
    return;
  }

  if (localStorage.getItem(`loggedIn_${email}`)) {
    alert("You have already logged in once. You cannot log in again.");
    return;
  }

  try {
    const docId = `${email}_${phone}`; // Create a unique ID
    const userRef = db.collection("users").doc(docId);
    const doc = await userRef.get();

    if (doc.exists) {
      alert("You have already attempted the quiz.");
      return;
    }

    // Add new user
    await userRef.set({
      name,
      email,
      phone,
      visitcount: 0,
    });

    localStorage.setItem("username", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem(`loggedIn_${email}`, true);
    sessionStorage.setItem("loggedIn", true);
    window.location.href = "index.html";

  } catch (error) {
    console.error(error);
    alert("Server error. Please try again later.");
  }
}

