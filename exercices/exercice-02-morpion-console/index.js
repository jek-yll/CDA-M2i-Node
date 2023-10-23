import { Ihm } from "./classes/ihm.js";
import { Morpion } from "./classes/morpion.js";
import { input } from "./classes/ihm.js";

async function jouerPartie() {
  const jeu = new Morpion();
  const interfaceJeu = new Ihm(jeu);

  while (!jeu.partieGagnee) {
    const ligne = parseInt(await input(`Joueur ${jeu.joueurCourant}, entrez le numéro de ligne (0, 1, ou 2) : `));
    const colonne = parseInt(await input(`Joueur ${jeu.joueurCourant}, entrez le numéro de colonne (0, 1, ou 2) : `));

    if ( ligne < 0 || ligne > 2 || colonne < 0 || colonne > 2) {
      console.log('Saisie invalide. Les numéros de ligne et de colonne doivent être 0, 1 ou 2.');
      continue;
    }

    interfaceJeu.jouerCoup(ligne, colonne);
  }
}

jouerPartie();
