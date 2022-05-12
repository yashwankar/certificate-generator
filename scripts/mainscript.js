let textCount = 1;
let imgCount = 1;

function changeCertBg(no){
    let frame = document.querySelector('.frame');
    frame.style.background=`url('./assets/layouts/${no}.png')`;
    frame.style.backgroundRepeat="no-repeat";
    frame.style.backgroundSize="cover";
    document.getElementById("certificate").style.visibility = 'visible';
    certInit(no);
}

function addFontSelectOptions(cls){
    let fontNames = [
        'Arial',
        'Akronim', 
        'Alex Brush', 
        'Averia Serif Libre', 
        'Babylonica', 
        'Ballet', 
        'Bangers', 
        'BhuTuka Expanded One', 
        'Bradley Hand ITC',
        'Caveat Brush', 
        'Chela One', 
        'Cherish', 
        'Cinzel Decorative', 
        'Combo', 
        'Comfortaa', 
        'Comic Sans MS',
        'Consolas',
        'Dancing Script', 
        'Dawning of a New Day', 
        'Gloria Hallelujah', 
        'Great Vibes', 
        'Henny Penny', 
        'Kalam', 
        'Kaushan Script', 
        'Langar', 
        'Leckerli One', 
        'Lobster', 
        'Lucida Console',
        'Luckiest Guy', 
        'Meddon', 
        'Mogra', 
        'Monoton', 
        'Mountains of Christmas', 
        'My Soul', 
        'Mystery Quest', 
        'Nova Script', 
        'Oleo Script Swash Caps', 
        'Oooh Baby', 
        'Oregano', 
        'Pacifico', 
        'Parisienne', 
        'Playball', 
        'Poiret One', 
        'Press Start 2P', 
        'Rock Salt', 
        'Rubik Microbe', 
        'Rubik Moonrocks', 
        'Rubik Puddles', 
        'Sacramento', 
        'Satisfy', 
        'Send Flowers', 
        'Shadows Into Light', 
        'Shizuru', 
        'Special Elite', 
        'Square Peg', 
        'Supermercado One', 
        'Syne Tactile', 
        'Times New Roman',
        'UnifrakturCook', 
        'Updock', 
        'Vampiro One', 
        'Water Brush', 
        'Yellowtail', 
        'Zen Loop'
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
function setDate(){
    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    today = dd + '-' + mm + '-' + yyyy;
    document.getElementById('date').value = today;
}
setDate();

function setCredentialId(){
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let txt = "";
    for(let i=0; i<10; i++){
        txt += letters.charAt(Math.floor(Math.random()*letters.length));
    }
    console.log(txt);
    document.getElementById('hashvalue').value = "ID: " + txt; 
}
setCredentialId();

function certInit(index){
    index -= 1;
    let data = [
        [
            ['Cinzel Decorative', '#000000', 60, 310, 540],
            ['Press Start 2P', '#000000', 30, 290, 470],
            ['Sacramento', '#DAC01B', 95, 380, 300],
            ['Arial', '#000000', 25, 300, 170],
            ['Arial', '#000000', 15, 210, 90]
        ],
        
        [
            ['Cinzel Decorative', '#29A9E1', 60, 390, 540],
            ['Press Start 2P', '#FFFFFF', 30, 360, 470],
            ['Sacramento', '#DAC01B', 95, 450, 300],
            ['Arial', '#FFFFFF', 25, 380, 160],
            ['Arial', '#FFFFFF', 15, 770, 90]
        ],
        
        [
            ['Special Elite', '#000000', 60, 320, 540],
            ['Press Start 2P', '#000000', 30, 280, 470],
            ['Water Brush', '#000000', 95, 380, 300],
            ['Averia Serif Libre', '#000000', 25, 310, 170],
            ['Arial', '#000000', 15, 220, 110]
        ],
        
        [
            ['Luckiest Guy', '#0E7CED', 60, 330, 540],
            ['Press Start 2P', '#000000', 30, 330, 470],
            ['Water Brush', '#0E7CED', 95, 330, 300],
            ['Averia Serif Libre', '#000000', 25, 340, 150],
            ['Arial', '#000000', 15, 330, 80]
        ]
    ];

    let title = document.getElementById('title');
    let action = document.getElementById('action');
    let receiver = document.getElementById('receiver');
    let reason = document.getElementById('reason');
    let date = document.getElementById('date');

    let elements = [title, action, receiver, reason, date];
    for(let item=0; item<5; item++){
        elements[item].style.fontFamily = data[index][item][0];
        elements[item].style.color = data[index][item][1];
        elements[item].style.fontSize = data[index][item][2]+"px";
        elements[item].style.left = data[index][item][3]+"px";
        elements[item].style.bottom = data[index][item][4]+"px";
    }
    title.style.fontWeight = 'bold';
    reason.style.justifyContent = 'center';
    console.log('done');

    title = document.getElementById('perso-items-title').children;
    action = document.getElementById('perso-items-action').children;
    receiver = document.getElementById('perso-items-receiver').children;
    reason = document.getElementById('perso-items-reason').children;
    date = document.getElementById('perso-items-date').children;

    elements = [title, action, receiver, reason, date];
    for(let item=0; item<5; item++){
        elements[item][2].value = data[index][item][0];
        elements[item][4].value = data[index][item][1];
        elements[item][6].value = data[index][item][2];
        elements[item][8].value = data[index][item][3];
        elements[item][9].value = data[index][item][4];
    }
    console.log('again done');

}
function addTextListeners(){
    document.addEventListener("change", function(){
        for(let textNo=1; textNo < textCount; textNo++)
            persoStyle(`addText${textNo}`,`addTextToFrame${textNo}`);
        // console.log("added listener text successfully");
    });
}
const readUploadedFileAsText = (inputFile) => {
    const temporaryFileReader = new FileReader();
  
    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(inputFile);
    });
};
const getBase64 = async (event) => {
    // console.log(event,event.target.id, 'inside base64 func');
    const file = event.target.files[0];
    const fileContent = document.getElementById(`frame${event.target.id}`);

    try {
      const fileContents = await readUploadedFileAsText(file)  
      fileContent.src = fileContents
    } catch (e) {
      fileContent.src = e.message
    }
}

function addImageListeners(){
    // console.log(imgCount, 'imgCount');
    for(let x=1; x<=imgCount; x++){
        document.getElementById(`ImgPath${x}`).addEventListener("change", getBase64);
    }

    document.addEventListener("change", function(){
        for(let imgNo=1; imgNo < imgCount; imgNo++){
            persoImage(`addImg${imgNo}`,`frameImgPath${imgNo}`);
        }
        // console.log("added listener for img successfully");
    });
}

function additionalText(){
    // console.log("working");
    let parent = document.querySelector('.additionalText');

    // let element = document.createElement('div');

    // let title = document.createElement('p');
    // title.innerHTML = `Text-${textCount} :- `;
    // title.className = 'perso-title';
    // title.style.padding = '10px 20px 0 0';

    // let inp = document.createElement('input');
    // inp.type = 'text';
    // inp.className = 'additional-text';
    // inp.placeholder = 'Type text here...';

    // element.appendChild(title);
    // element.appendChild(inp);
    // element.className = 'additional-elements';
    // parent.appendChild(element);

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
    newInput.placeholder = `Type here... (${textCount})`;
    newInput.id = `addTextToFrame${textCount}`;

    document.getElementById("certificate").appendChild(newInput); 
    addTextListeners();
    textCount++;
}

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
    // inp.style.paddingTop = '10px';
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