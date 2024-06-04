let option = prompt("Enter option(add, sub, mult, div):", 'add');
let firstNum = +prompt("First number:", 1);
let secondNum = +prompt("Second number:", 1);
let result;
switch(option){
    case "add":
        result = firstNum+secondNum;
        document.write(`${firstNum} + ${secondNum} = ${result}`)
        break;
    case "sub":
        result = firstNum - secondNum;
        document.write(`${firstNum} - ${secondNum} = ${result}`)
        break;
    case "mult":
        result = firstNum * secondNum;
        document.write(`${firstNum} * ${secondNum} = ${result}`)
        break;
    case "div":
        result = firstNum / secondNum;
        document.write(`${firstNum} / ${secondNum} = ${result}`)
        break;
    default:
        document.write("incorrect option");
        break;
}
