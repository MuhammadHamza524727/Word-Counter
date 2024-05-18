#! /usr/bin/env node
//  This line is called a SHABANG
import inquirer  from "inquirer";
import chalk from "chalk";

// Declare a constant `answer` and assign it to result of inquirer.prompt function

const answers:{
    Sentence: string
} = await inquirer.prompt([
    {
        name:"Sentence",
        type:"input",
        message:"Enter your Sentence to count the word"

    }
])

const words = answers.Sentence.trim().split(" ")

//print the array of words to the console
console.log(words)

// Print the word count of the sentence to the console
console.log(`Your Sentence Word count is ${words.length}`);


