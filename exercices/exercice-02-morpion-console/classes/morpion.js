import { input } from "../tools.js";

export class Morpion {

    constructor() {
        this.plateau = ["","","","","","","","",""]
        //this.pion = {ligne: 0, colonne: 0}
    }

    /* async jouer() {
        let nbTour = 1;
        let vitcoire = false

        while (!vitcoire) {

            if (nbTour % 2 === 0){
                let joueur = "joueur 1"
                let pion = true
            } else {
                let joueur = "joueur 2"
                let pion = false
            }   
        }
    } */

    async tour() {

        let nbTour = 1
        let pion = {}
        let joueur = ""
        let victoire = false

        while (!victoire)  {
            if (nbTour % 2 === 0) {
                joueur = "X"
                
            } else {
                joueur = "O"
            }

            let ligne = await input("saisir la ligne: ");
            let colonne = await input("saisir la colonne: ");
            pion = {ligne, colonne}

            console.log(pion);
            
            switch (pion) {
                case {ligne: 1, colonne: 1}: 
                    this.plateau[0] = "0"
                case {ligne: 1, colonne: 2}:
                    this.plateau[1] = joueur
                case {ligne: 1, colonne: 3}:
                    this.plateau[2] = joueur
                case {ligne: 2, colonne: 1}:
                    this.plateau[3] = joueur
                case {ligne: 2, colonne: 2}:
                    this.plateau[4] = joueur
                case {ligne: 2, colonne: 3}:
                    this.plateau[5] = joueur
                case {ligne: 3, colonne: 1}:
                    this.plateau[6] = joueur
                case {ligne: 3, colonne: 2}:
                    this.plateau[7] = joueur
                case {ligne: 3, colonne: 3}:
                    this.plateau[8] = joueur
            }
    
            console.log(this.plateau);
        }
        


    }

    async victoire() {
        this.plateau.forEach(element => {
            
        });
    }
}