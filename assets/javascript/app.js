

$(document).ready(function() {

	$("body").css("display", "none");
    $("body").fadeIn(2000);
    $("#formPlay").css("display","none");

var questArray = ["What is the longest time between two twins being born?",
				"Everyone has a unique tongue print, just like fingerprints.",
				"The northern leopard frog swallows its prey using what body part?",
				"Who was the first man to urinate on the moon?",
				"What was the first American film to show a toilet being flushed on screen",
  				"In 2008 scientists discovered a new species of bacteria that lives in what?",
  				"The largest snowflake ever recorded reportedly measured how many inches?",
  				"Approximately, how many miles of blood vessels are there in the human body?"];

 var answerArray = ["87 days", "True","Eyes","Buzz Aldrin", "Psycho", "Hairspray","15","60,000"];
 var countDownSeconds = (new Date().getTime() / 1000) + 90;
 var numCorrect = 0;
 var numWrong = 0;
 var numAnswered = 0;
 var selectedArray = [];

//Function to start the game
$("#start").click(function() {
	$("#formPlay").css("display","");
	$("#formPlay").fadeIn(2000);
	$("#buttonStart").css("display","none");
	$("#formResults").css("display","none");
})

//Create a function to reveal the questions

function initializePlay() {
	for (i=0; i<questArray.length; i++){
		questionNumber = (i + 1); 
		document.getElementById("q" +questionNumber+"Text").innerHTML = questArray[i];

}}

initializePlay();

var countDown = setInterval(function(){
	var now = (new Date().getTime() / 1000);
	var distance = countDownSeconds - now;
	var seconds = Math.floor(distance);
	document.getElementById("clock").innerHTML = "Time Remaining: " + seconds;
	if (distance < 0) {
		clearInterval(countDown);
		document.getElementById("clock").innerHTML = "Out of Time!";
		$("#formStart").css("display", "none");
		$("#formPlay").css("display", "none");
		$("#formResults").css("display","");
		$("#formResults").fadeIn(2000);
	}
})


//create a function that scores the question
function getAnswers(){
var questions = document.getElementById("question")
//loop through the questions
	for(var i = 0; i < questions.length; i++) {
		var choices = document.getElementByTagName("input")
		for (var j = 0; j < choices.length; j++){
			if (choices[j].checked === true){
				apicked = choices[j].value;
				selectedArray.push(apicked);
				numAnswered += 1;
			}
		}
	}
}

console.log(selectedArray);

//compare the selections array with the answer array
	//compare the lengths
	for (var i = 0; i < selectedArray.length; i++){
		for (var j = 0; j < answerArray.length; j++){
			if (selectedArray[i] === answerArray[j]){
				numCorrect++;
			} else {
				numWrong++;
				}
		}
	}

//go to the results page if done button is clicked
$("#submitAnswers").click(function(){
	$("#formPlay").css("display", "none");
		$("#formResults").css("display","");
		$("#formResults").fadeIn(2000);	
})

 

//display the number questions answered correctly
document.getElementById("correct").innerHTML = "Correct Answers: " +numCorrect;

//display the number questions answered incorrectly
document.getElementById("wrong").innerHTML = "Incorrect Answers: " +numWrong;

//display the number of question answered out of totol questions
var unAnsweredCount = 8 - numAnswered
document.getElementById("unanswered").innerHTML = "Unanswered: " + unAnsweredCount

//game end

//buttons

})