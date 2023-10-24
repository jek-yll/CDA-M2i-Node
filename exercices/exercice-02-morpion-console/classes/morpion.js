export class Morpion {
  constructor() {
    this.grille = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    this.joueurCourant = 'X';
    this.partieGagnee = false;
  }

  jouer(coup, ligne, colonne) {
    if (this.partieGagnee) {
      console.log('La partie est terminée.');
      return;
    }

    if (this.grille[ligne][colonne] === ' ') {
      this.grille[ligne][colonne] = coup;
      this.afficherGrille();
      if (this.verifierVictoire(coup)) {
        this.partieGagnee = true;
        console.log(`Le joueur ${coup} a gagné !`);
      } else {
        this.joueurCourant = (this.joueurCourant === 'X') ? 'O' : 'X';
      }
    } else {
      console.log('La case est déjà occupée. Réessayez.');
    }
  }

  verifierVictoire(coup) {
  // Victoire en diagonale
  if (
    (this.grille[0][0] === coup && this.grille[1][1] === coup && this.grille[2][2] === coup) ||
    (this.grille[0][2] === coup && this.grille[1][1] === coup && this.grille[2][0] === coup)
  ) {
    return true;
  }

  // Victoire horizontale ou verticale
  for (let i = 0; i < 3; i++) {
    if (
      (this.grille[i][0] === coup && this.grille[i][1] === coup && this.grille[i][2] === coup) ||
      (this.grille[0][i] === coup && this.grille[1][i] === coup && this.grille[2][i] === coup)
    ) {
      return true;
    }
  }
  
  // Cas d'égalité
  let estGrilleComplete = true;
  for (let ligne of this.grille) {
    for (let caseGrille of ligne) {
      if (caseGrille === ' ') {
        estGrilleComplete = false;
        break;
      }
    }
  }

  if (estGrilleComplete) {
    console.log('Match nul !');
    return true;
  }

  return false;
}

  afficherGrille() {
    console.log('Grille actuelle :');
    for (let ligne of this.grille) {
      console.log(ligne.join(' '));
    }
  }
}