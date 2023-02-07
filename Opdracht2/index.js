var nameArray = [];
document.getElementById("add").onclick = function(){
    nameArray.push(document.getElementById("name").value);
}

document.getElementById("submit").onclick = function(){
    if(nameArray.length >= 3){
        document.getElementById("names").innerHTML = nameArray;
    }
    else{
        document.getElementById("names").innerHTML = "Je moet minimaal 3 namen typen";
    }
}





