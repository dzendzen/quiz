const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionContainerElt = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;
const questionElt = document.getElementById("questions");
const answerBtnsElt = document.getElementById("answer-btns");

const scoreTab = document.getElementById("score");
let score = 0;

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  // console.log("started");
  startBtn.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElt.classList.add("hide");
  score = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainerElt.classList.remove("hide");
  questionElt.innerText = question.question;
  question.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("btn");
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
    }
    btn.addEventListener("click", selectAnswer);
    answerBtnsElt.appendChild(btn);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextBtn.classList.add("hide");

  while (answerBtnsElt.firstChild) {
    answerBtnsElt.removeChild(answerBtnsElt.firstChild);
  }
}

function selectAnswer(e) {
  e.preventDefault();
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;
  // setStatusClass(document.body, correct);
  Array.from(answerBtnsElt.children).forEach((btn) => {
    setStatusClass(btn, btn.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove("hide");
  } else {
    nextBtn.classList.add("hide");
    end = document.createElement("button");
    end.classList.add("btn");
    end.innerText = "Fin du quiz ! Ton score est de : "+ score;
    answerBtnsElt.appendChild(end);
    
  }
  if ((selectedBtn.dataset = correct)) {
    score++;
  }
  scoreTab.innerText = score;
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
    element.disabled = true;
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
// quiz questions

   questions = [
  // ****IDENTITÉ NUMÉRIQUE - MULTIMÉDIA + intro image
  {
    question: "Le mot informatique est formé de",
    answers: [
      { text: "information et automatique", correct: true },
      { text: "information et technique", correct: false },
    ],
  },
  {
    question: "Comment appelle-t-on aussi le harcèlement en ligne ?",
    answers: [
      { text: "cybercriminalité", correct: false },
      { text: "cyberagression", correct: false },
      { text: "cyberharcèlement", correct: true },
      { text: "cyberattaque", correct: false },
    ],
  },
  {
    question: "Si une appli est gratuite, c'est que tu es certainement ",
    answers: [
      { text: "le produit", correct: true },
      { text: "le client", correct: false },
      { text: "le joueur", correct: false },
      { text: "un fan", correct: false },
    ],
  },
  {
    question: "On sait toujours qui est de l'autre côté de l'écran",
    answers: [
      { text: "vrai", correct: false },
      { text: "faux", correct: true },
    ],
  },
  {
    question: "On doit toujours utiliser le même mot de passe",
    answers: [
      { text: "vrai", correct: false },
      { text: "faux", correct: true },
    ],
  },
  {
    question:
      "Sur les réseaux sociaux il vaut mieux utiliser un ... à la place de son vrai nom",
    answers: [
      { text: "homonyme", correct: false },
      { text: "pseudonyme", correct: true },
      { text: "algorithme", correct: false },
      { text: "fantôme", correct: false },
    ],
  },
  {
    question: "Ctrl + C permet ",
    answers: [
      { text: "de copier", correct: true },
      { text: "de coller", correct: false },
      { text: "d'écrire un C majuscule", correct: false },
      { text: "d'écrire un courrier", correct: false },
    ],
  },
  {
    question: "Lequel n'est PAS un réseau social",
    answers: [
      { text: "instagram", correct: false },
      { text: "tik tok", correct: false },
      { text: "snapchat", correct: false },
      { text: "outlook", correct: true },
    ],
  },
  {
    question: "Facebook est plutôt le réseau social des + de 30 ans",
    answers: [
      { text: "vrai", correct: true },
      { text: "faux", correct: false },
      // {text:"", correct: false},
      // {text:"", correct: false},
    ],
  },
  {
    question: "Lequel n'est PAS un fichier image",
    answers: [
      { text: "jpg", correct: false },
      { text: "webp", correct: false },
      { text: "wma", correct: true },
      { text: "png", correct: false },
    ],
  },
  {
    question: "La photographie numérique a été précédée par la photographie ",
    answers: [
      { text: "argentique", correct: true },
      { text: "argentine", correct: false },
      { text: "électronique", correct: false },
      { text: "argentinique", correct: false },
    ],
  },
  {
    question: "La chambre noire c'est",
    answers: [
      { text: "l'endroit où sont stockées toutes nos données", correct: false },
      { text: "l'autre nom du daguerréotype", correct: false },
      { text: "une partie d'un daguerréotype", correct: true },
      { text: "l'endroit où travaillent les développeurs web", correct: false },
    ],
  },
  {
    question:
      "Avec le daguerréotype, pour que l'image se révèle on utilise les vapeurs",
    answers: [
      { text: "de mercure", correct: true },
      { text: "d'argent", correct: false },
      { text: "d'iode", correct: false },
      { text: "d'ammoniaque", correct: false },
    ],
  },
  {
    question: "quand l'image est insensible à la lumière on dit qu'elle est",
    answers: [
      { text: "réussie", correct: false },
      { text: "fixée", correct: true },
      { text: "appliquée", correct: false },
      { text: "collée", correct: false },
    ],
  },
  {
    question: "Les premières plaques de daguerréotype représentaient",
    answers: [
      { text: "des portraits", correct: false },
      { text: "des rues", correct: false },
      { text: "une forêt", correct: false },
      { text: "des natures mortes", correct: true },
    ],
  },
  {
    question: "La photographie argentique fait appel à un processus",
    answers: [
      { text: "photo-chimique", correct: true },
      { text: "photo-electrique", correct: false },
      { text: "photo-numérique", correct: false },
      { text: "photo-argentique", correct: false },
    ],
  },
  {
    question: "Le poids de l'image c'est la quantité ",
    answers: [
      { text: "de personnes sur présentes sur l'image ", correct: false },
      { text: "de pixels présents sur une image", correct: false },
      { text: "le nombre de fois où on a partagé l'image", correct: false },
      {
        text: "d'informations nécessaires pour décrire une image",
        correct: true,
      },
    ],
  },
  {
    question: "La valise Belino permet",
    answers: [
      { text: "de voyager léger", correct: false },
      { text: "transmettre des photographies", correct: true },
      { text: "transporter son appareil photo", correct: false },
      { text: "transporter une caméra", correct: false },
    ],
  },
  {
    question:
      "Face au flux d'informations et d'images il faut exercer son sens ",
    answers: [
      { text: "du partage", correct: false },
      { text: "critique", correct: true },
      { text: "pratique", correct: false },
      { text: "comique", correct: false },
    ],
  },
  {
    question: "Peut-on tout montrer dans les médias ?",
    answers: [
      { text: "non", correct: true },
      { text: "oui", correct: false },
      // {text:"", correct: false},
      // {text:"", correct: false},
    ],
  },
     ]
