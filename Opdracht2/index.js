var nameArray = [];
var nameArrayReverse = [];
document.getElementById("add").onclick = function(){
    nameArray.push(document.getElementById("name").value);
    nameArrayReverse.push(document.getElementById("name").value);
}

document.getElementById("submit").onclick = function(){
    if(nameArray.length >= 3){
        document.getElementById("names").innerHTML = nameArray;
        document.getElementById("namesReverse").innerHTML = nameArrayReverse.reverse();
    }
    else{
        document.getElementById("names").innerHTML = "Je moet minimaal 3 namen typen";
        document.getElementById("namesReverse").innerHTML = "Je moet minimaal 3 namen typen";
    }
}





