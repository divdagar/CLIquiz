var readLineSync = require('readline-sync');

var userName = readLineSync.question("What's your name? ")

console.log("Welcome " + userName + ", let's find out how well you know Divyanshu");
console.log(" ");
readLineSync.question("Press enter to begin ");
console.log(" ");

let score = 0;

const questionPannel = [
  {
    question : "What is my name? ",
    answer : "Div"
  },
  {
    question : "Where do I live? ",
    answer : "bangalore"
  },
  {
    question : "Cats or dogs? ",
    answer : "both"
  },
  {
    question : "Am I a early riser or a late sleeper? ",
    answer : "late sleeper"
  },
  {
    question : "What do you love?",
    answer : "travelling"
  }
]

function QA(question,answer){

  let response = readLineSync.question(question);
  if (response.toLowerCase() === answer.toLowerCase()){
    console.log("You are right!!");
    console.log(" ");
    score = score + 1;
  } else {
    console.log("Oops! You are wrong. The correct answer is : " + answer);
    console.log(" ");
  }
  console.log(`-------------------`);
  
}

function playAgain(){
  for(let i = 0 ; i < questionPannel.length ; i++){
    QA(questionPannel[i].question,questionPannel[i].answer);
  }
  let Pagain = readLineSync.question("Do you want to continue? Y or N : ");
  if(Pagain.toUpperCase() === "Y"){
    console.clear();
    score = 0;
    playAgain();
  }
  else{
    console.log("Your score: " + score )
  }
}

playAgain();

