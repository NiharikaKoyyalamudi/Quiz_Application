const quizData = [
    {
      question: "1) HTML stands for -",
      a: "HighText Machine Language",
      b: "HyperText and links Markup Language",
      c: "HyperText Markup Language",
      d: "None of the above",
      correct: "c",
    },
    {
      question: "2)  The correct sequence of HTML tags for starting a webpage is -",
      a: "Head, Title, HTML, body",
      b: "HTML, Body, Title, Head",
      c: "HTML, Head, Body, Title",
      d: "HTML, Head, Title, Body",
      correct: "d",
    },
    {
      question: "3) Which of the following element is responsible for making the text bold in HTML?",
      a: "pre",
      b: "b",
      c: "p",
      d: "span",
      correct: "b",
    },
    {
      question: "4)  How to create an ordered list (a list with the list items in numbers) in HTML?",
      a: "ul",
      b: "ol",
      c: "li",
      d: "i",
      correct: "b",
    },
    {
      question: "5) Which of the following element is responsible for making the text italic in HTML?",
      a: "i",
      b: "italic",
      c: "it",
      d: "li",
      correct: "a",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const submit = document.getElementById("submit");
  const reload = document.getElementById("reload");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];
  
    document.getElementById("quiz").innerHTML = `
      <h2>${currentQuizData.question}</h2>
      <label>
        <input type="radio" name="answer" value="a" />
        ${currentQuizData.a}
      </label>
      <label>
        <input type="radio" name="answer" value="b" />
        ${currentQuizData.b}
      </label>
      <label>
        <input type="radio" name="answer" value="c" />
        ${currentQuizData.c}
      </label>
      <label>
        <input type="radio" name="answer" value="d" />
        ${currentQuizData.d}
      </label>
    `;
  }
  
  function getSelected() {
    const answers = document.getElementsByName("answer");
  
    let answer = undefined;

  answers.forEach((item) => {
    if (item.checked) {
      answer = item.value;
    }
  });

  return answer;
}

function deselectAnswers() {
  const answers = document.getElementsByName("answer");

  answers.forEach((item) => {
    item.checked = false;
  });
}

loadQuiz();

submit.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer == quizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
      `;
    //   if(score>=4)
    // {
    //     quiz.innerHTML = `
    //     <h2>You answered ${score}/${quizData.length} questions correctly</h2>`
    //     quiz.innerHTML=`<p>Congratulations you Scored Top</P>`
    // }
      submit.style.display = "none";
      reload.style.display = "block";
    }
  }
});

reload.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  loadQuiz();
});
