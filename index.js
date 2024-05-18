#! /usr/bin/env node
// SHABANG
import inquirer from "inquirer";
// Declare a constant `answer` and assign it to result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to count the word"
    }
]);
const words = answers.Sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
// Print the word count of the sentence to the console
console.log(`Your Sentence Word count is ${words.length}`);
