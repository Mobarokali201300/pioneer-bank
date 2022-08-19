const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
     const loginArea = document.getElementById("login-area");
     loginArea.style.display ='none';
     const transactionArea = document.getElementById("container");
     transactionArea.style.display='block';
})
const depositeBtn = document.getElementById("addDeposite");
depositeBtn.addEventListener("click",function(){
     const depositeNumber = getInputNumber("depositeAmount")

     updateSpanText("currentDeposite",depositeNumber);
     updateSpanText("currentBalance",depositeNumber);
      
     document.getElementById("depositeAmount").value ="";
}) 
//WITHDRAW
const withdrawBtn = document.getElementById("addWithdraw").innerText;
withdrawBtn.addEventListener("click",function(){
     
     const withdrawNumber = getInputNumber("addwithdraw");
     console.log(withdrawNumber);
})
function getInputNumber(id){
     const amount = document.getElementById(id).value;
     const amountNumber = parseFloat(amount);
     return amountNumber;
}

function updateSpanText(id,depositeNumber){
     const current = document.getElementById(id).innerText;
     const currentNumber = parseFloat(current);
     const totalAmount = depositeNumber + currentNumber;
     document.getElementById(id).innerHTML =totalAmount; 
}