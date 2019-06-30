// When the audio is ended, the question and the hyperlink will appear on the page.

$("#player").bind("ended", function() {
  document.getElementById("question").innerHTML = `Why are legends handed down by storytellers useful?`;
  document.getElementById("moveOn").innerHTML = "Let's move on!";
})
