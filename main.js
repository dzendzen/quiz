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
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
// quiz questions
const questions = [
  {
    question: "Le mot informatique est formé de",
    answers: [
      { text: "information et automatique", correct: true },
      { text: "information et technique", correct: false },
    ],
  },
  {
    question: "Qu'est-ce que la CNIL ?",
    answers: [
      {
        text: "Comité National de l'Informatique et des Licences",
        correct: false,
      },
      { text: "Comission Nationale de l'Informatique Libre", correct: false },
      {
        text: "Comission Nationale de l'Informatique et des Libertés",
        correct: true,
      },
      { text: "Comission Nationale pour l'Internet Local", correct: false },
    ],
  },
  {
    question: "Le premier courrier électronique a été envoyé en",
    answers: [
      { text: "1964", correct: false },
      { text: "1991", correct: false },
      { text: "1985", correct: false },
      { text: "1971", correct: true },
    ],
  },
  {
    question: "Le www c'est",
    answers: [
      { text: "le Word Wild Web", correct: false },
      { text: "le World Wide Web", correct: true },
      { text: "le Word Wide Web", correct: false },
      { text: "le Wood Wide Web", correct: false },
    ],
  },
  {
    question:
      "Dans le mot INTERNET, INTER signifie international. Mais que signifie NET ?",
    answers: [
      { text: "connaissance", correct: false },
      { text: "réseau", correct: true },
      { text: "données", correct: false },
      { text: "échange", correct: false },
    ],
  },
  {
    question: "Un DNS c'est",
    answers: [
      {
        text:
          "Un système de gestion des noms de domaines sur Internet (Domain Name System)",
        correct: true,
      },
      {
        text:
          "Un système de gestion de sites dynamiques (Dynamic Network Server)",
        correct: false,
      },
      { text: "L’organisme américain qui supervise Internet", correct: false },
      {
        text: "Un système de sécurité de l’Internet (Data Network Security)",
        correct: false,
      },
    ],
  },
  {
    question:
      "Quel est le nom donné à un logiciel permettant l’accès à des pages web ?",
    answers: [
      { text: "séquenceur", correct: false },
      { text: "navigateur", correct: true },
      { text: "provider", correct: false },
      { text: "chercheur", correct: false },
    ],
  },
  {
    question: "Cherchez l'intrus :",
    answers: [
      { text: "www.google.it", correct: false },
      { text: "ww.google.fr", correct: true },
      { text: "www.google.nl", correct: false },
      { text: "www.google.com", correct: false },
    ],
  },
  {
    question: "Internet c'est",
    answers: [
      { text: "un logiciel", correct: false },
      { text: "un ensemble d'ordinateurs", correct: false },
      { text: "un réseau local", correct: false },
      { text: "réseau de réseaux", correct: true },
    ],
  },
  {
    question:
      "Pour me connecter je dois posséder un .... entre ma ligne téléphonique et mon ordinateur?",
    answers: [
      { text: "scanner", correct: false },
      { text: "modem", correct: true },
      { text: "écran", correct: false },
      { text: "modèle", correct: false },
    ],
  },
  {
    question:
      "Pour accéder à internet, l'utilisateur doit utiliser les services d'un :",
    answers: [
      { text: "fournisseur électronique", correct: false },
      { text: "informaticien", correct: false },
      { text: "fournisseur d'accès", correct: true },
      { text: "électronicien", correct: false },
    ],
  },
  {
    question:
      "Tu viens de naviguer sur plusiers sites. Le navigateur a mémorisé toutes les adresses dans :",
    answers: [
      { text: "l'historique", correct: true },
      { text: "les favoris", correct: false },
      { text: "la barre de liens", correct: false },
      { text: "le journal", correct: false },
    ],
  },
  {
    question:
      "comment se nomme le premier écran visible après l'allumage de l'ordinateur?  ",
    answers: [
      { text: "le poste de travail", correct: false },
      { text: "le bureau", correct: true },
      { text: "le navigateur", correct: false },
      { text: "l'explorateur", correct: false },
    ],
  },
  {
    question:
      "Comment se nomme l'endroit où sont stockés les fichiers supprimés?",
    answers: [
      { text: "le bureau", correct: false },
      { text: "le dossier", correct: false },
      { text: "la poubelle", correct: false },
      { text: "la corbeille", correct: true },
    ],
  },
  {
    question: "Ctrl+z me permet :",
    answers: [
      { text: "d'annuler ce que je viens de faire", correct: true },
      { text: "de couper ce que j'ai sélectionné", correct: false },
      { text: "de controler une zone", correct: false },
      { text: "d'écrire un Z majuscule", correct: false },
    ],
  },
  {
    question: "Word est un :",
    answers: [
      { text: "traitement de texte", correct: true },
      { text: "système d'exploitation", correct: false },
      { text: "tableur", correct: false },
      { text: "dictionnaire", correct: false },
    ],
  },
  {
    question: "Excel est un :",
    answers: [
      { text: "traitement de texte", correct: false },
      { text: "système d'exploitation", correct: false },
      { text: "tableur", correct: true },
      { text: "dictionnaire", correct: false },
    ],
  },
  {
    question: "En quelle année sont nés les premiers réseaux sociaux ?",
    answers: [
      { text: "2000", correct: false },
      { text: "2004", correct: false },
      { text: "1997", correct: true },
      { text: "1992", correct: false },
    ],
  },
  {
    question: "Lequel n'est PAS un périphérique :",
    answers: [
      { text: "webcam", correct: false },
      { text: "clé usb", correct: false },
      { text: "imprimante", correct: false },
      { text: "processeur", correct: true },
    ],
  },
  {
    question: "Facebook est né en :",
    answers: [
      { text: "2004", correct: true },
      { text: "1997", correct: false },
      { text: "2000", correct: false },
      { text: "1992", correct: false },
    ],
  },
];
