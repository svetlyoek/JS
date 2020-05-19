function calculate(argument){
    let area=0;

    if(typeof(argument)=='number'){

     area=Math.pow(argument,2)*Math.PI;

     console.log(area.toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(argument)}.`)
    }
}
