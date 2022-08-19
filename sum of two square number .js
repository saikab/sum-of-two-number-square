 var x=parseInt(prompt("Please enter the number:"))

for(var a=1; a<x ; a++) {

        for(var b=1;b<x;b++){

               if((a**2+b**2)==x){
                           console.log(a+"^2+"+b+"^2="+x);
               }
        }

}