// // Does not work by itself in VS code node envoirnment
// let name = prompt("What is your name?");
// let age = prompt("What is your age?");
// console.log(`Hello ${name}, you are ${age} years old.`);

// To make it work, we need to install prompt-sync and export it
// npm install prompt-sync
const prompt = require('prompt-sync')();
let name = prompt("What is your name? ");
let age = prompt("What is your age? ");
console.log(`Hello ${name}, you are ${age} years old.`);
