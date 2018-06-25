
LOOPING A TRIANGLE:



for (let count = "#"; count.length <= 7; count+="#")
   
  console.log(count);


FIZZBUZZ:

  for (let count = 1; count < 101; count++) {
    if ((count % 3 == 0) && (count % 5 == 0)) {
    console.log("FizzBuzz");
      } else if (count % 3 == 0) {
      console.log("Fizz");
        }  else if (count % 5 == 0) {
           console.log("Buzz");
           } else 
             console.log(count);
  }   




  CHESSBOARD:

let size = 8

for (let count = 1; count <= size; count++)
  if (count % 2) {
    console.log(" # # # #");
  	} else {
      console.log("# # # # ");
    }


let size = 12
let print = ""


for (let a = 0; a < size; a++) {
  for (let b = 0; b < size; b++) {
    if ((a + b) % 2 == 0) {
      print += "#";
    } else {
      print +=  " ";
    }
  }
	print += "\n";
}
console.log(print)