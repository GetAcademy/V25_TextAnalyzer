function analyzeText(text) {
    return 	{ 
		wordCount: 5, // Antall ord i teksten, 
		letterCount: 15, // Antall vanlige bokstaver, 
		nonLetterCount: 5, // Antall tegn som ikke er bokstaver, 
		mostCommonLetter: "e", // Hvilken bokstav som er mest brukt, 
		longestWord: "menneskerettighets­erklæring" // Det lengste ordet
	 }
}


function isLetter(character) { 
    return character.toLowerCase() != character.toUpperCase(); 
}