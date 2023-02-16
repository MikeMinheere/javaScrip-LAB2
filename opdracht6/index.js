var numInput = prompt('please put in a number:');
var numArray = [];

for(i = 0; i <= numInput; i++){
    numArray.push(i);

}

for(i = numInput; i >= 0; i--){

    const element = document.getElementById("body");
    const para = document.createElement("p");
    const node = document.createTextNode(numArray.slice(0, i+1));

    para.appendChild(node);
    element.appendChild(para);
}
