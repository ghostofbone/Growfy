"use strict"


document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;
    document.body.classList.toggle('_lock');

    if(targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open')
    }
}

    // let numberOne = prompt("Вкажіть перше число");
    // let numberTwo = prompt("Вкажіть друге число");
    // let action = prompt("Вкажіть дію з числами");

    // let a = Number(numberOne);
    // let b = Number(numberTwo);
    

// function calculator() {
//     if (action === "+" ) {
//         return a + b;
//     }
//     else if(action === "-" ) {
//         return a - b;
//     }
//     else if(action === '*' || 'множення') {
//         return a * b;
//     }
//     else if(action === '/' || 'ділення') {
//         return a / b;
//     }
//     else if(action === '**' || 'степінь') {
//         return a ** b;
//     }
//     else {
//        return action;
//     }

// }
// let result = calculator();
// alert(result);
// console.log(result);
