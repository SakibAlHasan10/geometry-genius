function targetFiled(target){
    const firstValue = target.parentNode.childNodes[1].childNodes[1].value;
    const secondValue = target.parentNode.childNodes[1].childNodes[5].value;
    const textArea = target.parentNode.childNodes[1].childNodes[9].childNodes[1];
    const AllSum = rectangle(firstValue, secondValue)
    textArea.innerText =  AllSum.toFixed(2);
}


function rectangle(firstValue, secondValue){
    const sum = 0.5 * parseFloat(firstValue) * parseFloat(secondValue)
    return sum;
}

