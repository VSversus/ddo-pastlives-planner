"use strict";

function exportList() {
    let csvContent = "data:text/csv;charset=utf-8,";
    let selectionsArray = document.getElementsByClassName('reincarnationSelect')
    for (let i = 0; i < selectionsArray.length; i++) {
        let nameOfClass = selectionsArray[i].selectedOptions[0].label;
        csvContent += i+1 + ';' + nameOfClass + "\r\n";
    };
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}

function importList() {
    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        document.getElementById('reincarnation' + i).value = nameOfClass;
    }
    changeSelectColorForDefaultValue();
}