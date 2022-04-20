let modalContainer = document.createElement('div');
modalContainer.setAttribute('id', 'modal');
let customBox = document.createElement('div');
customBox.className = 'custom-box';

export function displayRules () {
  customBox.innerText = `Le jeu comprend 2 joueurs.
  Chaque joueur possède un score temporaire (CURRENT) et un score TOTAL.
  À chaque tour, le joueur a son CURRENT initialisé à 0 et peut lancer le dé (ROLL DICE) autant de fois qu'il le souhaite. 
  Le résultat d’un lancer est ajouté au CURRENT.
  Lors de son tour, le joueur peut décider à tout moment de:
    - Cliquer sur l’option "HOLD", pour envoyer les points du CURRENT vers le TOTAL.. Ce sera alors au tour de l’autre joueur de lancer le dé.
    - Lancer le dé "ROLL DICE". S’il obtient un 1, son score CURRENT est perdu et c’est la fin de son tour.
  Le premier joueur qui atteint les 100 points au TOTAL gagne le jeu.
  `;
  customBox.innerHTML += '<button id="modal-close">OK</button>';
  modalShow();
};
function modalShow() {
  modalContainer.appendChild(customBox);
  document.body.appendChild(modalContainer);

  document.getElementById('modal-close').addEventListener('click', function() {
    modalClose();
  });

  if (document.getElementById('modal-confirm')) {
    document.getElementById('modal-confirm').addEventListener('click', function () {
      console.log('Confirmé !');
      modalClose();
    });
  } else if (document.getElementById('modal-submit')) {
    document.getElementById('modal-submit').addEventListener('click', function () {
      console.log(document.getElementById('modal-prompt').value);
      modalClose();
    });
  }
}
function modalClose() {
  while (modalContainer.hasChildNodes()) {
    modalContainer.removeChild(modalContainer.firstChild);
  }
  document.body.removeChild(modalContainer);
}