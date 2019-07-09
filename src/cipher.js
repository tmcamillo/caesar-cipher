function inputWord(type_button) {
  let originalWord = document.getElementById("word").value;

  let offsetInput = document.getElementById("offset").value;
  offsetInput = parseInt(offsetInput);

  if (!originalWord || !offsetInput) {
    alert("OPS! Preencha todos os campo para continuar");
    return;
  }

  if (type_button === "encode") {
    document.getElementById("resultEncode").innerHTML =
      "Mensagem Cifrada: <br>" + encode(originalWord, offsetInput);
    document.getElementById("resultEncode").style.display = "block";
    document.getElementById("resultDecode").style.display = "none";
  } else if (type_button === "decode") {
    document.getElementById("resultDecode").innerHTML =
      "Mensagem Decifrada: <br>" + decode(originalWord, offsetInput);
    document.getElementById("resultDecode").style.display = "block";
    document.getElementById("resultEncode").style.display = "none";
  }
}

function encode(originalWord, offsetInput) {
  let encodeWord = [];

  for (let i in originalWord) {
    let ascCode = originalWord.charCodeAt(i);

    while (offsetInput < 0) {
      offsetInput += 26;
    }

    if (ascCode >= 65 && ascCode <= 90) {
      let calculationUpperCase = ((ascCode - 65 + offsetInput) % 26) + 65;
      let modifyLetterUpper = String.fromCharCode(calculationUpperCase);
      encodeWord.push(modifyLetterUpper);
    } else if (ascCode >= 97 && ascCode <= 122) {
      let calculationLowerCase = ((ascCode - 97 + offsetInput) % 26) + 97;
      let modifyLetterLower = String.fromCharCode(calculationLowerCase);
      encodeWord.push(modifyLetterLower);
    } else {
      let allOthers = String.fromCharCode(ascCode);
      encodeWord.push(allOthers);
    }
  }
  return encodeWord.join("");
}

function decode(originalWord, offsetInput) {
  let decodeWord = [];

  for (let i in originalWord) {
    let ascCode = originalWord.charCodeAt(i);

    while (offsetInput < 0) {
      offsetInput += 26;
    }

    if (ascCode >= 65 && ascCode <= 90) {
      let calculationUpperCase = ((ascCode - 90 - offsetInput) % 26) + 90;
      let modifyLetterUpper = String.fromCharCode(calculationUpperCase);
      decodeWord.push(modifyLetterUpper);
    } else if (ascCode >= 97 && ascCode <= 122) {
      let calculationLowerCase = ((ascCode - 122 - offsetInput) % 26) + 122;
      let modifyLetterLower = String.fromCharCode(calculationLowerCase);
      decodeWord.push(modifyLetterLower);
    } else {
      let allOthers = String.fromCharCode(ascCode);
      decodeWord.push(allOthers);
    }
  }
  return decodeWord.join("");
}
