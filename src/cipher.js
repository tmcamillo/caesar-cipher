/*
window.cipher = {
  // ... 
}; */

function inputWord(type_button) {
	//variável para gravar os inputs do html
	let originalWord = document.getElementById("word");
	//value na parte debaixo para garantir que só será pego um valor de um input que exista
	originalWord = originalWord.value;
	
	let offsetInput = document.getElementById("offset");
	//value na parte debaixo para garantir que só será pego um valor de um input que exista
	offsetInput = parseInt(offsetInput.options[offset.selectedIndex].value);

	// if para o caso de botao ser clicado mas campo nao for preenchido
	if (!originalWord) {
		alert ("OPS! Nenhuma palavra foi inserida, preencha o campo para continuar");
	}

	// executa o botao conforme o tipo clicado
	if (type_button == 'encode') {
		document.getElementById("resultEncode").innerHTML = "Mensagem Codificada: " + encode(offsetInput, originalWord);
		document.getElementById("resultEncode").style.display = "block";
		document.getElementById("resultDecode").style.display = "none";
	}
	else if (type_button == 'decode') {
		document.getElementById("resultDecode").innerHTML = "Mensagem Decifrada: " + decode(offsetInput, originalWord);
		document.getElementById("resultDecode").style.display = "block";
		document.getElementById("resultEncode").style.display = "none";
	}
}

function encode(offsetInput, originalWord) {
	// loop percorre string e retorna a posição de cada uma das letras, pega resultado e aplica a fórmula do 
	//Daniel, de maneira que retorne o número a partir do deslocamento.
	let encodeWord = [];
	
	for (let i = 0; i < originalWord.length; i++) {
		let ascCode = originalWord.charCodeAt([i])

		if ( ascCode >= 65 && ascCode <= 90 ) {
			let calculationUpperCase = (( ascCode - 65 + offsetInput) % 26 ) + 65;
			let modifyLetterUpper =  String.fromCharCode(calculationUpperCase);	
			encodeWord.push(modifyLetterUpper);
		}
		else if ( ascCode >= 97 && ascCode <= 122 ) {
			let calculationLowerCase = (( ascCode - 97 + offsetInput) % 26 ) + 97;
			let modifyLetterLower = String.fromCharCode(calculationLowerCase);
			encodeWord.push(modifyLetterLower);
		} 
		else {
			let allOthers = String.fromCharCode(ascCode);
			encodeWord.push(allOthers);
		}
	}
	return encodeWord.join('')
}

function decode (offsetInput, originalWord) {
	// loop percorre string e retorna a posição de cada uma das letras, pega resultado e aplica a fórmula do 
	//Daniel, de maneira que retorne o número a partir do deslocamento.
	let decodeWord = [];
	
	for (let i = 0; i < originalWord.length; i++) {
		let ascCode = originalWord.charCodeAt([i])

		if ( ascCode >= 65 && ascCode <= 90 ) { 
			let calculationUpperCase = (( ascCode - 65 - (offsetInput%26)) + 26) % 26 + 90 
			let modifyLetterUpper =  String.fromCharCode(calculationUpperCase);	
			decodeWord.push(modifyLetterUpper);
	
		} 	
		else if ( ascCode >= 97 && ascCode <= 122 ) {
			let calculationLowerCase = (( ascCode - 97 - (offsetInput%26)) + 26) % 26 + 97 
			let modifyLetterLower = String.fromCharCode(calculationLowerCase);
			decodeWord.push(modifyLetterLower);
	
		}
		else {
			let allOthers = String.fromCharCode(ascCode);
			decodeWord.push(allOthers);
		}
	} 
	return decodeWord.join('')
}