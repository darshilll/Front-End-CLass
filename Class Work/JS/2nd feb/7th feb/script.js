const firstNumber = prompt("Enter the first number: ");
const secondNumber = prompt("Enter the second number: ");
const thirdNumber = prompt("Enter the third number: ");

if((firstNumber > secondNumber && firstNumber < thirdNumber) || (firstNumber > thirdNumber && firstNumber < secondNumber )){
    console.log(firstNumber);

}
else if((secondNumber > firstNumber && secondNumber < thirdNumber) || (secondNumber > thirdNumber && secondNumber < firstNumber)){
    console.log(secondNumber);

}
else{
    console.log(thirdNumber);
}