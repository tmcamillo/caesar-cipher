const testFirst = (encode, provideTest) => {
  if (provideTest === encode) {
    console.log("Tudo Ok!");
  } else {
    console.log("Atenção! Deu erro!");
  }
};

testFirst(encode("ZatC", 1, "encode"), "AbuD");
testFirst(encode("Cesão", 1, "encode"), "Dftãp");
testFirst(encode("A R S W xyz", 1, "encode"), "B S T X yza");
testFirst(encode("AbuD", -54, "encode"), "YzsB");
testFirst(encode("Cesão", -92, "encode"), "Oqeãa");
testFirst(encode("A R S W xyz", -133, "encode"), "X O P T uvw");
testFirst(encode("AbuD", -1, "encode"), "ZatC");
testFirst(encode("Cesão", -1, "encode"), "Bdrãn");
testFirst(encode("A R S W xyz", -1, "encode"), "Z Q R V wxy");

const testSec = (decode, provideTest) => {
  if (provideTest === decode) {
    console.log("Tudo Ok!");
  } else {
    console.log("Atenção! Deu erro!");
  }
};

testSec(decode("B S T X yza", 1, "decode"), "A R S W xyz");
testSec(decode("AbuD", 1, "decode"), "ZatC");
testSec(decode("Dftãp", 1, "decode"), "Cesão");
testSec(decode("ZatC", -1, "decode"), "AbuD");
testSec(decode("Bdrãn", -1, "decode"), "Cesão");
testSec(decode("Z Q R V wxy", -1, "decode"), "A R S W xyz");
testSec(decode("YzsB", -54, "decode"), "AbuD");
testSec(decode("X O P T uvw", -133, "decode"), "A R S W xyz");

document.getElementById("resultEncode").style.display = "none";
document.getElementById("resultDecode").style.display = "none";
document.getElementById("clearBtn").style.display = "none";
