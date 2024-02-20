let userScore=0;
let compScore=0;
let user_choice;
let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
function genCompChoice() {
    const options=["rock","paper","scissors"];
    let compChoice=Math.floor(Math.random()*3);
    return options[compChoice];
}
function scoreUpdation(){
 let userScore_update =document.querySelector("#user-score");
 let compScore_update=document.querySelector("#comp-score");
 userScore_update.innerHTML=userScore;
 compScore_update.innerHTML=compScore;

}
function message(user_choice,comp_choice,st){
    
    msg.innerHTML=user_choice + st + comp_choice;
}
function playgame(user_choice)
{
    let comp_choice=genCompChoice();
    console.log(user_choice,comp_choice);
    if(comp_choice==user_choice)
    {
        scoreUpdation();
        message(user_choice,comp_choice," draws with ");
        msg.style.backgroundColor="#081b31";
    }
    else if(user_choice=="rock"&&comp_choice=="scissors"||user_choice=="paper"&&comp_choice=="rock"||
    user_choice=="scissors"&&comp_choice=="paper")
    {
        userScore++; console.log(userScore,compScore);
        scoreUpdation();
        message(user_choice,comp_choice," beats ");
        msg.style.backgroundColor="green";
    }
    else if(user_choice=="scissors"&&comp_choice=="rock"||user_choice=="rock"&&comp_choice=="paper"||
    user_choice=="paper"&&comp_choice=="scissors")
    {
        compScore++;console.log(userScore,compScore);
        scoreUpdation();
        message(user_choice,comp_choice," gets beaten by  ");
        msg.style.backgroundColor="red";
    }

}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        console.log("choice was clicked");
        user_choice=choice.getAttribute("id");
        playgame(user_choice);
    });
});