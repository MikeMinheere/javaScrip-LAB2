var pricing = {bakje: 0.75, hoorntje: 1.25, bolletje: 0.95};
var flavours = ['vanille', 'chocola', 'aardbei', 'yoghurt'];


function amountOfIce(){
    var isNum = false;
    while(isNum == false){
        icePrompt = prompt('hoevbeel bolletjes wil je? ');
        if(/^\[1-7]+$/.test(icePrompt) == false){
            if(icePrompt < 1 || icePrompt > 7){
                alert('je kan alleen nummers tussen 1 en 7 invullen!');
            }
            else {
                for(x = 1; x <= icePrompt; x++){
                    flavour()
                }
                isNum = true; 
            }
        }
    }
}

function flavour(){
    correctInput = false;
    while(correctInput == false){
        flavourPrompt = prompt(`welke smaak wil je voor bolletje ${x+1}? je kunt kiezen uit: ${flavours}.`);
        for(i = 0; i <= flavours.length; i++){
            if (flavourPrompt == flavours[i]){
                correctInput = true;
            }
        }
        if (correctInput == false){
            alert('voer een van de geldige smaken in.');
        }
    }
}

function bakOrHoorn(){
    correctInput = false;
    while(correctInput == false){
        bakOrHoornPrompt = prompt('wil je een bakje of hoorntje?');
        if(bakOrHoornPrompt == 'bakje' || bakOrHoornPrompt == 'hoorntje'){
            correctInput = true;
        }
        else alert('voer een geldige input in.');
    }
}

amountOfIce();
bakOrHoorn();

document.getElementById('bestelling').innerHTML = `je hebt ${icePrompt} bolletjes ${flavourPrompt} in een ${bakOrHoornPrompt}.`;