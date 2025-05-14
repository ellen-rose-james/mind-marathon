// Retrieve the number of correct answers from localStorage
const correctAnswers = localStorage.getItem("correctAnswers") || 0;
document.getElementById("correctAnswers").textContent = correctAnswers;
