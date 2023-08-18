function targetButton(target) {
    const firstValue = target.parentNode.childNodes[1].childNodes[1].value;
    const secondValue = target.parentNode.childNodes[1].childNodes[5].value;
    if (isNaN(firstValue) || isNaN(secondValue)) {
        alert('please enter an a number');
        return;
    }
    const sum = 0.5 * parseFloat(firstValue) * parseFloat(secondValue);
    const textFiled = target.parentNode.childNodes[1].childNodes[9].childNodes[1];
    addSum(textFiled, sum);
    areaCalculation(sum, target);
}
function targetButton2(target) {
    const firstValue = target.parentNode.childNodes[1].childNodes[1].value;
    const secondValue = target.parentNode.childNodes[1].childNodes[5].value;
    if (isNaN(firstValue) || isNaN(secondValue)) {
        alert('please enter an a number');
        return;
    }
    const sum = parseFloat(firstValue) * parseFloat(secondValue);
    const textFiled = target.parentNode.childNodes[1].childNodes[9].childNodes[1];
    addSum(textFiled, sum);
    areaCalculation(sum, target);
}
function targetButton3(target) {
    const firstValue = target.parentNode.childNodes[1].childNodes[1].value;
    const secondValue = target.parentNode.childNodes[1].childNodes[5].value;
    if (isNaN(firstValue) || isNaN(secondValue)) {
        alert('please enter an a number');
        return;
    }
    const sum = 3.141 * parseFloat(firstValue) * parseFloat(secondValue);
    const textFiled = target.parentNode.childNodes[1].childNodes[9].childNodes[1];
    addSum(textFiled, sum);
    areaCalculation(sum.toFixed(2), target);
}
function addSum(addFiled, addValue) {
    addFiled.innerText = addValue.toFixed(2);
}

function areaCalculation(addCard, target){
    const areaDiv = document.getElementById('area-calculation');
    const CardTitle = target.parentNode.parentNode.parentNode.childNodes[1];
    const CardTitleInnerText = CardTitle.innerText;
    const count = areaDiv.childElementCount;
    const p = document.createElement('p');
    p.innerHTML=`
    ${count+1}. ${CardTitleInnerText}  ${addCard} cm<sup>2</sup> <button class='btn bg-red-600 text-white text-xs my-2 ml-2 hover:bg-slate-400 justify-end'>Convert</button>

    `
    areaDiv.appendChild(p);
    console.log(CardTitle)

}


// function addCalculatorArea(target) {
//     const allButton = document.querySelector('.btn');
//     const textAreaAll = document.getElementById('text-area-ol');
//     const element = document.createElement('tr');
//     textAreaAll.appendChild(element);
//     const createElements = element.innerHTML = `
//     <td class="card-title-set"></td>
//     <td class="table-data"></td>
//     <td class="table-sum"></td>
//     `;

//     const cardTitle = target.parentNode.parentNode.parentNode.childNodes[1].textContent;
//     const cardTitleAddClass = document.querySelectorAll('.card-title-set');
//     cardTitleAddClass.innerText = cardTitle;
//     const cardSum = target.parentNode.childNodes[1].childNodes[9].childNodes[1].innerText;
//     const addCardSum = document.querySelectorAll('.table-data');
//     space(addCardSum)
//     function space(w) {
//         let spa = w.style.display.marginLeft = '10px';
//         console.log(spa)

//     }
//     const cardSumM = target.parentNode.childNodes[1].childNodes[9].childNodes[3].innerText;
//     addCardSum.innerText = cardSum;
//     const addCardSumM = document.querySelector('.table-sum');
//     addCardSumM.innerText = cardSumM;

// }