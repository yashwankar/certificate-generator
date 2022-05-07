

function changeCertBg(no){
    let frame = document.querySelector('.frame');
    frame.style.background=`url('./assets/formats/${no}.png')`;
    frame.style.backgroundRepeat="no-repeat";
    frame.style.backgroundSize="cover";
}

function addFontSelectOptions(cls){
    let fontNames = [
        'Alex Blush',
        'Ballet', 
        'BhuTuka Expanded One', 
        'Chela One', 
        'Combo', 
        'Comfortaa', 
        'Consolas',
        'Dancing Script', 
        'Gloria Hallelujah', 
        'Great Vibes', 
        'Henny Penny', 
        'Kaushan Script', 
        'Luckiest Guy',
        'Lucida Console MS', 
        'My Soul', 
        'Oleo Script Swash Caps', 
        'Pacifico', 
        'Parisienne', 
        'Poiret One', 
        'Rubik Puddles', 
        'Sacramento', 
        'sans-serif',
        'Satisfy', 
        'Shadows Into Light', 
        'Vampiro One', 
        'Yellowtail'
    ];

    let items = document.querySelectorAll(`${cls} .perso-items select`);
    for(let i=0; i<items.length; i++){
        for(let j=0; j<fontNames.length; j++){
            let option = document.createElement("option");
            option.value = fontNames[j];
            option.text = fontNames[j];
            option.style.fontFamily = fontNames[j];
            items[i].appendChild(option);
        }
    }
}


function persoStyle(a, b){
    let source = document.getElementById(a);
    let dest = "";
    if(b == 'p'){
        dest = document.createElement('p');
    }else if(b == 'img'){
        dest = document.createElement('img');
    }else{
        dest = document.getElementById(b);
    }
    dest.style.position = 'absolute';
    dest.style.fontFamily = source.children[2].value;
    dest.style.color = source.children[4].value.toString();
    dest.style.fontSize = source.children[6].value+"px";
    dest.style.left = source.children[8].value+"px";
    dest.style.bottom = source.children[9].value+"px";
}


function expandProcedureItems(index){
    items = document.querySelector('.left-bar').children;
    for(let i=0; i<4; i++){
        if(i==index){
            items[i].style.visibility = "visible";
        }
        else{
            items[i].style.visibility = "hidden";
        }
    }
}

function certInit(index){
    
}


let textCount = 1;
function additionalText(){
    console.log("working");
    let parent = document.querySelector('.additionalText');

    let element = document.createElement('div');
    let inp = document.createElement('input');
    inp.type = 'text';
    inp.className = 'additional-text';
    inp.placeholder = 'Type text here...';

    element.appendChild(inp);
    parent.appendChild(element);

    let choices = document.createElement('div');
    choices.className = 'perso-items';
    choices.id = `addText${textCount}`;

    let title = document.createElement('p');
    title.innerHTML = `Text-${textCount} :- `;
    title.className = 'perso-title';
    choices.appendChild(title);

    let x = document.createElement('p');
    x.innerHTML = "Font:";
    choices.appendChild(x);

    choices.appendChild(document.createElement('select'));

    x = document.createElement('p');
    x.innerHTML = "Color:";
    choices.appendChild(x);

    x = document.createElement('input');
    x.type = "color";
    choices.appendChild(x);

    x = document.createElement('p');
    x.innerHTML = "Size:";
    choices.appendChild(x);

    x = document.createElement('input');
    x.type = "number";
    x.min = "1";
    x.max = "500";
    choices.appendChild(x);

    x = document.createElement('p');
    x.innerHTML = "Position:";
    choices.appendChild(x);

    x = document.createElement('input');
    x.type = "number";
    x.min = "0";
    x.max = "1000";
    choices.appendChild(x);

    x = document.createElement('input');
    x.type = "number";
    x.min = "0";
    x.max = "1000";
    choices.appendChild(x);

    parent.appendChild(choices);
    textCount++;
    addFontSelectOptions(".preview");
}
function additionalImage(){

}

addFontSelectOptions(".personalize");
document.getElementById("addText").addEventListener("click", additionalText);
document.getElementById("addImage").addEventListener("click", additionalImage);