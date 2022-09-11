function sum(x,y){
    let z = Number(x) + Number(y);
    let result = document.getElementById('result');
    result.innerText="Итого: " + z;
}

function deduction(x,y){
    let z = Number(x) - Number(y);
    let result = document.getElementById('result');
    result.innerText="Итого: " + z;
}
function multi(x,y){
    let z = Number(x) * Number(y);
    let result = document.getElementById('result');
    result.innerText="Итого: " + z;
}
function division(x,y){
    let result = document.getElementById('result');
    if (Number(y)===0){
        result.innerText="Делить на 0?? No way";
    } else{
        let z = Number(x) / Number(y);
        result.innerText="Итого: " + z;
    }
}
function changeColor(){
    let formID = document.getElementById('formID');
    formID.style.backgroundColor='pink';
}