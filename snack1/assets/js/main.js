'use strict';

// SNACK 1

// Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto: `[ ‘Brad Pitt’, ‘Johnny Depp’, ‘Lady Gaga’, ‘Cristiano Ronaldo’, ‘Georgina Rodriguez’, ‘Chiara Ferragni’, ‘Fedez’, ‘George Clooney’, ‘Amal Clooney’, ‘Maneskin’]`

// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell’ospite e posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.


let tableNum = 0

const tables = [

    {
        table: "Tavolo Vip",
        name: "Brad Pitt",
        seatReserved: tableNum
    },

    {
        table: "Tavolo Vip",
        name: "Johnny Depp",
        seatReserved: tableNum
    },

    {
        table: "Tavolo Vip",
        name: "Lady Gaga",
        seatReserved: tableNum
    },

    {
        table: "Tavolo Vip",
        name: "Cristiano Ronaldo",
        seatReserved: tableNum
    },

    {
        table: "Tavolo Vip",
        name: "Georgina Rodriguez",
        seatReserved: tableNum
    },

    {
        table: "Tavolo Vip",
        name: "Chiara Ferragni",
        seatReserved: tableNum
    },

    {
        table: "Tavolo Vip",
        name: "Fedez",
        seatReserved: tableNum
    },

    {
        table: "Tavolo Vip",
        name: "George Clooney",
        seatReserved: tableNum
    },

    {
        table: "Tavolo Vip",
        name: "Amal Clooney",
        seatReserved: tableNum
    },

    {
        table: "Tavolo Vip",
        name: "Maneskin",
        seatReserved: tableNum
    }
]

tables.forEach(element => {
    tableNum = tables.indexOf(element) + 1
    element.seatReserved = tableNum
    console.log(element)
})