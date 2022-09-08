mergeArrays = (arrayA,arrayB)=>{
    let mergedArray = []
    while ((arrayA.length>0) && (arrayB.length>0)){
        if (arrayA[0] >= arrayB[0]){
            mergedArray.push(arrayB.shift())
        } else {
            mergedArray.push(arrayA.shift())
        }
        console.table(mergedArray)
    } 
    while ((arrayA.length>0)&&(arrayB.length == 0)){
        mergedArray.push(arrayA.shift())
    } 
    while ((arrayA.length ==0)&& (arrayB.length >0)){
        mergedArray.push(arrayB.shift())
    }
    console.log(mergedArray)
return mergedArray;
}

arraySplit= (array)=>{
        console.log(array.length)
        let arrayA = array.slice(0,array.length/2)
        console.log(arrayA)
        let arrayB = array.slice(array.length/2)
        console.log(arrayB)

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