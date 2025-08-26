const generateBtn = document.querySelector('#generate-btn');
const paletteContainer = document.querySelector('.palette-box');

paletteContainer.addEventListener('click',function(e){
    if(e.target.classList.contains("copy-btn")){
        const hexcode = e.target.previousElementSibling.textContent;
        navigator.clipboard.writeText(hexcode)
        .then(()=>{
            showSucces(e.target);
        })
        .catch((e)=>{
            console.log(e);
        })
    }else if(e.target.classList.contains('color')){
        const hexcode = e.target.nextElementSibling.querySelector('.hex-value').textContent;
        navigator.clipboard.writeText(hexcode)
        .then(()=>{
            showSucces(e.target.nextElementSibling.querySelector('.copy-btn'));
        })
        .catch((e)=>{
            console.log(e);
        })
    }
});

function showSucces(element){
    element.classList.remove('far','fa-copy');
    element.classList.add('fas','fa-check');
    element.style.color = 'green';
    setTimeout(()=>{
        element.classList.remove('fas','fa-check');
        element.classList.add('far','fa-copy');
        element.style.color ='';
    },1500);

}

generateBtn.addEventListener('click',showColor);

function showColor(){
    let colors = [];

    for(let i=0;i<5;i++){
        colors.push(generateRandomColor());
    }
    updatePalette(colors);
}

function updatePalette(colors){
    const colorboxes = document.querySelectorAll('.color-box');

    colorboxes.forEach((box,index)=>{
        const color = colors[index];
        const colorDiv = box.querySelector('.color');
        const hexValue = box.querySelector('.hex-value');

        colorDiv.style.backgroundColor = color;
        hexValue.innerText = color;
    });
}

function generateRandomColor(){
    const colortext = '0123456789ABCDEF';

    let hexCode = '#';
    for(let i=0;i<6;i++){
        hexCode += colortext[Math.floor(Math.random()*16)];
    }
    return hexCode;
}
showColor();