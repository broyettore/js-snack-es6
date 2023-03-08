# ES6 Exercises

SNACK 1

Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto: `[ ‘Brad Pitt’, ‘Johnny Depp’, ‘Lady Gaga’, ‘Cristiano Ronaldo’, ‘Georgina Rodriguez’, ‘Chiara Ferragni’, ‘Fedez’, ‘George Clooney’, ‘Amal Clooney’, ‘Maneskin’]`

Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell’ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.

SNACK 2

Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...

1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

Questo è l’elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84

## Problem-solving Snack1

### Step 1 : Variabili

* Creo una variabile1 con valore 0
* Creo una array con all'interno degli oggetti, i quali avranno come chiavi nome del tavolo, nome dell'ospite, posto occupato.

### Step 2 : Ciclo e Stampo il risultato
 
* Creo un ciclo e cambio il valore della variabile1. Il nuovo valore prenderà la posizione dell'oggetto nell'array. 
* Assegno alla chiave posto occupato il valore della variabile1, in questo modo ad ogni ciclo cambierà il numero del posto occupato in base alla posizione dell'oggetto nell'array.
* Per concludere stampo il risultato ovvero il contenuto di ogni oggetto.


## Problem-solving Snack2

### Step 1 Lista in maiuscolo

* Creo un array1 di oggetti contenenti le info di cui abbiamo bisogno ovvero id, nome, voto degli studenti
* Creo una nuova array associata a una funzione map per ottenere una lista di solo nomi dell'array1 in maiuscolo

### Step 2 Lista con voto > 70

* Creo una copia dell'array1 con filter per ottenere solo un'array contenente solo gli studenti con un voto > 70.

### Step 2 Lista con voto > 70 e id > 120

* Procedo come nello step2 per ottenere questa volta un'array contenente solo gli studenti con voto > 70 e id >120.