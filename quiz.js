const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyper Text Makeup Language", "HighText Machine Language", "None of the above"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What is the correct CSS syntax?",
    options: ["body {color: black;}", "{body:color=black;}", "{body;color:black;}", "body:color=black;"],
    answer: "body {color: black;}"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<scripting>"],
    answer: "<script>"
  },
  {
    question: "Which company developed Java?",
    options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
    answer: "Sun Microsystems"
  },
  {
    question: "Which of the following is not a programming language?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: "HTML"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').innerText = q.question;
  const optionBtns = document.querySelectorAll('.option-btn');
  q.options.forEach((opt, index) => {
    optionBtns[index].innerText = opt;
    optionBtns[index].disabled = false;
    optionBtns[index].style.backgroundColor = "#36d1dc";
  });
}

function checkAnswer(btn) {
  const selected = btn.innerText;
  if (selected === questions[currentQuestion].answer) {
    score += 10;
    btn.style.backgroundColor = "green";
  } else {
    btn.style.backgroundColor = "red";
  }

  // Disable all options after selecting
  document.querySelectorAll('.option-btn').forEach(button => button.disabled = true);
  document.getElementById('score').innerText = `Score: ${score}`;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    document.getElementById('question').innerText = "🎉 Quiz Completed!";
    document.querySelector('.options').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('score').innerText = `Final Score: ${score} / ${questions.length * 10}`;
  }
}

window.onload = loadQuestion;