// Download inquier package from npm
const inquirer = require("inquirer");
const playGame = () => {
  inquirer
    .prompt([
      // Pass questions in here
      {
        type: "input",
        message: "What is your trainer name?",
        name: "trainerName",
      },
      {
        type: "password",
        message: "Set your password",
        name: "password",
      },
      {
        type: "list",
        message: "Select your starter Pokemon!",
        choices: ["Bulbasaur", "Squirtle", "Charmander", "Cyndaquil"],
        name: "pokemon",
      },
    ])
    .then((res) => {
      inquirer
        .prompt([
          {
            type: "input",
            message: `What will you name your ${res.pokemon}`,
            name: "pokemonName",
          },
        ])
        .then((inqRes) => {
          let trainerName = res.trainerName;
          let trainerPokemon = res.pokemon;
          let pokemonType = res.pokemon;
          let pokemonName = inqRes.pokemonName;
          console.log(`Welcome ${trainerName}`);
          console.log(
            `Your ${trainerPokemon}, ${pokemonName} is ready for battle!`
          );
          console.log(`A wild Caterpie appeared!`);
          console.log(`${trainerName}, called ${pokemonName} to battle!`);
          let pokemon_hp = 50;
          let cat_hp = 30;
          const battleSequence = (pokemon_hp, cat_hp, pokemonName) => {
            // // Subtracting random between 1-10 from our health points
            // pokemon_hp -= Math.floor(Math.random() * 10);
            // cat_hp -= Math.floor(Math.random() * 10);
            inquirer
              .prompt([
                {
                  type: "list",
                  message: "Which move will you attack with?",
                  choices: ["Tackle", "Sand Attack", "Glare"],
                  name: "attack",
                },
              ])
              .then((res) => {
                // Subtracting random between 1-10 from our health points
                pokemon_hp -= Math.floor(Math.random() * 10);
                cat_hp -= Math.floor(Math.random() * 10);
                console.log(`${pokemonName} used ${res.attack}`);
                console.log(`Caterpie has ${cat_hp} health points remaining`);
                console.log(`Caterpie used Tackle`);
                console.log(
                  `${pokemonName} has ${pokemon_hp} health points remaining`
                );
                if (pokemon_hp <= 0) {
                  console.log(`${pokemonName} has fainted, you blackout...`);
                } else if (cat_hp <= 0) {
                  console.log(`Caterpie fainted, you won!`);
                } else {
                  battleSequence(pokemon_hp, cat_hp, pokemonName);
                }
              });
          };

          battleSequence(pokemon_hp, cat_hp, pokemonName);
        });
    });
};

playGame();
