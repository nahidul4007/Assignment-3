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