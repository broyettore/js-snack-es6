'use strict';

/******* 
 * FUNCTIONS 
 * ***** */


function randomNum(num) {
    const rand = Math.floor((Math.random() * num) + 1)
    return rand;
} 

/************ VARIABLES ************ */
const container = document.querySelector(".list-ctn");
const randGoals = randomNum(50);

const footballStats = [
    {
        name: "Real Madrid",
        goalsMade: 0,
        goalsTaken: 0
    },

    {
        name: "Juventus",
        goalsMade: 0,
        goalsTaken: 0
    },

    {
        name: "Psg",
        goalsMade: 0,
        goalsTaken: 0
    },

    {
        name: "Chelsea",
        goalsMade: 0,
        goalsTaken: 0
    },

    {
        name: "Liverpool",
        goalsMade: 0,
        goalsTaken: 0
    }
]

const newfootballStats = footballStats.map(element => {
    const {name} = element;
    element.goalsMade = randGoals;
    element.goalsTaken = randGoals;

    return {name: name, goalsTaken: element.goalsTaken};
})

for (let i = 0; i < footballStats.length; i++) {
    const listEl = document.createElement("li");
    listEl.classList.add("item")
    container.append(listEl);

    const listElSelect = document.querySelectorAll(".item")

    listElSelect[i].append(newfootballStats[i].name + " wtih "+ newfootballStats[i].goalsTaken+ " goals taken")
    
}
console.log(newfootballStats)








