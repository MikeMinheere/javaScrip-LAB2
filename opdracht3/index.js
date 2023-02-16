var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function arraySum(){
    var sum = []
    for(i = 0; i < arrayEen.length; i++){
        sum.push(arrayEen[i]+arrayTwee[i])
        document.getElementById(`sumTxt${arrayEen[i]}`).innerHTML = `${arrayEen[i]} + ${arrayTwee[i]} = ${sum[i]}`
    }
}   

function arrayMinus(){
    var minus = []
    for(i = 0; i < arrayEen.length; i++){
        minus.push(arrayTwee[i]-arrayEen[i])
        document.getElementById(`minusTxt${arrayEen[i]}`).innerHTML = `${arrayTwee[i]} - ${arrayEen[i]} = ${minus[i]}`
    }
}   

function arrayDivision(){
    var divide = []
    for(i = 0; i < arrayEen.length; i++){
        divide.push(arrayTwee[i]/arrayEen[i])
        document.getElementById(`divideTxt${arrayEen[i]}`).innerHTML = `${arrayTwee[i]} / ${arrayEen[i]} = ${divide[i]}`
    }   
}   

function arrayMultiply(){
    var mulitply = []
    for(i = 0; i < arrayEen.length; i++){
        mulitply.push(arrayEen[i]*arrayTwee[i])
        document.getElementById(`multiplyTxt${arrayEen[i]}`).innerHTML = `${arrayEen[i]} * ${arrayTwee[i]} = ${mulitply[i]}`
    }
}   

arraySum()
arrayMinus()
arrayDivision()
arrayMultiply()