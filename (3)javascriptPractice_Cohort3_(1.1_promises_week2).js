// // just the simple one way of printing area of a rectangle

// const rectangle1 = {
//     width : 2,
//     height: 3,
//     color: "red"
// }

// function area(whichRectangle) {
//     return whichRectangle.width * whichRectangle.height;
// }

// const finalAnswer = area(rectangle1);
// console.log(finalAnswer);

// //-------------------------------------------------------------------------------------
// //what is the other way or better way of doing things?

// class rectangleClass {
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     //inside this class goes the function for calculating area

//     areaCalculationFunction(){
//         const rectangleArea = this.width * this.height;
//         return rectangleArea;
//     }

//     paintAreaFunction(){
//         console.log("painting with color " + this.color);
//     }

// }

// //now calling with inputs

// const callingRectangleWithInput = new rectangleClass(6, 10, "yellow");

// const callingForAreaCalulationFunction = callingRectangleWithInput.areaCalculationFunction();

// console.log("Area of the rectangle: ", callingForAreaCalulationFunction);

// callingRectangleWithInput.paintAreaFunction();


// //=============================================================================================================================================


// // CHATGPT QUESTIONS PRACTICE:- based on the above code; give me 3 questions where I would this same types of codes. nothin extra stuff

// // 1.	Create a JavaScript class called circleClass that calculates the area of a circle and prints its color.
// // 2.	Write a class named triangleClass that calculates the area of a triangle using base and height, and also displays the triangle’s color.
// // 3.	Define a class squareClass with methods to compute its area based on one side’s length and print a message indicating the color of the square.

// //=============================================================================================================================================

// // ChatGpt Question 1:- Create a JavaScript class called circleClass that calculates the area of a circle and prints its color.

// class circleClass {
//     constructor (radius, color) {
//         this.radius = radius;
//         this.color = color;
//     }

//     circleAreaCalculateFunction() {
//         const circleAreaFormulaforOutput = 3.18 * this.radius;
//         return circleAreaFormulaforOutput;
//     }

//     circleColorFunction(){
//         console.log("the color of the circle: " + this.color)
//     }
// }

// const inputtingValueForCirccle = new circleClass(6, "yellow");

// const circleArea = inputtingValueForCirccle.circleAreaCalculateFunction();
// console.log("The area of the circle: " + circleArea);

// inputtingValueForCirccle.circleColorFunction();

// //-------------------------------------------------------------------------------------

// // ChatGpt Question 2:- Write a class named triangleClass that calculates the area of a triangle using base and height, and also displays the triangle’s color.

// class traingleClass {
//     constructor (base, height, color) {
//         this.base = base;
//         this.height = height;
//         this.color = color;
//     }

//     triangleAreaFormulaFunction(){
//         const triangleAreaFormula = 0.5 * this.base * this.height;
//         return triangleAreaFormula;
//     }

//     trianglePaintColorFunction(){
//         console.log("The color of the triangle: " + this.color);
//     }
// }
//     const valueInputForTriangle = new traingleClass(5, 5, "yellow");

//     const triangleArea = valueInputForTriangle.triangleAreaFormulaFunction();
//     console.log(triangleArea);

//     valueInputForTriangle.trianglePaintColorFunction();

// //-------------------------------------------------------------------------------------
// // ChatGpt Question 3:- Define a class squareClass with methods to compute its area based on one side’s length and print a message indicating the color of the square.

// class squareClass {
//     constructor (sideMeasurement, color) {
//         this.sideMeasurement = sideMeasurement;
//         this.color = color;
//     }

//     squareAreaCalculationFormulaFunction(){
//         const squareFormulaOutput = this.sideMeasurement * this.sideMeasurement;
//         return squareFormulaOutput;
//     }

//     colorOfSquareFunction(){
//         console.log("The color of the square: " + this.color);
//     }
// }

// //inputting the value
// const inputtingValueForSquare = new squareClass(6, "orange");

// //outputting the square area with provided value
// const squareAreaAns = inputtingValueForSquare.squareAreaCalculationFormulaFunction();
// console.log(squareAreaAns);

// //outputting the square color with provided value
// inputtingValueForSquare.colorOfSquareFunction();

// //=============================================================================================================================================

// // pre-defined class....

// const date = new Date();        // date is predefined class in javascript which means you don't have to create those classs and its respective constructors, etc. You just output in the same way you were doing earlier.
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getFullYear());

// //-------------------------------------------------------------------------------------
// // map is also a predetermined class which you use to create key value pairs.
// //for example in this case... the NAME is ALICE...the AGE is 30...


// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name'));
// console.log(map.get('age'));
// //or
// const firstName = map.get('name');
// console.log(firstName);

// const personAge = map.get('age');
// console.log (personAge);

// //=============================================================================================================================================
// // PROMISES....

// // A PROMISE in Javascript is an object that represnts the evantual completion (or failur) of an asynchronous operation and its resulting value.
// // Promises are just a syntactically superior way to write code instead of callbacks, which also prevent callback hell.

// //this is a simple calback
// function main(){
// }

// setTimeout(main, 3000);
// // What is this doing -- after 3000 milliseconds, CALLBACK "main" function.

// // -----------------------------------------------

// // Promisified version

// function setTimeoutPromisified(ms) {                            //for now forget this line &&..
//     return new Promise(resolve => setTimeout(resolve, ms));                               // ..&& also forget this for now
// }

// function callback(){
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback); // Promisified version of the callback function :--- setTimeout(main, 3000) || well technically it will be:--- setTimeout(3000).then(main)

// // -----------------------------------------------

// //so the exact similar promisified version of the previous promisified version will be:-

// function setTimeoutPromisified(ms) {                            //for now forget this line &&..
//     return new Promise(resolve => setTimeout(resolve, ms));                           // ..&& also forget this for now ..... /// this line information continues 
// }
// function main(){
//     console.log("this is the promisified version of simple callback function"); // added this line to get an output
// }

// setTimeoutPromisified(3000).then(main);



// /// this line information continues ......
// /// if you look at it, its returning instance of a new Promise class

// // we can write

// let todayDate = new Date() // using same as Class and initialising new class using the predefined Class.
// return todayDate;

// // its same like that..so can we do like this...!!!
// function setTimeoutPromisified(ms) {                            
//     let todayDate2 = new Promise();
//     return todayDate2;
//     //return new Promise(resolve => setTimeout(resolve, ms));                      
// }

// // ---------------------------------------------------------------------------------------------------------------------------------------------

// // function arihant(){
// //     console.log("Arihant is called after 3 seconds");
// // }

// // setTimeout(arihant, 3000);



// // or can we do like this.... (BDW... this is the first code I DID IT MYSELF from the below code)




// function waitFor10s(hamsatej){ 
//     setTimeout(hamsatej, 10000)
// }

// function arihant(){
//     console.log("Arihant is called")
// }

//  waitFor10s(arihant); // we are doing this one instead of the bottom one because the timer is a helper; helper takes is takes and deliver; NOT that task takes timer and deliver it.
// // arihant(waitFor3s); // this will print "Arihant is called" immediately

// //waitFor3s is a helper function that provides a delay (timer). It takes in a function (the task) and delivers it after 3 seconds.
// //hamsatej is simply a placeholder parameter name. You can rename it to anything (callback, task, functionToRun), and it will still work the same way.




// // or you can do like this...




// function waitFor6s(valuePlaceholder) {                          // 1st this function will be defined
//     setTimeout(valuePlaceholder, 6000);
// }

// function myName(){                                              // then 2nd..this function will be define
//     console.log("my name Arihant is called after 6 seconds");
// }

// //so the wrapper will be... timer takes the taks and deliver, not the other way.

// waitFor6s(myName);                                              // then 1st function (waitFor6s) will be called with 2nd function (myName) as 1st function's argument. then 1st function will go into clock and the it will print the 2nd function.

// // ---------------------------------------------------------------------------------------------------------------------------------------------

// //now coming to that ignored portion.... setTimeoutPromisified protion.... and/ how to create your own ..

// function randomFunction(){
// }

// let a = new Promise(randomFunction);
// console.log(a);
// // This prints --- Promise { <pending> }

// // lets replace Promise with Date

// function randomFunction2(){
// }

// let c = new Date()
// console.log(c);

// // this will print instance of a Date class..or rather its printing current date and time. and NO the function above is not needed.

// // so when you passed randomFunction earlier...its howed pending
// // Remember; A Promise represents the 'eventual completion' (or failure) of an asynchornouse operation and its resulting value
// // that { <pending> } means currently I am pending but evantually i will evantually give you something.

// // function randomFunction3(){                      // function which will be callback in Promise
// //     console.log("promise no longer pending");
// // }

// // let z = new Promise(randomFunction3);            // function becomes callbackfunction when taken as argument

// // z.then(randomFunction3);                        // when you evantually complete, please call my callback function




// // but the question is when does PROMISE class finishes for its evantual delivery?
// // you have tell that when you are making the the Promise class. in the above case when doing "new Promise" or "let z = new Promise(randomFunction3);"

// // Promise takes function as input whose first argument is als a function which will be called after resolving the promise.(.then wala)

// const fs = require("fs");

// function readtheFile(sendTheFinalValueHere){ 
//     fs.readFile("a.txt", "utf-8", function(err, dataGathered){
//         sendTheFinalValueHere(dataGathered);                    // sendTheFinalValueHere is acting like 'return'
//     })
// }

// function readFile(fileName){
//     //read the file and return its value
//     return new Promise(readtheFile);
// }

// const abc = readFile();

// function callback(contents){
//     console.log(contents);
// }

//  abc.then(callback); // setTimeOut(3000).then(callback) -- well setTimeOut is predefined; but abc is not.

// //also remember timer takes the task and delivers...here timer is replaces by fetching and reading the the content and task is replaced by outputting the content.

// // more elaborative explanation of the above code from ChatGPT
// // output the file and answer will be presented...

// const fs = require("fs");

// function readtheFile(sendTheFinalValueHere){ 
//     fs.readFile("(3.0.1)extraExplanations_for(1.1_promises_week2).md", "utf-8", function(err, dataGathered){
//         sendTheFinalValueHere(dataGathered);                    // sendTheFinalValueHere is acting like 'return'
//     })
// }

// function readFile(){
//     //read the file and return its value
//     return new Promise(readtheFile);
// }

// const abc = readFile(); // THIS IS 1st MAIN EXECUTOR.. which starts delegating task asynchornously...






// function callback(contents){
//     console.log(contents);
// }

//  abc.then(callback); // THIS IS 1st MAIN EXECUTOR.. which waits for the 1st MAIN EXECUTOR to finish its task so the 2nd (or itself) can start its own task.
//  // rember timer takes the task and delivers. Timer here is abc ; & final task is to get the data and print it.

//  // Here is whats happenning....
//  // readFile() executes first. Then readFile function is call backed, which give a promise (which also needs to be added with new)...
//  //...the promise was to give the readTheFile function that when you complete readtheFile function then give me the output of which you got...
//  //... there readTheFile function's task was to read the file (...md); well what happens if there was error in reading the file. therefore if there is error.. then error...
//  //... but if you gather data (dataGathered) then give me output. The ooutput is taken as 'argument' inside the parent's function's 1st argument....
 
// // now all the above 4 lines are happenning at background asynchornously

// //in the meantime.. abc.then(callback) is read in the callstack because no task was pending and reading file and fetching data was delegated...
// // timer-task logic meantioned above...once the file is read and contents are fetched. abc whose job was to fetch the date, when it finishes doing that drops...
// //... with .then(callback) task of printing it.

// // // ---------------------------------------------------------------------------------------
// // //WEEK 2 ASSIGNMENTS ...try to soleve them now.

// // // ---------------------------------------------------------------------------------------
// //Some ChatGpt questions and and practice sessions

// // Practice Task 1:- Modify your code so you can pass the file name dynamically into readFile(fileName) instead of hardcoding it inside readtheFile.
// // Practice Task 2:- Add error handling to your readtheFile function so that if reading the file fails, the Promise is rejected and the error is logged.
// // Practice Task 3:- Add a second .then() to your promise chain that logs "File read successfully" after the contents are printed.

// // Just re-creating the code with a.txt for practicing

// // Before that lets under Harkirat's explanation by logging. THIS IS A BRILLIANT EXAMPLE

// const fs =require("fs");

// console.log("======TOP OF THE FILE======");

// function readNewFile(resolveabc) {
//     console.log("readNewFile is called");
//     setTimeout(function(){
//         console.log("callback based setTimeout completed");
//         resolveabc();
//     }, 3000);
// }


// function setTimeoutPromisified(fileName){
//     console.log("setTimeoutPromisified called");
//     return new Promise(readNewFile);                // read the file and return its value
// }

// const dabba = setTimeoutPromisified();

// function anotherCallback(){
//     console.log("timer is done");
// }

// dabba.then(anotherCallback)

// console.log("======END OF THE FILE======");

// // ..........EXCELLENT explanation is associated .md file..........

// // ===================================================================================================================

// //PROMISE class constructor

// class Promise {
//     constructor(fn){
//         this.fn = fn;
//         this.fn(() => {
//             this.resolve();
//         })
//     }
//     then(callback){
//         this.resolve = callback;
//     }
// }


// // // ..........EXCELLENT explanation is associated .md file..........


// // or to simplify a bit without arrow function

// function doAyncOp(resolve){
//     setTimeout(resolve, 3000);
// }                                                   // BLOCK 2

// function setTimeoutPromisified(){
//     return new Promise(doAyncOp);
// }                                                   //BLOCK 1

// const p = setTimeoutPromisified();                  // BLOCK 3

// function callback(){                                //BLOCK 5
//     console.log("3seconds have passed");
// }

// p.then(callback);                                   // BLOCK 4

// // explanation:-

// //BLOCKS are NOT Callstack. it is for my mere understanding why code I write after what...

// //BLOCK 1:- if i define ad FUNCTION ...setTimeoutPromisified.....RETURN new Promise...doAyncOp (doAyncOperation).

// // BLOCK 2:- What is the Async operation in out case.....function doAyncOp(){...}?  The real operation that we want to promisify..that goes in there... right now that is setTimeout...
// // ... in this case i want setTimeout to happens after 3 seconds or 3000 milliseconds... that after 3 seconds, i want the 1st argument (resolve) here to get called.


// //Recapping:- Now when you create a new promise, you give it a function as a input. The 1st argument of the function whenever gets called........

// // BLOCK 3:-  ........ Then whoever created the promise ...const p = setTimePromisified.... (setTimeoutPromisified) created the promise



// // for MORE UNDERSTAING OF THIS SAME CODE...

// function doAyncOp(){
//     setTimeout(resolve, 3000); // old, callback bsed, async function ..this is ugly way..let me wrap this inside a promise..which was doen in thre above code.
// }

// const p = new Promise (doAyncOp) //i created new promise, gave it a function, and inside that function i did all my aysnc operation there. and whenever that operation is done, i called the 1st argument (Resolve) and handover to (.then) along with function which has been called back. 

// function callback(){
//     console.log("3 seconds have passed");
// }

// p.then(callback);

// // YES the 1st argument in that case has to be a FUNCTION.
// // ========================================================================================

// // Following are two code snippets; Uncomment them together for better understanding of promises.

// function promiseFn(resolve){
//     let c = 0;
//     for (let i = 0; i<1000000; i++){
//         c++;
//     }
//     resolve();                                      // ref.1 
// }

// const xyz = new Promise(promiseFn);

// function callback(){                                //ref. 2
//     console.log("hi there from the 1st snippets");
// }
// xyz.then(callback);

// //Ref.1:- if i don't call resoleve function [resolve()], after I have done my aynsc operation (for loop in this case is a sync operation)...
// //...whenever resolve() is called, this callback() {ref.2} will get called

// // {ref. 3} If i call resolve() with some string, lets say. then...then the following code...
// // -------------------------------

// function promiseFn(resolve){
//     let c = 0;
//     for (let i = 0; i<1000000; i++){
//         c++;
//     }
//     resolve("hi there Arihant; this is from 2nd snnipets"); //ref. 3
// }

// const xyz2 = new Promise(promiseFn); // ref. 4

// function callback(str){
//     console.log(str);
// }
// xyz2.then(callback);

// // ref.3 :- then the string gets received at callback(). this resolve() is sort of a teleport to callback()
// //ref. 4:- whenever you create a promise...a function going in..and 1st argument of the function going in to resolve() which hands down or teleport...
// // ...to callback(), which will print the same when you passed through .then().


// //=====================================================================================================
// //PROMISE DEFINATIONS:- =============VERY VERY IMPORTANT DEFINATIONS======================

// //A PROMISE expects a function, that performs an actual asynchronous task......
// //...... Once the aysnc task is complete, call the 1st argument of that function, passing in the data obtained from the async task......
// // ...... That data will then be passed to the function you define in `.then`
// //=====================================================================================================

// // Assignments:-

// // try to create a promisified veriosn of 
// // setTimeout
// // fetch
// // fs.readFile

// // ...at the end...continued...


// // =====================================================================================================

// //setTimeoutPromisified

// function setTimeoutPromisified(duration){                    //How you call a setTimeout promisified version
//     return new Promise(function(resolve){
//         setTimeout(resolve, duration);
//     });
// }



// function callback(){                                       //How can you call a promisifed function
//     console.log("1 second has passed");
// }

// setTimeoutPromisified(1000).then(callback);

// //-----
// // writing the same code in previous style
// //-----

// function timeoutOperation(resolve) {
//     setTimeout(resolve, 1000); 
//     // 👆 after 1 second, call resolve() — same logic
// }

// function setTimeoutPromisified() {
//     return new Promise(timeoutOperation);
// }

// function callback() {
//     console.log("1 second has passed");
// }

// const result = setTimeoutPromisified();  // create the promise

// result.then(callback);  // when resolved, call the callback

// //-----------
// // practicing

// const fs = require("fs");

// function impFunctionPromisifed(resolve){
//     fs.readFile("a.txt", "utf-8", function (err, data){
//         if (err){
//             console.log("error reading file!")
//         } else {
//             console.log("======Data Successfully Retrieved.======");
//             resolve(data);
//         }
//     })
// };

// function impFunction (){
//     return new Promise(impFunctionPromisifed)
// }

// const executionFetch = impFunction();

// function thenCallback(contents){
//     console.log("======Data Successfully Displayed======");
//     console.log(contents);
// };

// executionFetch.then(thenCallback);

// // --------------------
// // more practicing

// const fs = require("fs");

// function fileReadFunction(resolve){
//     fs.readFile("a.txt", "utf-8", function (err, data){
//         if (err){
//                 console.log("STATUS: Error reading or fetching file!")
//         } else {
//             console.log("STATUS: File are being displayed successfuly")
//         }
//         resolve(data);
//     });

// }

// function fileReadFunctionPromisified(){
//     return new Promise(fileReadFunction);
// };

// const fileFetch = fileReadFunctionPromisified();

// function postFetch(data){
//     console.log(data);
// };

// fileFetch.then(postFetch);

// // --------------------

// // more practicing

// const fs = require("fs");

// function filePullPromisified(resolve){
//     fs.readFile("a.txt", "utf-8", function (err, dataFetched){
//         if (err) {
//             console.log("STATUS: There was an error reading or retrieving file");
//         } else {
//             console.log("STATUS: File Reading SUCCESSFUL and being displayed")
//             resolve(dataFetched);
//         };
//     });
// };


// function filePull(){
//     return new Promise(filePullPromisified);
// }

// const fileRetrievalSystem = filePull();




// function afterFilePull(dataFetched){
//     console.log(dataFetched);
// }




// fileRetrievalSystem.then(afterFilePull);

// // -------------------------------------

// // more practice

// const fs = require("fs");

// function fileFetchingPromisified(resolve){
//     fs.readFile("a.txt", "utf-8", function(err, contentDataFetched){
//         if (err){
//             console.log("STATUS:- Hey there! There was a issue fetching and/or reading your file!");
//         } else {
//             console.log("STATUS:- File read & fetched Successfully.");
//             resolve(contentDataFetched);
//         }
//     })
// }

// function fileFetching (){
//     return new Promise (fileFetchingPromisified);
// }


// const taskGiven = fileFetching();

// function postFileFetching(contentDataFetched){
//     console.log("STATUS:- FILE BEING DISPLAYED...");
//     console.log(contentDataFetched)
// }

// taskGiven.then(postFileFetching);

// // =====================================================================================================


// // Assignments:-

// // try to create a promisified veriosn of 
// // setTimeout
// // fetch
// // fs.readFile

// // =====================================================================================================


// setTimeout promisified (harkirat's code)

// function setTimeoutPromisified(){               // ref. 1
//     return new Promise (function (resolve){
//         setTimeout(resolve, duration);
//     });
// }

// function callback(){
//     console.log("1 second has passed");
// };

// setTimeoutPromisified(1000).then(callback);

// // ref. 1 :- its basically ...in the above + above code, promise is returning a function which is written seperatedly.... 
// // ... and in this code... that similar style function is not written seperatedly but directly in that promise block...
// // ...like writing....

// function setTimeOutManualPromisified (resolve, duration){
//     setTimeout(resolve, duration);
// }

// function setTimeOutManual(duration){                            // ref.2
//     return new Promise(function (resolve) {
//             setTimeOutManualPromisified(resolve, duration);
//     });
// }

// const personalTimer = setTimeOutManual;

// function forThenSection (){
//     console.log("6 seconds has passed")
// }

// personalTimer(6000).then(forThenSection);

// // ref. 2:- Because promises takes 1st argument of its function, and because there are 2 arguments required; therefore...
// // ...adding another function with 2 needed arguments which will act as a function in the form of 1st argument in promise wrapper...

// /// “Promises only accept a function that takes one argument — resolve.”
// //// “But setTimeout needs two things: resolve and duration.”
// ///// “So I can’t give the Promise a function with two parameters.”
// ////// “Instead, I create a second function (with both arguments), and call it inside the first one.”
// /////// “This way, I follow the Promise structure, but still pass everything I need.”

// // ----------------------------------------------------------------------------------------
// // similar code to the above, like taking two arguments in a function, for that fucntion to work as 1st arugument insdie a promise


// const fs = require("fs");

// // BLOCK 1: core logic (takes resolve + duration)
// function fileWithDelayPromisified(resolve, duration) {
//     fs.readFile("(3.0.2)assignmentsPractices(1.1_promises_week2).md", "utf-8", function (err, data) {
//         if (err) {
//             console.log("❌ STATUS: File read failed.");
//         } else {
//             console.log("📁 STATUS: File read complete. Now delaying...");
//             setTimeout(function () {
//                 resolve(data);  // only resolve after the delay
//             }, duration);
//         }
//     });
// }

// // BLOCK 2: Promise wrapper (takes duration)
// function fileWithDelay(duration) {
//     return new Promise(function (resolve) {
//         fileWithDelayPromisified(resolve, duration); // ✅ manually pass both args
//     });
// }

// // BLOCK 3: .then() callback
// function displayAfterDelay(fileContents) {
//     console.log("✅ STATUS: File is now being displayed...");
//     console.log(fileContents);
// }

// // Trigger
// fileWithDelay(6000).then(displayAfterDelay);