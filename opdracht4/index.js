var arrayFactor = [1,2,3,4,5,6,7,8,9,10];
var arrayNum = [2,4,6,8];

function arraySum(){
    var sum = []
    for(i = 0; i < arrayNum.length; i++){
        for(x = 0; x < arrayFactor.length; x++){
            sum.push(arrayFactor[x]*arrayNum[i])
        }
    }
    return sum;
}   
document.write(arraySum())