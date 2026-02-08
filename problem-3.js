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



