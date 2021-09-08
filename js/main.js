// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studente = {
	"nome": "Samuele",
	"cognome": "Madrigali",
	"eta": 30
};
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for ( var key in studente ) {
	console.log(`${key} => ${studente[key]}`); // stampa i valori Samuele, Madrigali, 30
}

// Creare un array di oggetti di studenti.
var studenti = [
	{
		"nome": "Samuele",
		"cognome": "Madrigali",
		"eta": 30
	},
	{
		"nome": "Samantha",
		"cognome": "Madrigali",
		"eta": 34
	},
	{
		"nome": "Remo",
		"cognome": "Madrigali",
		"eta": 75
	}
];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for ( var i = 0; i < studenti.length; i++ ) {
	console.log(`${studenti[i]['nome']} ${studenti[i].cognome}`);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoStudente = {
	"nome": prompt("Inserisci il nome"),
	"cognome": prompt("Inserisci il cognome"),
};

var etaNuovoStundente = parseInt(prompt("Inserisci l'eta"));
while(isNaN(etaNuovoStundente)) {
	etaNuovoStundente = parseInt(prompt("Attento!!Inserisci l'eta"));
}

nuovoStudente.eta = etaNuovoStundente;

studenti.push(nuovoStudente);

console.log(studenti);

// studenti.splice(1, 1);

// console.log(studenti);