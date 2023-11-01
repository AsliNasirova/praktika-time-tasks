// task1
// const element = document.getElementById("demo");
// setInterval(function() {element.innerHTML += "Hello"}, 1000);

// let count = 1;
// setInterval(function () {
//   document.getElementById("demo").innerHTML = count++;
// }, 1000);

// task2
// let count = 1;
// setInterval(() => {
//     document.getElementById("demo").innerHTML=count++;
// }, 1000);


// const stop = document.getElementById("stop");


// task 3
// const myInterval = setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   document.getElementById("demo").innerHTML = date.toLocaleTimeString();
// }

// function myStopFunction() {
//   clearInterval(myInterval);
// }

// task 4
let demo=document.getElementById("demo")
let count=1
let myInt
function ashley() {
    demo.innerHTML=count
    count++
}