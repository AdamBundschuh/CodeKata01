/*
Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Taco” instead of the number and for the multiples of five print “Truck”. 
For numbers which are multiples of both three and five print “TacoTruck”.
*/


for (let i = 1; i < 101; i++) {
    
    if (Number.isInteger(i / 15)) {
      console.log('TACO TRUCK!');    
    
    } else if (Number.isInteger(i / 3)) {
      console.log('TACO!');

    } else if (Number.isInteger(i / 5)) {
      console.log('TRUCK!');

    } else {
      console.log(i);  
    }

}