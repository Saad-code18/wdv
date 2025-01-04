
let currentbalance=0;
function updatebalance(){
    document.getElementById('balance').innerText=`Current Balance : $ ${currentbalance.toFixed(2)}`;
}
document.getElementById('creditbutton').addEventListener('click', () =>{
    const amount=
    parseFloat(document.getElementById('amount').value);
    if(isNaN(amount) || amount<=0){
        alert('Please Enter a Valid Amount');
        return;
    }
    currentbalance+=amount;
    updatebalance();
}

);
document.getElementById('debitbutton').addEventListener('click', () =>{
    const amount=
    parseFloat(document.getElementById('amount').value);
    if(isNaN(amount) || amount<=0){
        alert('Please Enter a Valid Amount');
        return;
    }
    if(amount > currentbalance){
        alert('Insufficient Balance');
        return;
    }
    currentbalance-=amount;
    updatebalance();
}

);
updatebalance();