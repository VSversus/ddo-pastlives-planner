"use strict";

function exportList() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += 'Number,Name\r\n';
    let selectionsArray = document.getElementsByClassName('reincarnationSelect')
    for (let i = 0; i < selectionsArray.length; i++) {
        let nameOfClass = selectionsArray[i].selectedOptions[0].label;
        csvContent += i+1 + ',' + nameOfClass + "\r\n";
    };
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}

function createEventListenerForImport() {
    const fileSelector = document.getElementById('fileSelector');
    fileSelector.addEventListener('change', () => {
        const [file] = fileSelector.files;
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            // this will then display a text file
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
            continue
        }
    }
    saveReincarnatedClasses();
    calculateReincarnations();
    printFeatsCalculation();
    checkMaximumNumberOfReincarnationsForOneClass();
    changeSelectColorForDefaultValue();
}

createEventListenerForImport();