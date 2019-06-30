//Bold the selected text

var mainText = document.getElementById('text');

mainText.onmouseup = function() {
		var boldText = selectText();
    if (boldText != "") {
      mainText.innerHTML = mainText.innerHTML.replace(boldText, '<strong>' + boldText + '</strong>');
    }
	}

function selectText() {
		if (document.Selection) {
      //IE browser
      return document.selection.createRange().text;
		} else {
      //other browsers
      return window.getSelection().toString();
		}
	}



/***
Using Bootstrap JavaScript plugins
https://getbootstrap.com/docs/3.3/javascript/
***/

/***
The following syntax was copied from https://getbootstrap.com/docs/4.3/components/list-group/.
It enables all the tabbable list items at the same time.
***/

/***
$('#vocablist a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
***/

function showPane1() {
  $('#vocablist a:first-child').tab('show');
}

function showPane2() {
  $('#vocablist a[href="#v2"]').tab('show');
}

function showPane3() {
  $('#vocablist a:nth-child(3)').tab('show');
}

function showPane4() {
  $('#vocablist a:nth-child(4)').tab('show');
}

function showPane5() {
  $('#vocablist a:last-child').tab('show');
}

function printLog(selector, message){
	document.querySelector(selector).innerHTML += message + "<br>";
}



//Questions part

var quizItems = [
  {
    id: 1,
    question: "1. In illiterate societies, story-telling is a way of ______.",
    options: [
      "teaching people how to write",
      "allowing us to find out about things that happened 5,000 years ago",
      "passing knowledge of the past from one generation to another",
      "preserving sagas recounted by story-tellers"
    ],
    answer: "passing knowledge of the past from one generation to another",
    correct: false
  },
  {
    id: 2,
    question: "2. In some parts of the world people are still _____ to write.",
    options: [
      "incapable",
      "impotent",
      "enable",
      "unable"
    ],
    answer: "unable",
    correct: false
  }
];

var quiz = document.querySelector('#ques');
var results = "";

//Loop through the questions and dynamically create HTML for each one
function showQuestions() {
  var test = "";
	for (q of quizItems) {
    test += `<ol id= ${q.id} class = "small">`
    test +=`${q.question} <br><br>`;
    for (var i = 0; i < q.options.length; i++) {
      test += `<label> <input type="radio" name="Q${q.id}" value="${q.options[i]}" onclick="getAnswerID(event)"> ${q.options[i]} </label> <br>`
    };
    test += `<br></ol>`
  };
  quiz.innerHTML = test;
}

showQuestions()

// Automatically determine whether the answer is correct or wrong
function getAnswerID(event) {
  var target = event.target;
  var x = target.parentNode;
  var y = x.parentNode.id;
  selectAnswer(y);
}


function selectAnswer(y) {
  var selectedAnswer;
  if (y == 1) {
    selectedAnswer = document.querySelector('[name = "Q1"]:checked');
    B = quizItems[0].answer;
    A = selectedAnswer.value;
  } else if (y == 2) {
    selectedAnswer = document.querySelector('[name = "Q2"]:checked');
    B = quizItems[1].answer;
    A = selectedAnswer.value;
  };
  // I have tried simplifying it by using: "selectedAnswer = document.querySelector('[name = `Q${y}`]:checked')". But it didn't work.

  if (A == B) {
    quizItems[y-1].correct = true;
    results += `<i class="far fa-check-circle"></i> Your answer is correct! <br>`;
  } else {
    results += `<i class="far fa-times-circle"></i> Your answer is: ${A} <br>` + "  The correct answer is: " + B + "<br>";
  };
}

function printLog(selector, message){
	document.querySelector(selector).innerHTML += message + "<br>";
}

// Get the total score
function showTotalScore() {
  var l = 0;
  for (p of quizItems) {
    if (p.correct) {
      l ++;
    }
  };
  var total = `Your total score is: ${l} <br>`;
  printLog ("#result", total);
}

function saveAnswer() {
  showTotalScore();
  printLog ("#result", results);
}

// The debugger and the Console were used a lot in the Question section. Breakpoints were created to examine the value of the variables (i.e. x, y, A, B), the return of the functions, and the properties of the elements.
