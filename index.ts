#! /usr/bin/env node
import inquirer from "inquirer";

// game variable
let enemies = ["skeleton", "Zombie", "Warrior", "Assasin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;

// player variable
let heroHealth = 100;
let attckDamageToEnemy = 50;
let numhealthPotion = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50;

let gameRunning = true;
console.log("***________Welcome to Dead Zone________***");

GAME:
while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1)
    let enemyIndex = Math.floor(Math.random() * enemies.length + 1)
    let enemy = enemies[enemyIndex]

    console.log(`# ${enemy} has appeared #\n`)

    while (enemyHealth > 0) {
        console.log(`Your Health: ${heroHealth}`)
        console.log(`${enemy} Health: ${enemyHealth}`)

        let options = await inquirer.prompt([
            {
                name: "ans",
                type: "list",
                message: "What would you like to do?",
                choices: ["1. Attack", "2. Take Health Potion", "3. Run"]
            }
        ])

        if (options.ans === "1. Attack") {
            let attckDamageToEnemy = 50;
            let DamageToEnemy = Math.floor(Math.random() * attckDamageToEnemy + 1);
            let DamageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);

            enemyHealth -= DamageToEnemy;
            heroHealth -= DamageToHero;

            console.log(`You strike the ${enemy} for ${DamageToEnemy}`)
            console.log(`${enemy} strike you for ${DamageToHero} damage`)

            if (heroHealth < 1) {
                console.log(`You have taken too much damage. You are too weak to continue`)
                break;
            }
        }

        else if (options.ans === "2. Take Health potion") {
            if (numhealthPotion > 0) {
                heroHealth += healthPotionHealAmount
                numhealthPotion--
                console.log(`you use health potion for ${healthPotionHealAmount}`);
                console.log(`you now have ${heroHealth} health`);
                console.log(`you have ${numhealthPotion} health potions left.`);
            }
            else {
                console.log(`you have no health potions left. defeat enemy for a chance get health potion`);
            }
        }
        else if (options.ans === "3. Run") {
            console.log(`you run away from ${enemy}`);
            continue GAME;
        }
        if (heroHealth < 1) {
            console.log(`you are out from battle. you are too weak.`);
            break;
        }

        console.log(`${enemy} was defeated!`);
        console.log(`you have ${heroHealth} health.`);
        let randomNumber = Math.floor(Math.random() * 100 + 1)
        if (randomNumber < healthPotionDropChance) {
            numhealthPotion++
            console.log(`enemy give you health potion`);
            console.log(`your health is ${heroHealth}`);
            console.log(`your healt potion is ${numhealthPotion}`);
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log(" ")
        }
        let userOption = await inquirer.prompt([
            {
                name: "ans",
                type: "list",
                message: "what would you like to do now",
                choices: ["1. Continue", "2. Exit"]
            }
        ])

        if (userOption.ans === "1. Continue") {
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log("You are continue on your adventure")
        }
        else if (userOption.ans == "2. Exit"){
            console.log('You successfully Exit from Dead Zone')
        }

    }

    console.log("Thank You for Playing...\n")
}

