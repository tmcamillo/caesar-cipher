if (encode("ZatC", 1) === "AbuD") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "AbuD");
}

if (encode("Cesão", 1) === "Dftãp") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Dftãp");
}

if (encode("A R S W xyz", 1) === "B S T X yza") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "B S T X yza");
}

if (decode("AbuD", 1) === "ZatC") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "ZatC");
}

if (decode("Dftãp", 1) === "Cesão") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Cesão");
}

if (decode("B S T X yza", 1) === "A R S W xyz") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "A R S W xyz");
}

if (encode("AbuD", -1) === "ZatC") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "ZatC");
}

if (encode("Cesão", -1) === "Bdrãn") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Bdrãn");
}

if (encode("A R S W xyz", -1) === "Z Q R V wxy") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Z Q R V wxy");
}

if (decode("ZatC", -1) === "AbuD") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "AbuD");
}
if (decode("Bdrãn", -1) === "Cesão") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Cesão");
}
if (decode("Z Q R V wxy", -1) === "A R S W xyz") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "A R S W xyz");
}

if (encode("AbuD", -54) === "YzsB") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "YzsB");
}
if (encode("Cesão", -92) === "Oqeãa") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Oqeãa");
}
if (encode("A R S W xyz", -133) === "X O P T uvw") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "X O P T uvw");
}

if (decode("YzsB", -54) === "AbuD") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "YzsB");
}
if (decode("Oqeãa", -92) === "Cesão") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "Oqeãa");
}
if (decode("X O P T uvw", -133) === "A R S W xyz") {
  console.log("Tudo Ok!");
} else {
  console.log("deu erro" + "X O P T uvw");
}
