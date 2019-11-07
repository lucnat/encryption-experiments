
/*

	Decrypts Venezian codes which consist of constant translations in ASCI numbers.
	This is achieved by a combination of frequency analysis and least square method. 
*/


const letter = 'H';
const asciNumber = letter.charCodeAt(0);    
const l = String.fromCharCode(asciNumber);
const message = "Hallo, ich bins der Lucano. Ich hoffe du kannst diese Nachricht knacken.";
const encryptedMessage = translateMessage(message, 5);
decryptVenezian(encryptedMessage);


// function definitions start here

function decryptVenezian(message) {
	console.log('---------- DECRYPT MESSAGE -------------');
	console.log(message);
	for(let n = -50; n<=50; n++) {
		console.log ('n =',n);
		console.log(translateMessage(message,n));
	}
}

function getVenezianEncryptedMessage(message, n) {
	// returns encrypted message
	// translates every character by a
	return translatedMessage(message, n)
}

function translateMessage(message, n) {
	// translates message by n
	let translatedMessage = '';

	for(let i=0; i < message.length; i++) {
		const asciNumber = message[i].charCodeAt(0);
		const newNumber = (asciNumber + n)%256;
		const newLetter = String.fromCharCode(newNumber);
		translatedMessage += newLetter;
	}

	return translatedMessage;
}
