'use strict';

/******* 
 * FUNCTIONS 
 * ***** */


function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
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
    element.goalsMade = randomNum(10, 40);
    element.goalsTaken = randomNum(10, 40);

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








