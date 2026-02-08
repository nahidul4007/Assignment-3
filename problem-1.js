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


