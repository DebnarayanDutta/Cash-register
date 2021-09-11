const amountclass =document.querySelector("#amountinput");
const cashclass = document.querySelector("#cashinput");
const buttonclass = document.querySelector("#check-btn");
const errorMessage = document.querySelector("#error")
const cashreturnclass=document.querySelector(".cashreturn")
const notes =document.querySelectorAll(".note")

buttonclass.addEventListener("click", function calculateCash(){
    errorMessage.style.display ="none";
    cashreturnclass.style.display ="none"
    const amount = Number(amountclass.value);
    const cash= Number(cashclass.value);

    const cashArray =[2000,500,100,20,10,5,1];

    let cashtobereturned = cash - amount;

    if(amount<=0){
        errorMessage.style.display="block"
        errorMessage.innerText="amount should not be less than zero"
    }
    else if (cash<=0){
        errorMessage.style.display="block"
        errorMessage.innerText="cash should not be zero"
    }else if(cash<amount){
        errorMessage.style.display="block"
        errorMessage.innerText="Cash cannot be less than bill amount"
    }else  {
        cashreturnclass.style.display="block"
        cashreturnclass.innerText =cashtobereturned;
        for(let i=0;i<cashArray.length;i++){
            let noOfNote = Math.trunc(cashtobereturned/cashArray[i]);
            cashtobereturned = cashtobereturned % cashArray[i];
            notes[i].innerText = noOfNote;
        }
    }
});


