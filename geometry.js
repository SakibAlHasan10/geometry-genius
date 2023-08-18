function targetButton(target){
    const firstValue = target.parentNode.childNodes[1].childNodes[1].value;
    const secondValue = target.parentNode.childNodes[1].childNodes[5].value;
    const sum = 0.5 * firstValue * secondValue;
    const textFiled = target.parentNode.childNodes[1].childNodes[9].childNodes[1];
    addSum(textFiled, sum)
    // console.log(firstValue, secondValue, sum, textFiled)
}
function targetButton2(target){
    const firstValue = target.parentNode.childNodes[1].childNodes[1].value;
    const secondValue = target.parentNode.childNodes[1].childNodes[5].value;
    const sum = firstValue * secondValue;
    const textFiled = target.parentNode.childNodes[1].childNodes[9].childNodes[1];
    addSum(textFiled, sum)
    // console.log(firstValue, secondValue, sum, textFiled)
}
function targetButton3(target){
    const firstValue = target.parentNode.childNodes[1].childNodes[1].value;
    const secondValue = target.parentNode.childNodes[1].childNodes[5].value;
    const sum = 3.141 * firstValue * secondValue;
    const textFiled = target.parentNode.childNodes[1].childNodes[9].childNodes[1];
    addSum(textFiled, sum)
    // console.log(firstValue, secondValue, sum, textFiled)
}

function addSum(addFiled, addValue){
    addFiled.innerText = addValue;
}