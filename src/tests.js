if (encode("ZatC", 1, "encode") === "AbuD") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "AbuD");
}

if (encode("Cesão", 1, "encode") === "Dftãp") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Dftãp");
}

if (encode("A R S W xyz", 1, "encode") === "B S T X yza") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "B S T X yza");
}

if (decode("AbuD", 1, "decode") === "ZatC") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "ZatC");
}

if (decode("Dftãp", 1, "decode") === "Cesão") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Cesão");
}

if (decode("B S T X yza", 1, "decode") === "A R S W xyz") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "A R S W xyz");
}

if (encode("AbuD", -1, "encode") === "ZatC") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "ZatC");
}

if (encode("Cesão", -1, "encode") === "Bdrãn") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Bdrãn");
}

if (encode("A R S W xyz", -1, "encode") === "Z Q R V wxy") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Z Q R V wxy");
}

if (decode("ZatC", -1, "decode") === "AbuD") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "AbuD");
}
if (decode("Bdrãn", -1, "decode") === "Cesão") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Cesão");
}
if (decode("Z Q R V wxy", -1, "decode") === "A R S W xyz") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "A R S W xyz");
}

if (encode("AbuD", -54, "encode") === "YzsB") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "YzsB");
}
if (encode("Cesão", -92, "encode") === "Oqeãa") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Oqeãa");
}
if (encode("A R S W xyz", -133, "encode") === "X O P T uvw") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "X O P T uvw");
}

if (decode("YzsB", -54, "decode") === "AbuD") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "YzsB");
}
if (decode("Oqeãa", -92, "decode") === "Cesão") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Oqeãa");
}
if (decode("X O P T uvw", -133, "decode") === "A R S W xyz") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "X O P T uvw");
}

document.getElementById("resultEncode").style.display = "none";
document.getElementById("resultDecode").style.display = "none";
