import readline from "readline";

export class Ihm {
    constructor(morpion) {
      this.morpion = morpion;
    }
  
    async jouerCoup(ligne, colonne) {
      this.morpion.jouer(this.morpion.joueurCourant, ligne, colonne);
    }
  }
  
export function input(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
  
}

export function ecritureFichier () {
  
}