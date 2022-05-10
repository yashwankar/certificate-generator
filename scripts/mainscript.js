let textCount = 1;
let imgCount = 1;

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
    let items = '';
    if(cls.startsWith('.')){
        items = document.querySelectorAll(`${cls} .perso-items select`);
        for(let i=0; i<items.length; i++){
            for(let j=0; j<fontNames.length; j++){
                let option = document.createElement("option");
                option.value = fontNames[j];
                option.text = fontNames[j];
                option.style.fontFamily = fontNames[j];
                items[i].appendChild(option);
            }
        }
    }else{
        items = document.getElementById(cls);
        for(let j=0; j<fontNames.length; j++){
            let option = document.createElement("option");
            option.value = fontNames[j];
            option.text = fontNames[j];
            option.style.fontFamily = fontNames[j];
            items.appendChild(option);
        }
    }
    
}


function persoStyle(a, b){
    let source = document.getElementById(a);
    let dest = document.getElementById(b);
    dest.style.position = 'absolute';
    dest.style.fontFamily = source.children[2].value;
    dest.style.color = source.children[4].value.toString();
    dest.style.fontSize = source.children[6].value+"px";
    dest.style.left = source.children[8].value+"px";
    dest.style.bottom = source.children[9].value+"px";
}

function persoImage(a, b){
    let source = document.getElementById(a);
    let dest = document.getElementById(b);
    dest.style.position = 'absolute';
    dest.style.height = source.children[1].value+"px";
    dest.style.width = source.children[3].value+"px";
    dest.style.borderRadius = source.children[5].value+"px";
    dest.style.left = source.children[7].value+"px";
    dest.style.bottom = source.children[8].value+"px";
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
function addTextListeners(){
    document.addEventListener("change", function(){
        for(let textNo=1; textNo < textCount; textNo++)
            persoStyle(`addText${textNo}`,`addTextToFrame${textNo}`);
        // console.log("added listener text successfully");
    });
}
    
async function getBase64(element) {
    var file = element.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
        console.log('RESULT', reader.result); //this is converted base64 data
        return reader.result;
    }
}

function addImageListeners(){
    console.log(imgCount, 'imgCount');
    for(let x=1; x<=imgCount; x++){
        document.getElementById(`ImgPath${x}`).addEventListener("change", function(event){
            document.getElementById(`frameImgPath${x}`).src = URL.createObjectURL(event.target.files[0]);
            // let path = getBase64(event);
            // console.log(path); //i need that reader.result here
            // document.getElementById(`frameImgPath${x}`).src = path;
        });
    }

    document.addEventListener("change", function(){
        for(let imgNo=1; imgNo < imgCount; imgNo++){
            persoImage(`addImg${imgNo}`,`frameImgPath${imgNo}`);
        }
        // console.log("added listener for img successfully");
    });
}

function additionalText(){
    console.log("working");
    let parent = document.querySelector('.additionalText');

    let element = document.createElement('div');

    let title = document.createElement('p');
    title.innerHTML = `Text-${textCount} :- `;
    title.className = 'perso-title';
    title.style.padding = '10px 20px 0 0';

    let inp = document.createElement('input');
    inp.type = 'text';
    inp.className = 'additional-text';
    inp.placeholder = 'Type text here...';

    element.appendChild(title);
    element.appendChild(inp);
    element.className = 'additional-elements';
    parent.appendChild(element);

    let choices = document.createElement('div');
    choices.className = 'perso-items';
    choices.id = `addText${textCount}`;

    let x = document.createElement('p');
    x.innerHTML = `Text-${textCount} :- `;
    x.className = "perso-title";
    choices.appendChild(x);

    x = document.createElement('p');
    x.innerHTML = "Font:";
    choices.appendChild(x);

    x = document.createElement('select');
    x.id = `addTextSelect${textCount}`;
    choices.appendChild(x);

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
    addFontSelectOptions(`addTextSelect${textCount}`);
    
    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.value = `Type here... (${textCount})`;
    newInput.id = `addTextToFrame${textCount}`;

    document.getElementById("certificate").appendChild(newInput); 
    addTextListeners();
    textCount++;
}

// var onFileSelected = function(event, fileId) {
//     console.log(fileId);
//     var image = document.getElementById(`frame${fileId}`);
//     image.src = URL.createObjectURL(event.target.files[0]);
// };

function additionalImage(){
    let parent = document.querySelector('.additionalImage');

    let element = document.createElement('div');
    element.className = 'additional-elements';

    let title = document.createElement('p');
    title.innerHTML = `Image-${imgCount} :- `;
    title.className = 'perso-title';
    title.style.padding = '10px 20px 0 0';

    let inp = document.createElement('input');
    inp.type = 'file';
    inp.style.paddingTop = '10px';
    inp.className = 'additional-image';
    inp.placeholder = 'Type text here...';
    inp.id = `ImgPath${imgCount}`;

    element.appendChild(title);
    element.appendChild(inp);
    parent.appendChild(element);
    
    element = document.createElement('div');
    element.className = 'additional-elements';
    element.id = `addImg${imgCount}`

    // height width border-radius position x y
    let x = document.createElement('p');
    x.innerHTML = "Height:";
    element.appendChild(x);

    x = document.createElement("input");
    x.type = 'number';
    x.min = 0;
    x.max = 1000;
    element.appendChild(x);

    x = document.createElement('p');
    x.innerHTML = "Width:";
    element.appendChild(x);

    x = document.createElement("input");
    x.type = 'number';
    x.min = 0;
    x.max = 1000;
    element.appendChild(x);

    x = document.createElement('p');
    x.innerHTML = "Border-Radius:";
    element.appendChild(x);

    x = document.createElement("input");
    x.type = 'number';
    x.min = 0;
    x.max = 1000;
    element.appendChild(x);

    x = document.createElement('p');
    x.innerHTML = "Position:";
    element.appendChild(x);

    x = document.createElement("input");
    x.type = 'number';
    x.min = 0;
    x.max = 1000;
    element.appendChild(x);

    x = document.createElement("input");
    x.type = 'number';
    x.min = 0;
    x.max = 1000;
    element.appendChild(x);

    parent.appendChild(element);

    let newImage = document.createElement('img');
    newImage.id = `frameImgPath${imgCount}`;
    newImage.style.width = '200px'
    // newImage.src = `imgPath${imgCount}`;

    document.getElementById("certificate").appendChild(newImage); 
    addImageListeners();
    imgCount++;
}

addFontSelectOptions(".personalize");
document.getElementById("addText").addEventListener("click", additionalText);
document.getElementById("addImage").addEventListener("click", additionalImage);