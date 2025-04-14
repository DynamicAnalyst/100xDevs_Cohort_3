// function sum(a, b) {
//     let totalSum = a + b;
//     return totalSum;
// }

// let ans = sum(1, 2);
// let ans2 = sum(3, 4);

// console.log(ans);
// console.log(ans2);

//=====================================================================================================================
// Write a function "sum" that finds the sum of two numbers
//Side Quest:- try pasing a string and see what happens

// function sum(a, b) {
//     let sumAns = a + b;
//     return sumAns;
// }
// let finalAns = sum(10, 50);
// console.log (finalAns);

// let finalAns2 = sum(Abc, xyz);
// console.log (finalAns2)

//=====================================================================================================================
//Write a function called canVote that return true or false if the age of a user is > 18

// function canVote(usersAge){
//     if (usersAge > 18){
//         return true;
//     } else {
//         return false;
//     } 
// }

// let finalInput = canVote(19);
// let finalInput2 = canVote(10);

// console.log (finalInput);
// console.log (finalInput2);

//=====================================================================================================================
//Write a function that takes "user" as an input and greets them with their name and age

// let user1 ={
//     personName:"Arihant",
//     age: 32
// }

// let user2 ={
//     personName:"Hansroy",
//     age: 33
// }

// let user3={
//     personName:"Harikirat",
//     age: 30
// }


// function greetUser(user){
//     console.log("The person's name is " + user.personName + " and the users age is " + user.age);
// }

// greetUser(user1);
// greetUser(user2);
// greetUser(user3);

//=====================================================================================================================
//Write a function that takes a new object as input which has "name", "age,", and "gender" and greets the user with their gender (Hi "Mr/Mrs/Others" harkirat, your age is 21)
// Also tell the user if they are legal to vote or not

// let person1 ={
//     username:"Arihant",
//     age: "33",
//     genderSuffix: "Mr."
// }

// let person2 ={
//     username:"Hansroy",
//     age: "33",
//     genderSuffix: "Mr."
// }

// let person3 ={
//     username:"Harkirat",
//     age: "21",
//     genderSuffix: "Mr."
// }

// let person4 ={
//     username:"Catherine",
//     age: "33",
//     genderSuffix: "Mrs."
// }

// let person5 ={
//     username:"Kiran",
//     age: "16",
//     genderSuffix: "Master."
// }

// function greetUser(acdf) {
//     if (acdf.age > 18) {
//         console.log("Hi there! Welcome " + acdf.genderSuffix + " " + acdf.username + " your age is registered as " + acdf.age + " therefore you are ELIGIBLE to vote");
//     } else {
//         console.log("Hi there! Welcome " + acdf.genderSuffix + " " + acdf.username + " your age is registered as " + acdf.age + " therefore you are NOT ELIGIBLE to vote");
//     }
    
// }

// greetUser(person1);
// greetUser(person2)
// greetUser(person3);
// greetUser(person4);
// greetUser(person5);

//=====================================================================================================================
//arrays of objects

// let arr =["harkirat", 24, {
//     name: "harkirat",
//     age: 21,
//     cities: ["delhi", "chandigarh", "bangalore", {
//         country:"malayasia",
//         city: "kuala lumpur"
//     }]
// }];

// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[2].cities[0]);
// console.log(arr[2].cities[3].country);


//=====================================================================================================================
//Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

let arr1 =[
    {personName: "Arihant", personAge: 33, personGender: "male"},
    {personName: "Hansroy", personAge: 33, personGender: "male"},
    {personName: "Harkirat", personAge: 16, personGender: "male"}
];

let arr2 =[
    {personName: "Kiran", personAge: 19, personGender: "male"},
    {personName: "Soumya", personAge: 23, personGender: "female"},
    {personName: "Simran", personAge: 12, personGender: "female"}
];

function eligibleMales(neededOutput) {
    let result = []                              //store eligible males

    for (let i = 0; i < neededOutput.length; i++){
            if (neededOutput[i].personAge>18 && neededOutput[i].personGender === "male") {
                result.push(neededOutput[i])    //Add to result array
            }        
    } 

    if(result.length> 0) {
        console.log(result);                    //Print eligible males
    } else {
        console.log ("No Eligible males found");
    }
}

eligibleMales(arr1);
eligibleMales(arr2);

//=====================================================================================================================

