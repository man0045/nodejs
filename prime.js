for(var count = 0; count<= 100; count ++){
    var notprime = false;
    for(var i =2; i<= count; i++  ){
        if(count%i ==0 && i != count){
            notprime = 2;
        }
    }
    if (notprime == false){
        console.log(count)
    }
}