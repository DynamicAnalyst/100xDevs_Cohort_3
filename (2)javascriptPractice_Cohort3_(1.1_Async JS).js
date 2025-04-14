//Find sum of two numbers
// function sum(a, b){
//     return a + b;
// }
// let ans = sum(20, 30);
// console.log(ans);

//----------------------------------------------------------------
//What if you pass a string for an argument

// function sum(a, b){
//     return a + b;
// }

// let ans = sum("20", 30);
// console.log(ans); 

// Output = 2030
//in this case the string gets concatinated.

//----------------------------------------------------------------
//There are ways to get around it; Like typescript, parse it to a number, etc.
//----------------------------------------------------------------

// function sum(a, b){
//     return parseInt(a) + parseInt(b); // if this was a string, it will parse it down to a number
// }

// let ans = sum ("20", 30);
// console.log(ans);






//=================================================================================================================================================================================================================================






//find sum from 1 to a number

// function sum(n){
//     let ans = 0;
//     for(let i = 0; i<n; i++){
//         ans = ans + i
//     }
//     return ans;
// }

// const ans = sum(100);
// console.log(ans);






//=================================================================================================================================================================================================================================

// I/O operations






// const fs = require("fs");

// const contents = fs.readFileSync("(2.1.0)io_operationsFromJavaScriptPractice(2.0.0).txt", "utf-8"); //reading file Synchrornously
// console.log(contents);







//=================================================================================================================================================================================================================================

//Functional arguments






// function sum(a, b){
//     return a + b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function doOperation(a, b, op){         //.....***
//     return op(a, b);
// }
// console.log(doOperation(1, 2, sum));
//-----------
//...*** So its basically like calling....

// function doOperation(a, b, function) {
//     return function(a, b);
// }

//-----------

//for better explanation; UNCOMMENT and read the file:-
// const fs = require("fs");
// const functionalArgumentsTopic = fs.readFileSync("(2.1.0)io_operationsFromJavaScriptPractice(2.0.0).txt", "utf-8");
// console.log(functionalArgumentsTopic);






//=================================================================================================================================================================================================================================

// I/O operations .... continues....







// //To read file synchrounously ...we did readFileSync; But that is operation heavy way.
// //What If there are multiple files to read from

// const fs = require("fs");

// function forPrintingData(err, data){            // ERR is required but DATA is just a name
//     console.log(data);
// }

// fs.readFile("(2.1.0)io_operationsFromJavaScriptPractice(2.0.0).txt", "utf-8", forPrintingData); // does not need ...  const whateverName =

// fs.readFile("(2.2.0)io_operationsFromJavaScriptPractice(2.0.0).txt", "utf-8", forPrintingData); // does not need ...  const whateverName =

// console.log("Control reaches here - DONE");



//--------------------------------------------------------

// //this is how you write code:-

// const fs = require("fs")                                                                        // line 1

// function callbackAsArgumentToCallbackItsFunction(err, dataName){                                // line 3 starts here
//     if (err) {                                                                                  //you should always do the err or error part.. it means if there is error ,,do this or that or else then the program continues
//         console.log ("File not found or error while fetching data!")
//     } else {
//         console.log(dataName)
//     }                                                                                           // line 3 ends here
// }
// fs.readFile("fileNameYouWanToSource.txt", "utf-8", callbackAsArgumentToCallbackItsFunction);    // line 2




//=================================================================================================================================================================================================================================







