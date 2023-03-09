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


const biciLeggera = bici.filter(element => {
    const {peso} = element;
    const {nome} = element;

    if (peso < 30) {
        console.log(`la bici più leggera è ${nome} e pesa ${peso} kg`)
        return result.innerHTML = `la bici più leggera è ${nome} e pesa ${peso} kg`
    }
})




