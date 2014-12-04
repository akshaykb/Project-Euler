var total = 0;
    var n0 = 0;
     var n1 = 1;
     var n2;
    while ( total < 4000000 ) {
        n2 = n1;
        n1 = n0 + n1;
        n0 = n2;
        
        if ( n1 % 2 === 0 ) {
            total = total + n1;
        
    }
    
    }
    console.log(total);