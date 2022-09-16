
function sum(x,y){
    const z = Number(x) + Number(y);
    const result = document.getElementById('result');
    result.textContent=`Итого:  ${z}`;
}

function deduction(x,y){
    const z = Number(x) - Number(y);
    const result = document.getElementById('result');
    result.textContent=`Итого:  ${z}`;
}
function multi(x,y){
    const z = Number(x) * Number(y);
    const result = document.getElementById('result');
    result.textContent=`Итого:  ${z}`;
}
function division(x,y){
    const result = document.getElementById('result');
    if (!Number(y)){
        result.textContent="Делить на 0?? No way";
    } else{
        const z = Number(x) / Number(y);
        result.textContent=`Итого:  ${z}`;
    }
}

const formID = document.getElementById('formID');

function changeColor(){
    formID.style.backgroundColor='pink';
}