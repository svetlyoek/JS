function calculate(firstNumber,secondNumber,operator){
    let sum;
    switch(operator){
        case'+':sum=firstNumber+secondNumber;
        break;
        case'-':sum=firstNumber-secondNumber;
        break;
        case'*':sum=firstNumber*secondNumber;
        break;
        case'/':sum=firstNumber/secondNumber;
        break;
        case'%':sum=firstNumber%secondNumber;
        break;
        case'**':sum=firstNumber**secondNumber;
        break;
    }
    console.log(sum);
}