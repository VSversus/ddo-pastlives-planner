'use strict';

function exportList() {
    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'Number,Name\r\n';
    let selectionsArray = document.getElementsByClassName('reincarnationSelect')
    for (let i = 0; i < selectionsArray.length; i++) {
        let nameOfClass = selectionsArray[i].selectedOptions[0].label;
        csvContent += i+1 + ',' + nameOfClass + '\r\n';
    };
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}

function createEventListenerForImport() {
    const fileSelector = document.getElementById('fileSelector');
    fileSelector.addEventListener('change', () => {
        const [file] = fileSelector.files;
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            const importArray = d3.csvParse(reader.result);
            importList(importArray);
        }, false);

        if (file) {
          reader.readAsText(file);
        }
    });
}

function importList(importArray) {
    for (let i = 0; i < importArray.length; i++) {
        if (importArray[i].Name != '-') {
            document.getElementById('reincarnation' + importArray[i].Number).value = importArray[i].Name;
        } else {
            document.getElementById('reincarnation' + importArray[i].Number).value = 'defaultClassOption';
        }
    }
    saveReincarnatedClasses();
    calculateReincarnations();
    printFeatsCalculation();
    checkMaximumNumberOfReincarnationsForOneClass();
    changeSelectColorForDefaultValue();
}

function setEmpty() {
    let emptyArray = makeArrayFromObject(empty);
    importList(emptyArray);
    enableAllOptions();
}

function setHeroicCompletionist() {
    setEmpty();
    let heroicCompletionistArray = makeArrayFromObject(heroicCompletionist);
    importList(heroicCompletionistArray);
}

function setRacialCompletionist() {
    setEmpty();
    let racialCompletionistArray = makeArrayFromObject(racialCompletionist);
    importList(racialCompletionistArray);
}

function setTotalCompletionist() {
    setEmpty();
    let totalCompletionistArray = makeArrayFromObject(totalCompletionist);
    importList(totalCompletionistArray);
}

function makeArrayFromObject(object) {
    let array = [];
    let count = Object.keys(object).length;
    let objectKeys = Object.keys(object);
    let objectValues = Object.values(object);

    for (let index = 0; index < count; index++) {
        let element = {};
        element.Number = objectKeys[index]
        element.Name = objectValues[index]
        array.push(element);
    }
    return array
}

createEventListenerForImport();