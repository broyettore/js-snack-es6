'use strict';

// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const result = document.querySelector(".result");

const bici = [
    {
        nome: "harrold",
        peso: 30
    },
    {
        nome: "lloris",
        peso: 50
    },
    {
        nome: "tyson",
        peso: 47
    },
    {
        nome: "Sern",
        peso: 22
    },
    {
        nome:" arrow",
        peso: 36
    },
    {
        nome: "damon",
        peso: 52
    }
]


if (bici.length === 0) {
    console.log("Sei a piedi")
} else {
    let biciLeggera = bici[0];

    for (let i = 0; i < bici.length; i++) {
        const biciAttuale = bici[i];

        if (biciAttuale.peso < biciLeggera.peso) {
            biciLeggera = biciAttuale;
        }
    }
        
        const risultatoBici = bici.filter(({peso}, index, array) => {
            if(peso === biciLeggera.peso) {
                return true;
            }
        })
        
        risultatoBici.forEach(({peso, nome}) => {
            console.log(`la bici ${nome} è la bici più leggera e pesa ${peso} kg`)
        });
}




