if (!sessionStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}

const allQuestions = [
  {
    question:
      "Which measure of central tendency represents the middle value in a sorted dataset?",
    options: ["Mean", "Median", "Mode", "Range"],
    answer: "Median",
  },
  {
    question: "What does standard deviation measure in a dataset?",
    options: [
      "Central tendency",
      "The spread of data",
      "The highest value",
      "The lowest value",
    ],
    answer: "The spread of data",
  },
  {
    question:
      "In probability theory, what is the total probability of all possible outcomes?",
    options: ["1", "0.5", "0", "It depends on the number of events"],
    answer: "1",
  },
  {
    question: "What type of graph is best for showing frequency distributions?",
    options: ["Line graph", "Pie chart", "Histogram", "Scatter plot"],
    answer: "Histogram",
  },
  {
    question:
      "What is the probability of flipping a fair coin and getting heads?",
    options: ["1/4", "1/3", "1/2", "3/4"],
    answer: "1/2",
  },
  {
    question:
      "Which statistical test is used to compare the means of two independent groups?",
    options: ["Chi-square test", "ANOVA", "t-test", "Regression analysis"],
    answer: "t-test",
  },
  {
    question: "What is a p-value in hypothesis testing?",
    options: [
      "The probability of rejecting the null hypothesis incorrectly",
      "The probability of obtaining the observed results assuming the null hypothesis is true",
      "The median of the dataset",
      "The range of the dataset",
    ],
    answer:
      "The probability of obtaining the observed results assuming the null hypothesis is true",
  },
  {
    question:
      "Which term refers to a variable that affects both independent and dependent variables?",
    options: [
      "Confounding variable",
      "Response variable",
      "Control variable",
      "Nominal variable",
    ],
    answer: "Confounding variable",
  },
  {
    question: "What does a correlation coefficient indicate?",
    options: [
      "The strength and direction of a relationship between two variables",
      "The sample size",
      "The mean of a dataset",
      "The probability of an event occurring",
    ],
    answer:
      "The strength and direction of a relationship between two variables",
  },
  {
    question:
      "If a dataset is skewed to the right, which measure of central tendency is greatest?",
    options: ["Mean", "Median", "Mode", "Range"],
    answer: "Mean",
  },
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
    question: "Who invented the light bulb?",
    options: [
      "Nikola Tesla",
      "Thomas Edison",
      "Alexander Graham Bell",
      "Albert Einstein",
    ],
    answer: "Thomas Edison",
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
    question: "What is the chemical symbol for water?",
    options: ["CO₂", "H₂O", "O₂", "NaCl"],
    answer: "H₂O",
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
    question: "Which district is known as the “Land of Coconuts”?",
    options: ["Palakkad", "Alappuzha", "Kozhikode", "Kollam"],
    answer: "Alappuzha",
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
    question: "Which Kerala city is known as the “City of Spices”?",
    options: ["Thrissur", "Kannur", "Kochi", "Idukki"],
    answer: "Kochi",
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
    question: "Which Kerala district had the highest population (Census 2011)?",
    options: ["Ernakulam", "Malappuram", "Thiruvananthapuram", "Kollam"],
    answer: "Malappuram",
  },
  {
    question:
      "Which district had the highest literacy rate in Kerala (Census 2011)?",
    options: ["Pathanamthitta", "Kottayam", "Thrissur", "Alappuzha"],
    answer: "Kottayam",
  },
  {
    question: "Which economic sector employs the most people in Kerala?",
    options: ["Agriculture", "Industry", "Services", "Fisheries"],
    answer: "Services",
  },
  {
    question: "Which is the most urbanized district in Kerala?",
    options: ["Kozhikode", "Ernakulam", "Kannur", "Thiruvananthapuram"],
    answer: "Ernakulam",
  },
  {
    question: "What is Kerala’s rank in India in terms of HDI?",
    options: ["First", "Second", "Third", "Fourth"],
    answer: "First",
  },
  {
    question: "Which crop is most widely cultivated in Kerala?",
    options: ["Tea", "Coconut", "Rice", "Banana"],
    answer: "Coconut",
  },
  {
    question: "Which district receives the highest remittance inflow?",
    options: ["Kottayam", "Malappuram", "Thrissur", "Pathanamthitta"],
    answer: "Malappuram",
  },
  {
    question: "What is the infant mortality rate (IMR) in Kerala?",
    options: ["20", "12", "7", "4"],
    answer: "4",
  },
  {
    question: "Which Kerala district has the highest sex ratio (Census 2011)?",
    options: ["Kannur", "Alappuzha", "Pathanamthitta", "Kozhikode"],
    answer: "Pathanamthitta",
  },
  {
    question:
      "Which department is responsible for statistical data collection in Kerala?",
    options: [
      "Planning Board",
      "DES",
      "Revenue Department",
      "Local Self Government",
    ],
    answer: "DES",
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
    question: "Who developed the theory of relativity?",
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
    question: "Who is known as the “Father of Statistics”?",
    options: [
      "Karl Pearson",
      "Ronald Fisher",
      "P.C. Mahalanobis",
      "Francis Galton",
    ],
    answer: "P.C. Mahalanobis",
  },
  {
    question: "What is the full form of NSSO?",
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
      "Which age group in India is considered the working-age population?",
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
    question: "Which Census year marked India’s population crossing 1 billion?",
    options: ["1991", "2001", "2011", "1981"],
    answer: "2001",
  },
  {
    question:
      "What is the Child Sex Ratio (0–6 years) in India as per Census 2011?",
    options: ["927", "914", "940", "900"],
    answer: "914",
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
    html += `<label><input type="radio" name="ans${index}" value="${opt}"> ${opt}</label><br>`;
  });
  html += `<button onclick="checkAnswer(${index})">Submit</button>
    <p id="msg${index}" style="color: green;"></p>
  </div>`;
  quizContainer.innerHTML = html;
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
      document.getElementById("passwordSection").classList.remove("hidden");
      document.getElementById("passwordMsg").innerText = "";
      document.getElementById("enteredPassword").value = "";
    } else {
      // Last question answered correctly
      quizContainer.innerHTML = `<h3 style="color: green;">🎉 Congratulations! You have successfully completed the quiz! <p>Well done on your effort and knowledge.</p>
<p>Keep learning and exploring new challenges! 🚀</p>
</h3>`;
      clearInterval(timerInterval); // Stop the timer
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
    document.getElementById("passwordSection").classList.add("hidden");
    document.getElementById("passwordMsg").innerText = "";

    if (currentQuestionIndex < questions.length) {
      renderQuestion(currentQuestionIndex);
    } else {
      quizContainer.innerHTML = `<h3 style="color: green;">🎉 Congratulations! You have completed the quiz successfully!</h3>`;
      clearInterval(timerInterval); // Stop the timer
    }
  } else {
    document.getElementById("passwordMsg").innerText = "Incorrect password!";
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

// Initialize first question
renderQuestion(currentQuestionIndex);

