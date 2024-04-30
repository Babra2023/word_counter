#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

 // displaying colourfull message
 console.log(chalk.bold.bgCyan("\n \t\t Its a typescript project - Word Counter"));
 console.log("=" .repeat(50));

 let answers = await inquirer.prompt([
    {
        name: "sentence",
    }
 ]);

 let words = answers.sentence.trim().split(" ");

 console.log("=" .repeat(50));
 console.log(chalk.bold("- Sentence Words:"));
 console.log(words);
 console.log(chalk.bold(`\n - Word Count:${chalk.bold.bgCyan(words.length)}`));
 console.log("=". repeat(50));
