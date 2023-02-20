var pricing = {'bakje': 0.75, 'hoorntje': 1.25, 'bolletje': 0.95};
var flavours = ['vanille', 'chocola', 'aardbei', 'yoghurt'];
var toppings = ['sprinkles', 'chocoladesaus', 'slagroom', 'caramelsaus', 'geen']


function amountOfIce(){
    var isNum = false;
    while(isNum == false){
        icePrompt = prompt('hoevbeel bolletjes wil je? ');
        if(/^\[1-7]+$/.test(icePrompt) == false){
            if(icePrompt < 1 || icePrompt > 7){
                alert('je kan alleen nummers tussen 1 en 7 invullen!');
            }
            else {
                for(x = 0; x < icePrompt; x++){
                    flavour();
                }
                isNum = true; 
            }
        }
    }
}

function flavour(){
    selectedFlavours = [];
    correctInput = false;
    while(correctInput == false){
        flavourPrompt = prompt(`welke smaak wil je voor bolletje ${x+1}? je kunt kiezen uit: ${flavours}.`);
        for(i = 0; i <= flavours.length; i++){
            if (flavourPrompt == flavours[i]){
                correctInput = true;
                selectedFlavours.push(flavourPrompt);
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

function topping(){
    toppingPrompt = prompt(`wat voor topping wil je? je kunt kiezen uit: ${toppings}.`);
    for(i = 0; i <= toppings.length; i++){
        if (toppingPrompt == toppings[i]){
            correctInput = true;
            selectedTopping = toppings[i];
        }
    }
    if (correctInput == false){
        alert('voer een van de geldige smaken in.');
    }
}

function receipt(){
    document.getElementById("numBolletjes").innerHTML = `totaal aantal bolletjes: ${icePrompt} x €${pricing['bolletje']} = €${(pricing['bolletje']*icePrompt).toFixed(2)}`;
    if(bakOrHoornPrompt == 'bakje'){
        document.getElementById("bakOrHorn").innerHTML = `1 bakje: ${bakOrHoornPrompt} x €${pricing['bakje']} = €${pricing['bakje']}`;
        var totalPrice = (pricing['bolletje']*icePrompt)+pricing['bakje']
    }
    else {
        document.getElementById("bakOrHorn").innerHTML = `1 hoorntje: ${bakOrHoornPrompt} x €${pricing['hoorntje']} = €${pricing['hoorntje']}`;
        var totalPrice = (pricing['bolletje']*icePrompt)+pricing['bakje']
    }
    document.getElementById('totaal').innerHTML = `totaal: €${totalPrice.toFixed(2)}`
}
amountOfIce();
bakOrHoorn();
topping();
receipt();