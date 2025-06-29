function reverseString(s) {
    try{
    let arr = s.split("").reverse().join("");
    console.log(arr);
    }catch(err){
        console.log(err.message);
        console.log(s);
    }
}