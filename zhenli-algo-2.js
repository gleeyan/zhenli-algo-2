function printUpTo(x){
            
            if(x < 0) {
                return false;
            } else {
                for (var i=0; i < x + 1; i++) {
                    console.log(i);
                }
            }            
        }
        printUpTo(1000); 
        y = printUpTo(-10); 
        console.log(y); 



        
        function printSum(x){
            sum = 0;
            
            for (var i = 0; i < x; i++) {
                console.log(i);
                console.log(sum);
                sum += i;
            }
            return sum
        }
        y = printSum(255) 
        console.log(y) 



        function printSumArray(x){
            sum = 0;
            for(var i=0; i<x.length; i++) {
                
                sum += x[i];
            }
            return sum;
        }
        console.log(printSumArray([1,2,3]) ); 
