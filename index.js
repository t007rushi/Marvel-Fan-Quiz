console.log("--------WELCOME TO Marvel-Fan-club QUIZ-----");
console.log("\n");
console.log("checkout How well you know Universe ?");
console.log("Dont worry about capital or small i will handle it")
console.log("if correct +2 else -1")
console.log("\n")
console.log("Lets start with easy one first")
var que1 = "Iron Man's first AI assitance name?";
var que2 = "What is first name of fury ?";
var que3 = "Thor's Hammer name?";
var que4 = "Avengers 1 movie villain ?";
var que5 = "complete the sentence,\"I can do this All ___\"?";
var que6 = "name of founder of marvel comics  \n imp:withoutspace ?";
var que7 = "T'challa's sister name ?";
var que8 = "Thor's new weapon name?";
var que9 = "Wakanda famous for? \n hint:cap's sheild made of?";
var que10 = "what Asgardian use for travelling universe?";
var bonus = "DC one bonus :\t complete it \n BATMAN CAVE PASSWORD: \" IRON MAN ____!!\" \n"
var bans = "sucks"
var list = [que1,que2,que3,que4,que5,que6,que7,que8,que9,que10]
var ans = ["jarvis","nick","Mjolnir","loki","day","stanlee","shuri","stormbreaker","vibranium","bifrost"]
score =0
var readline = require("readline-sync");
var name = readline.question("enter your name \n");

for(var i=0;i<list.length;i++){
  var q = readline.question(list[i] + "\n");
  var a = ans[i]
  if(q.toUpperCase() == a.toUpperCase()){
    console.log("You Are Correct!!! ");
    score +=2;
    
  }
  else{
    console.log("Wrong buddy!!!")
    console.log("its "+a +" or "+a.toUpperCase())
    score-=1;

  }
}
var b = readline.question(bonus)
if(b.toUpperCase() == bans.toUpperCase()){
console.log("BONZA!!")
// score+=5
}
else{
  console.log("Sorry you missed \n")
}
console.log("Thanks for playing.")
console.log("Your Score is:",score)

if(score>=10){
  console.log("YOU WIN!!!--------------We are Marvolus!!!!---------------")
}
else{
console.log("You Lose the quiz \n YOU are---DC the Darkooooo.........")
}







// var topper = [
//   {top:"ananoyms1",scorem :5}
  // {top:"anonymous2",scorem :"vv"}
// ]
// console.log(topper)


// var readline = require("readline-sync");
// var name = readline.question("enter your name")
// var score = 6
// if(score>topper[0].scorem){
//   topper[0].top =name;
// }
// console.log(topper[0].top)

// console.log(topper)