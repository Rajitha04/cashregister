
var  availablenotes=[2000,500,100,20,10,5,1];


var billamount=document.querySelector("#billamount");
var cashgiven=document.querySelector("#cashgiven");
var checkbutton=document.querySelector("#checkbutton");
var message=document.querySelector("#message");
var  noofnotes=document.querySelectorAll(".noofnotes");

checkbutton.addEventListener("click",function onclickhandler(){
    message.style.display="none";
    var cash=cashgiven.value;
    var bill=billamount.value;
    if(bill > 0)
    {
        if(cash >= bill){

            var amountdifference= cash - bill ;
            minnotes(amountdifference);
            
            } 
        else if(cash < bill){
            message.style.display="block";
            message.innerText="cash given can't be less than bill amount";
        }
        
    }
    else{
        message.style.display="block";
        message.innerText="amount must be greater than zero";
        
    }
})
    function minnotes(amount){
        
        for(let i=0;i<availablenotes.length;i++){

            var notes= Math.trunc (amount/availablenotes[i]);
            amount=amount%availablenotes[i];
            noofnotes[i].innerText=notes;
            

        }
        
        
        

    
}

