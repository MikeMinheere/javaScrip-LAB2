
function arrayMultiply(){
    var arrayFactor = [1,2,3,4,5,6,7,8,9,10];
    var arrayNum = [2,4,6,8];

    const element = document.getElementById("body");

    for(x = 0; x < arrayNum.length; x++){

        const h1 = document.createElement("h1")
        const nodeH1 = document.createTextNode(`de Tafel van ${arrayNum[x]} is:`)
        h1.appendChild(nodeH1)
        element.appendChild(h1);

        for(i = 0; i < arrayFactor.length; i++){
            var multiplyStr = `${arrayFactor[i]} * ${arrayNum[x]} = ${arrayFactor[i]*arrayNum[x]}`;
            
            const para = document.createElement("p");
            const nodeP = document.createTextNode(multiplyStr);

            para.appendChild(nodeP);
            element.appendChild(para);
        }
    }
}   
arrayMultiply()