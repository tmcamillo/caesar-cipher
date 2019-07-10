let validateInput = (originalWord, offsetInput) => {
  if (!originalWord || !offsetInput) {
    alert("OPS! Preencha todos os campo para continuar");
    return false;
  }
  return true;
};

let callFunction = type_button => {
  let originalWord = document.getElementById("word").value;
  let offsetInput = parseInt(document.getElementById("offset").value);

  if (validateInput(originalWord, offsetInput)) {
    if (type_button === "encode") {
      encode(originalWord, offsetInput, type_button);
    } else if (type_button === "decode") {
      decode(originalWord, offsetInput, type_button);
    }
  }
};

let displayResult = (result, type_button) => {
  let id_show = "";
  let id_hide = "";
  let message = "";

  if (type_button === "encode") {
    id_show = "resultEncode";
    id_hide = "resultDecode";
    message = "Mensagem Cifrada: <br>";
  } else if (type_button === "decode") {
    id_show = "resultDecode";
    id_hide = "resultEncode";
    message = "Mensagem Decifrada: <br>";
  }

  document.getElementById(id_show).innerHTML = message + result;
  document.getElementById(id_show).style.display = "block";
  document.getElementById(id_hide).style.display = "none";
  document.getElementById("clearBtn").style.display = "block";
  colorBtn(type_button);
};

let encode = (originalWord, offsetInput, type_button) => {
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
  displayResult(encodeWord.join(""), type_button);
  return encodeWord.join("");
};

let decode = (originalWord, offsetInput, type_button) => {
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
  displayResult(decodeWord.join(""), type_button);
  return decodeWord.join("");
};

let clearForm = () => {
  document.getElementById("word").value = "";
  document.getElementById("offset").value = "";
  document.getElementById("resultEncode").style.display = "none";
  document.getElementById("resultDecode").style.display = "none";
  document.getElementById("clearBtn").style.display = "none";
};

let colorBtn = type_button => {
  let elem = document.getElementById("clearBtn");
  if (type_button === "encode") {
    elem.className += " clear-btn-pink";
  } else if (type_button === "decode") {
    elem.className += " clear-btn-orange";
  }
};
