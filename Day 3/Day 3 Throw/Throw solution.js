function isPositive(a) {
    try{
    if(a ==0 ) throw 'Zero Error';
    if(a < 0) throw 'Negative Error';
    if(a > 0){
        return 'YES';
    }
    }
    catch(err){
        return err;
    }
}
