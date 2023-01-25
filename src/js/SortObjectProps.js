export function sortObjectProps(object, array){
    let result = new Array();

    for (var index in array){
        result.push({key: array[index], value: object[array[index]]});
        delete object[array[index]];
    }

    let arrSort = Object.keys(object).sort();
    for (var o in arrSort){
        result.push({key: arrSort[o], value: object[arrSort[o]]});
    }

    return result;
}


