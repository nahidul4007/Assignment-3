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


