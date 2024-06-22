import inquirer from "inquirer";
// game variable
var enemies = ["skeleton", "Zombie", "Warrior", "Assasin"];
var maxEnemyHealth = 75;
var enemyAttackDamageToHero = 25;
// player variable
var heroHealth = 100;
var attckDamageToEnemy = 50;
var numhealthPotion = 3;
var healthPotionHealAmount = 30;
var healthPotionDropChance = 50;
var gameRunning = true;
console.log("***________Welcome to Dead Zone________***");
GAME: while (gameRunning) {
    var enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    var enemyIndex = Math.floor(Math.random() * enemies.length + 1);
    var enemy = enemies[enemyIndex];
    console.log("# ".concat(enemy, " has appeared #\n"));
    while (enemyHealth > 0) {
        console.log("Your Health: ".concat(heroHealth));
        console.log("".concat(enemy, " Health: ").concat(enemyHealth));
        var options = await inquirer.prompt([
            {
                name: "ans",
                type: "list",
                message: "What would you like to do?",
                choices: ["1. Attack", "2. Take Health Potion", "3. Run"]
            }
        ]);
        if (options.ans === "1. Attack") {
            var attckDamageToEnemy_1 = 50;
            var DamageToEnemy = Math.floor(Math.random() * attckDamageToEnemy_1 + 1);
            var DamageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= DamageToEnemy;
            heroHealth -= DamageToHero;
            console.log("You strike the ".concat(enemy, " for ").concat(DamageToEnemy));
            console.log("".concat(enemy, " strike you for ").concat(DamageToHero, " damage"));
            if (heroHealth < 1) {
                console.log("You have taken too much damage. You are too weak to continue");
                break;
            }
        }
        else if (options.ans === "2. Take Health potion") {
            if (numhealthPotion > 0) {
                heroHealth += healthPotionHealAmount;
                numhealthPotion--;
                console.log("you use health potion for ".concat(healthPotionHealAmount));
                console.log("you now have ".concat(heroHealth, " health"));
                console.log("you have ".concat(numhealthPotion, " health potions left."));
            }
            else {
                console.log("you have no health potions left. defeat enemy for a chance get health potion");
            }
        }
        else if (options.ans === "3. Run") {
            console.log("you run away from ".concat(enemy));
            continue GAME;
        }
        if (heroHealth < 1) {
            console.log("you are out from battle. you are too weak.");
            break;
        }
        console.log("".concat(enemy, " was defeated!"));
        console.log("you have ".concat(heroHealth, " health."));
        var randomNumber = Math.floor(Math.random() * 100 + 1);
        if (randomNumber < healthPotionDropChance) {
            numhealthPotion++;
            console.log("enemy give you health potion");
            console.log("your health is ".concat(heroHealth));
            console.log("your healt potion is ".concat(numhealthPotion));
        }
        var userOption = await inquirer.prompt([
            {
                name: "ans",
                type: "list",
                message: "what would you like to do now",
                choices: ["1. Continue", "2. Exit"]
            }
        ]);
        if (userOption.ans === "1. Continue") {
            console.log("You are continue on your adventure");
        }
        else {
            console.log('You successfully Exit from Dead Zone');
        }
    }
    console.log("Thank You for Playing...\n");
}
