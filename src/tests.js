
if (encode('ZatC', 1) === 'AbuD') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'AbuD');
}

if (encode('Cesão', 1) === 'Dftãp') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'Dftãp');
}

if (encode('A R S W xyz', 1) === 'B S T X yza') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'B S T X yza');
}


if (decode('AbuD', 1) === 'ZatC') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'ZatC');
}

if (decode('Dftãp', 1) === 'Cesão') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'Cesão');
}

if (decode('B S T X yza', 1) === 'A R S W xyz') {
    console.log('Selo Cesão de Aprovação rapá!');
} else {
    console.log('deu erro' + 'A R S W xyz');
}