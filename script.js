mergeArrays = (arrayA,arrayB)=>{
    let mergedArray = []
    while ((arrayA.length>0) && (arrayB.length>0)){
        if (arrayA[0] >= arrayB[0]){
            mergedArray.push(arrayB.shift())
        } else {
            mergedArray.push(arrayA.shift())
        }
    } 
    while ((arrayA.length>0)&&(arrayB.length == 0)){
        mergedArray.push(arrayA.shift())
    } 
    while ((arrayA.length ==0)&& (arrayB.length >0)){
        mergedArray.push(arrayB.shift())
    }
return mergedArray;
}

arraySplit= (array)=>{
        let arrayA = array.slice(0,array.length/2)
        let arrayB = array.slice(array.length/2)
    return [arrayA,arrayB];
}


mergeSort=(array)=>{
    //recursive case
    if (array.length >1){
        let [arrayA,arrayB] = arraySplit(array);
        let newArray = mergeArrays(mergeSort(arrayA),mergeSort(arrayB))
        return newArray;
    }
    //base case
    return array;
}