

function changeCertBg(no){
    let frame = document.querySelector('.frame');
    frame.style.background=`url('./assets/formats/${no}.png')`;
    frame.style.backgroundRepeat="no-repeat";
    frame.style.backgroundSize="cover";
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


function expandProcedureItems(index){
    console.log("Hello");
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