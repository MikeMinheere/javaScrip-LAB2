var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function arraySum(){
    var sum = []
    for(i = 0; i < arrayEen.length; i++){
        sum.push(arrayEen[i]+arrayTwee[i])
    }
    return sum;
}   

function arrayMinus(){
    var sum = []
    for(i = 0; i < arrayEen.length; i++){
        sum.push(arrayTwee[i]-arrayEen[i])
    }
    return sum;
}   

function arrayDivision(){
    var sum = []
    for(i = 0; i < arrayEen.length; i++){
        sum.push(arrayTwee[i]/arrayEen[i])
    }
    return sum;
}   

function arrayMultiply(){
    var sum = []
    for(i = 0; i < arrayEen.length; i++){
        sum.push(arrayEen[i]*arrayTwee[i])
    }
    return sum;
}   
document.getElementById(arraySumTxt).innerHTML = arraySum();