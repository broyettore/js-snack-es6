'use strict';

// SNACK 2

// Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...

// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// Questo è l’elenco degli studenti:
// Id  Name                Grades
// 213 Marco della Rovere      78
// 110 Paola Cortellessa       96
// 250 Andrea Mantegna         48
// 145 Gaia Borromini          74
// 196 Luigi Grimaldello       68
// 102 Piero della Francesca   50
// 120 Francesca da Polenta    84

const students = [

    {
        id: 213,
        name: "Marco della Rovere",
        grade: 78
    },

    {
        id: 110,
        name: "Paola Cortellessa",
        grade: 96
    },

    {
        id: 250,
        name: "Andrea Mantegna",
        grade: 48
    },

    {
        id: 145,
        name: "Gaia Borromini",
        grade: 74
    },

    {
        id: 196,
        name: "Luigi Grimaldello",
        grade: 68
    },

    {
        id: 102,
        name: "MPiero della Francesca",
        grade: 50
    },

    {
        id: 120,
        name: "Francesca da Polenta",
        grade: 84
    }
]


const newStudentsName = students.map((item) => {
    return item.name.toUpperCase()
});
console.log(newStudentsName)

const newStudentsGrade = students.filter((item) => {
    return item.grade > 70
})
console.log(newStudentsGrade)

const newStudentsGradeId = students.filter((item) => {
    return item.grade > 70 && item.id > 120
})
console.log(newStudentsGradeId)




