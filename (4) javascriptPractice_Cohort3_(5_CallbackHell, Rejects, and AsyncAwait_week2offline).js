// CALLBACK HELL

/// logs 'hi' after 6 second
//// logs 'hello', 3 seocnds after previous step
///// logs 'hello there' 5 seconds previous step


// //  Callback Version



// setTimeout(function (){              // ref.... callback hell  1
//     console.log ("hi");
//     setTimeout(function(){
//         console.log("hello");
//         setTimeout(function(){
//             console.log("hello")
//         }, 5000)
//     }, 3000)
// }, 6000)

// /// The `function` is being passed into `setTimeout()` — so setTimeout is the function doing the “calling back.”
// /// You’re passing a function as an argument — and that’s literally what a callback is and  it’s called back later — after the timer.
// //-----------------------------------------------------
// ///// this is an important explanation of the above code

// /// imagine you have ...

// function callback(){         //  part 1
//     console.log("123");
// }

// setTimeout (callback, 2000); // part 2

// /// now imagine copy pasting part 1 into part 2 and just removing function name; i.e. "callback"


// setTimeout (function(){     // part 2 merged here withoout the name, which makes it anonymous function
//     console.log("123");
// }, 2000);

// //-----------------------------------------------------

// // at the above code is very ugly.. lets do visually pleasing and DO NOT have callback hell, BUT HAVE callbacks. you can do the following type coding practices to get around callback hells.


// function step3Done(){ // final executor, when called back then prints its task after 5 seconds
//     console.log("hello there");
// }

// function step2Done(){ // second executor calling back the third executor..saying get the task of step 2 done (step2Done), once done print after 1 seconds...&&..
//     console.log("hello");
//     setTimeout(step3Done, 5000); // ... && then callback the step3Done and when finished, print after 5 seconds..
// }

// function step1Done(){ // first executor calling back the second executor..saying get the task of step 1 done (step1Done), once done print after 1 seconds...&&..
//     console.log("hi");
//     setTimeout(step2Done, 3000); // ... && then callback the step2Done and when finished, print after 3 seconds..
// }

// setTimeout(step1Done, 1000); // first executor..saying get the task of step 1 done (step1Done), once done print after 1 seconds

// //-----------------------------------------------------

// // promisifed version (has .then kind of hell)

// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve, duration);
//     });
// }

// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("hello");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("hi there");
//         })
//     })
// })

// console.log("outside .then hell");

// //-----------------------------------------------------

// // lets put some restriction. you need to use anonymous function

// // promise chaining (slightly cleaner syntaxing compared to callbacks)

// function setTimeoutPromise(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve, duration);
//     });
// }

// setTimeoutPromise(1000).then(function(){
//     console.log("hi");
//     return setTimeoutPromise(3000)
// }).then(function(){
//     console.log("hello");
//     return setTimeoutPromise(5000)
// }).then (function(){
//     console.log("hi there")
// });

// //-----------------------------------------------------

// // Async Await syntax

// //The 'aync' and 'await' syntax in Javascript provides a way to write asynchronous code that looks and behave like ...
// // ... synchronous code, makign it easier to read and maintain.

// // the following code is much easier to write and read...

// function setTimeoutPromise(duration){
//     return new Promise(function (resolve){
//         setTimeout(resolve, duration);
//     });
// }

// async function solve(){
//     await setTimeoutPromise(1000);
//         console.log("hi");
//     await setTimeoutPromise(3000);
//         console.log("hello");
//     await setTimeoutPromise(5000);
//         console.log("hi there");
// }

// solve();

// //=======================================================================

// // err & catch

// // err first callback VS rejects in promises

const fs = require("fs");

// // this portion of the code is unnecessary but kept for undertanding purpose
// // -----------
// function setTimeoutPromisified(duration){
//     return new Promise (function(resolve, reject){                              // reject is not necessary here but kept for understanding that in promise function do take two arguments but its works in EITHER or OR...meaning either it will either resolve or reject 
//         setTimeout(resolve, duration);
//     });
// };
// // -----------

function readFileAsync(){
    return new Promise(function(resolve, reject){
        fs.readFile("a.txt", "utf-8", function (err, data){                     // reject is not necessary here but kept for understanding that in promise function do take two arguments but its works in EITHER or OR...meaning either it will either resolve or reject 
            if (err){
                reject("File not found")
            } else {
                resolve(data);                                                  // previously i was doing console.log...but now this is using .catch
            }
        })
    })
}

readFileAsync()
    .then(function(resolve){                                                    // instead of `resolve`..i can name anything but that needs to match in console.log
        console.log("File SUCCESSFULLY read and being displayed..." + resolve)
    })
    .catch(function(reject){ // instead of `reject`..i can name anything but that needs to match in console.log
        console.log(reject);
    })

// // IMPORTANT NOTE:-

// // Some callbacks never fail or goes error. Its is timer whose purpose is to wait.

// // But callbacks like reading file can encounter error or it may successfully read.