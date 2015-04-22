var answerMine = document.getElementById('answerMine');
var submit = document.getElementById('submit');
submit.addEventListener('click', function() {answerMine.className += ' transition';answerMine.className += ' slide-down';window.setTimeout(function() {answerMine.remove();}, 1000);}, false);