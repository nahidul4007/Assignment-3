//Problem-01: New Price for Eid Sale
/*function signature/sample */
function newPrice(currentPrice , discount ) {
          // You have to write your code here
        if(typeof currentPrice!=="number"){
            return "Invalid";
        }else if(typeof discount!=="number"){
            return "Invalid";
        }
        let discournt_price = currentPrice*(discount/100)
        let main_price=currentPrice-discournt_price
        return main_price.toFixed(3)

}




//Problem-02: OTP Validation for Zapshift
/*function signature/sample */
function validOtp(otp) {
          // You have to write your code here
        //   otp=String(otp);  (ATA KAJ KORLO NAH)
        if(typeof otp!=="string"){
            return "Invalid"
        }
        if(otp.length===8){
          if(otp.startsWith("ph-")){
              return true
          }
        }
        return false
}




//Problem-03: BCS Final Score Calculator
/*function signature/sample */
function finalScore (omr) {
        //write your code here
        if(typeof omr!=="object"){
            return "Invalid";
        }
        let right=omr.right;
        let wrong=omr.wrong;
        let skip=omr.skip;
        if(typeof right!=="number"){
            if(typeof wrong!=="number"){
                if(typeof skip!=="number")
                    return "Invalid"
            }
        }
        if(right+wrong+skip!==100){
            return "Invalid";
        }
        //  sob kisu jodi thik thake taile 
        let score = (right*1)+(wrong*-0.5)+(skip*0);
        return Math.round(score);

}





//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    //write your code here
    if(!Array.isArray(array)){
        return "Invalid"
    }
    let haCount=0;
    let naCount=0;
    for(let vote of array){
        if(vote ==="ha"){
            haCount++;
        }
        else if(vote ==="na"){
            naCount++;
        }else{
            return "Invalid";
        }
    }
    if(haCount>naCount){
        return true
    }else if(haCount===naCount){
        return "equal"
    }
    else{
        return false
    }
    
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
    // Your code here
    if (typeof str !== "string" || str.length === 0) {
        return "Invalid";
    }
    let words=str.split(" ");
    let longwords=words[0];
    for (let word of words){
        if(word.length>longwords.length){
            longwords=word;
        }
    }
    let token=str.split(" ").join("").length;
    return{
        longwords:longwords,
        token:token
    };
}

