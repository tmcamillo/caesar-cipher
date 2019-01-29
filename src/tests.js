
if (encode(1, 'ZatC') === 'AbuD') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'AbuD');
}

if (encode(1, 'Cesão') === 'Dftãp') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'Dftãp');
}

if (encode(1, 'A R S W xyz') === 'B S T X yza') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'B S T X yza');
}


if (decode(1, 'AbuD') === 'ZatC') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'ZatC');
}

if (decode(1, 'Dftãp') === 'Cesão') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'Cesão');
}

if (decode(1, 'B S T X yza') === 'A R S W xyz') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'A R S W xyz');
}