var playing = true;
var name= null;
var answer= null;

function startGame(){
  var play= prompt ("Are you ready to rumble?");
  if (play=== "yes") {
  var name= prompt ("What is your character's name?");
  startCombat(name);
  //trying to figure out how to get .toUpperCase to work --question
  }
  else if (play === "no"){
    console.log ("Well, fine then.");
    playing = false;
    //playing stops if user says no
  }
}
function startCombat(name){
  //var declared here to clean up global variables
  var userhealth = 40;
  var ehealth = 10;
  var wins = 0;

  while (playing) {
      userChoice= prompt ("Do you want to attack, heal, or quit?");
    if (userChoice === "attack"){
      userhealth -= getDamage();
      ehealth -= getDamage();
      console.log("Oof, you take some damage! " + ( name ) + "'s health is now " + userhealth + "!");
      console.log("The Almighty Grant has " + ehealth + " health left!");

    if (userhealth<=0){
      console.log ("Well, that was embarassing...");
      playing=false;
    }

    if (ehealth <= 0) {
      wins++
      ehealth=10;
        console.log("You've earned a win!");
    }

    if (wins ==5){
      console.log (wins ++)
      console.log ("You've beaten Grant to death! You monster.");
        playing=false;
    }
      }
    else if (userChoice === "quit"){
      console.log ("See ya later, nerd.")
      playing=false;
    }
        }
    if(ehealth <= 0){
      ehealth = 10;
      wins++;
      console.log("You have defeated The Almighty Grant.")
          }

    else if (userChoice === "heal"){
      userhealth += healDamage();
      console.log("You have healed! Your health is now " +userhealth+ ". " (heals) + " heals remaining.")
      //if the user chooses to heal, this runs healDamage function
          }
          
  function getDamage(){
    return Math.floor(Math.random() * 3) + 1;
    //generates a random number between 1 and 5
  }

  function healsRemaining(){
    var heals = 2
    heals--;
  }
  function healDamage(){
    return Math.floor(Math.random() * 10) + 1;
//generates a random number between 1 and 10
  }
}
startGame();
