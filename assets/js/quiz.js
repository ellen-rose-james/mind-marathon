if (!sessionStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}

const allQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Venus", "Earth", "Mars", "Mercury"],
    answer: "Mercury",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question:
      "Which country gifted the Statue of Liberty to the United States?",
    options: ["Canada", "France", "Italy", "Germany"],
    answer: "France",
  },
  {
    question: "Which ocean is the largest by area?",
    options: [
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "How many bones does an adult human have?",
    options: ["206", "180", "220", "250"],
    answer: "206",
  },
  {
    question: "Who wrote ‘Harry Potter’?",
    options: [
      "J.R.R. Tolkien",
      "J.K. Rowling",
      "George Orwell",
      "William Shakespeare",
    ],
    answer: "J.K. Rowling",
  },
  {
    question: "Which continent has the most countries?",
    options: ["Asia", "Africa", "Europe", "North America"],
    answer: "Africa",
  },
  {
    question: "Which is the longest river in Kerala?",
    options: ["Periyar", "Bharathapuzha", "Pamba", "Chaliyar"],
    answer: "Periyar",
  },
  {
    question: "Who was the first Chief Minister of Kerala?",
    options: [
      "K. Karunakaran",
      "E. M. S. Namboodiripad",
      "A. K. Antony",
      "Pattom Thanu Pillai",
    ],
    answer: "E. M. S. Namboodiripad",
  },
  {
    question:
      "The famous Onam festival commemorates the return of which legendary king?",
    options: ["Mahabali", "Ravana", "Harishchandra", "Ashoka"],
    answer: "Mahabali",
  },
  {
    question: "What is the name of Kerala’s classical dance form?",
    options: ["Bharatanatyam", "Kuchipudi", "Kathakali", "Odissi"],
    answer: "Kathakali",
  },
  {
    question: "In which year was Kerala formed as a state?",
    options: ["1947", "1950", "1956", "1960"],
    answer: "1956",
  },
  {
    question: "Which is the highest peak in Kerala?",
    options: ["Chembra Peak", "Anamudi", "Agasthyarkoodam", "Meesapulimala"],
    answer: "Anamudi",
  },
  {
    question: "Who is considered the father of Malayalam language?",
    options: [
      "Thunchaththu Ezhuthachan",
      "Kumaran Asan",
      "Vallathol Narayana Menon",
      "Ulloor",
    ],
    answer: "Thunchaththu Ezhuthachan",
  },
  {
    question: "Which Kerala district has the largest forest cover?",
    options: ["Idukki", "Palakkad", "Wayanad", "Pathanamthitta"],
    answer: "Idukki",
  },
  {
    question:
      "As per the 2011 Census, which Kerala district had the highest population?",
    options: ["Ernakulam", "Malappuram", "Thiruvananthapuram", "Kollam"],
    answer: "Malappuram",
  },
  {
    question:
      "Which district had the highest literacy rate in Kerala according to the 2011 Census?",
    options: ["Pathanamthitta", "Kottayam", "Thrissur", "Alappuzha"],
    answer: "Kottayam",
  },
  {
    question: "Which economic sector employs the most people in Kerala?",
    options: ["Agriculture", "Industry", "Services", "Fisheries"],
    answer: "Services",
  },
  {
    question:
      "Which is the most urbanized district in Kerala (by % urban population)?",
    options: ["Kozhikode", "Ernakulam", "Kannur", "Thiruvananthapuram"],
    answer: "Ernakulam",
  },
  {
    question:
      "What is Kerala’s rank in India in terms of Human Development Index (HDI)?",
    options: ["First", "Second", "Third", "Fourth"],
    answer: "First",
  },
  {
    question: "Which crop is most widely cultivated in Kerala?",
    options: ["Tea", "Coconut", "Rice", "Banana"],
    answer: "Coconut",
  },
  {
    question:
      "As per the Economic Review, which district receives the highest remittance inflow?",
    options: ["Kottayam", "Malappuram", "Thrissur", "Pathanamthitta"],
    answer: "Malappuram",
  },
  {
    question:
      "What is the approximate infant mortality rate (IMR) in Kerala (as per recent DES data)?",
    options: [
      "20 per 1000 live births",
      "12 per 1000 live births",
      "7 per 1000 live births",
      "4 per 1000 live births",
    ],
    answer: "7 per 1000 live births",
  },
  {
    question:
      "Which department is primarily responsible for statistical data collection in Kerala?",
    options: [
      "Planning Board",
      "DES (Department of Economics & Statistics)",
      "Revenue Department",
      "Local Self Government",
    ],
    answer: "DES (Department of Economics & Statistics)",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Steel", "Diamond", "Quartz", "Obsidian"],
    answer: "Diamond",
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: [
      "Rosalind Franklin",
      "Marie Curie",
      "Ada Lovelace",
      "Florence Nightingale",
    ],
    answer: "Marie Curie",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    answer: "Japan",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Rembrandt"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Stephen Hawking",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "In which year did Facebook launch?",
    options: ["2002", "2003", "2004", "2005"],
    answer: "2004",
  },
  {
    question: "Which is the longest lake in Kerala?",
    options: [
      "Ashtamudi Lake",
      "Vembanad Lake",
      "Sasthamcotta Lake",
      "Periyar Lake",
    ],
    answer: "Vembanad Lake",
  },
  {
    question: "Which is the smallest district in Kerala by area?",
    options: ["Wayanad", "Alappuzha", "Pathanamthitta", "Thrissur"],
    answer: "Alappuzha",
  },
  {
    question: "Which Indian city is known as the 'Silicon Valley of India'?",
    options: ["Hyderabad", "Chennai", "Bengaluru", "Pune"],
    answer: "Bengaluru",
  },
  {
    question: "Who is known as the 'Missile Man of India'?",
    options: [
      "Homi Bhabha",
      "Vikram Sarabhai",
      "A. P. J. Abdul Kalam",
      "K. Radhakrishnan",
    ],
    answer: "A. P. J. Abdul Kalam",
  },
  {
    question: "Who is known as the “Father of Indian Statistics”?",
    options: [
      "Karl Pearson",
      "Ronald Fisher",
      "P.C. Mahalanobis",
      "Francis Galton",
    ],
    answer: "P.C. Mahalanobis",
  },
  {
    question: "What is the full form of NSSO in India?",
    options: [
      "National Statistical Service Organization",
      "National Survey and Statistics Office",
      "National Sample Survey Office",
      "National Statistics and Standards Office",
    ],
    answer: "National Sample Survey Office",
  },
  {
    question:
      "Which age group in India is considered as the working-age population?",
    options: ["0-14 years", "15-59 years", "60+ years", "18-45 years"],
    answer: "15-59 years",
  },
  {
    question: "Which Indian state has the lowest population (Census 2011)?",
    options: ["Sikkim", "Mizoram", "Arunachal Pradesh", "Goa"],
    answer: "Sikkim",
  },
  {
    question: "In which year was the first Census conducted in India?",
    options: ["1872", "1881", "1901", "1851"],
    answer: "1872",
  },
  {
    question: "What is the scheduled frequency of the Census in India?",
    options: [
      "Every 5 years",
      "Every 10 years",
      "Every 15 years",
      "Every 20 years",
    ],
    answer: "Every 10 years",
  },
  {
    question: "Which is the least densely populated state in India?",
    options: ["Mizoram", "Arunachal Pradesh", "Sikkim", "Nagaland"],
    answer: "Arunachal Pradesh",
  },
  {
    question:
      "Which city has the highest population density among Indian metros?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Mumbai",
  },
  {
    question: "Who is considered the father of modern statistics?",
    options: ["Karl Pearson", "Ronald Fisher", "John Tukey", "Francis Galton"],
    answer: "Ronald Fisher",
  },
  {
    question:
      "Which country first introduced probability theory as a formal discipline?",
    options: ["Germany", "France", "England", "Italy"],
    answer: "France",
  },
  {
    question:
      "Which statistical graph is commonly used to display the distribution of a dataset?",
    options: ["Pie Chart", "Histogram", "Scatter Plot", "Line Graph"],
    answer: "Histogram",
  },
  {
    question: "Who developed the concept of probability in mathematics?",
    options: [
      "Blaise Pascal",
      "Carl Friedrich Gauss",
      "Pierre-Simon Laplace",
      "Thomas Bayes",
    ],
    answer: "Blaise Pascal",
  },
  {
    question: "How many continents are there in the world?",
    options: ["Five", "Six", "Seven", "Eight"],
    answer: "Seven",
  },
  {
    question: "Which is the largest animal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
];

const getRandomQuestions = (n) => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

let questions = getRandomQuestions(5);
let currentQuestionIndex = 0;
let currentPassword = "";

const quizContainer = document.getElementById("quizContainer");

function renderQuestion(index) {
  const q = questions[index];
  let html = `<div id="q${index}">
    <p>${index + 1}. ${q.question}</p>`;
  q.options.forEach((opt, i) => {
    html += `<label onclick="selectOption(this, ${index})">
      <input type="radio" name="ans${index}" value="${opt}"> ${opt}
    </label><br>`;
  });
  html += `<button onclick="checkAnswer(${index})">Submit</button>
    <p id="msg${index}" style="color: green;"></p>
  </div>`;
  quizContainer.innerHTML = html;
}

function selectOption(label, index) {
  // Remove 'selected' class from all labels for the current question
  const labels = document.querySelectorAll(`#q${index} label`);
  labels.forEach((lbl) => lbl.classList.remove("selected"));

  // Add 'selected' class to the clicked label
  label.classList.add("selected");
}

function checkAnswer(index) {
  const selected = document.querySelector(`input[name="ans${index}"]:checked`);
  if (!selected) return;

  const isCorrect = selected.value === questions[index].answer;
  const message = document.getElementById(`msg${index}`);

  if (isCorrect) {
    message.innerText = "Correct!";

    // Store the correct answer for unlocking the next question
    currentPassword = questions[index].answer;

    if (currentQuestionIndex < questions.length - 1) {
      // Show the modal
      document.getElementById("modalOverlay").style.display = "block";
      document.getElementById("passwordModal").style.display = "block";
      document.getElementById("errorMsg").innerText = "";
      document.getElementById("enteredPassword").value = "";
    } else {
      // Last question answered correctly
      quizContainer.innerHTML = `<h3 style="color: green;">🎉 Congratulations! You have successfully completed the quiz! <p>Well done on your effort and knowledge.</p>
<p>Keep learning and exploring new challenges! 🚀</p>
</h3>`;
      clearInterval(timerInterval); // Stop the timer
      endQuiz();
    }
  } else {
    message.innerText = "Wrong answer!";
    endQuiz();
  }
}

function checkPassword() {
  const entered = document.getElementById("enteredPassword").value.trim();
  if (entered === currentPassword) {
    currentQuestionIndex++;

    // Hide the modal
    document.getElementById("modalOverlay").style.display = "none";
    document.getElementById("passwordModal").style.display = "none";

    if (currentQuestionIndex < questions.length) {
      renderQuestion(currentQuestionIndex);
    } else {
      quizContainer.innerHTML = `<h3 style="color: green;">🎉 Congratulations! You have successfully completed Mind Marathon!</h3>`;
      clearInterval(timerInterval); // Stop the timer
    }
  } else {
    document.getElementById("errorMsg").innerText = "Incorrect answer!";
  }
}

// Timer logic
let time = 180; // 3 minutes
const timerDisplay = document.getElementById("timer");

const timerInterval = setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  time--;
  if (time < 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = "Time's up!";
    endQuiz();
  }
}, 1000);

function endQuiz() {
  // Stop the timer
  clearInterval(timerInterval);

  // Redirect to finish.html
  window.location.href = "finish.html";
}

// Disable page refresh
window.addEventListener("keydown", function (e) {
  // Prevent F5 (Refresh)
  if (e.key === "F5") {
    e.preventDefault();
  }

  // Prevent Ctrl+R (or Cmd+R on macOS)
  if ((e.ctrlKey || e.metaKey) && e.key === "r") {
    e.preventDefault();
  }
});

// Initialize first question
renderQuestion(currentQuestionIndex);
