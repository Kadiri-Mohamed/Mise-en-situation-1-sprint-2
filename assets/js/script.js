// Sélection des éléments HTML
const sizeInput = document.getElementById('sizeInput');
const sortButton = document.getElementById('sortButton');
const resetButton = document.getElementById('resetButton');
const itemList = document.getElementById('itemList');
const countDisplay = document.getElementById('count');

// Stocker l'état initial des éléments pour pouvoir les réinitialiser
const originalItems = Array.from(itemList.children).map(item => item.textContent);

// Fonction pour mettre à jour le compteur d'éléments affichés
function updateCount() {
  const visibleItems = Array.from(itemList.children).filter(item => item.style.display !== 'none');
  countDisplay.textContent = visibleItems.length;
}

/**
 * Fonction pour filtrer les éléments de la liste en fonction de leur taille
 * @param {number} maxSize - La taille maximale des éléments à afficher
 */
function filterItemsBySize(maxSize) {
  const items = Array.from(itemList.children);

  // TODO: Parcourir les éléments et afficher uniquement ceux
  // dont la longueur du texte est égale ou inférieure à maxSize.
  // Utilisez item.style.display pour gérer l'affichage.
  
  // Piste pour la boucle : items.forEach(item => { ... });
  
  // Ne pas oublier de mettre à jour le compteur d'éléments visibles
  updateCount();
}

/**
 * Fonction pour trier les éléments de la liste en ordre alphabétique
 */
function sortItemsAlphabetically() {
  const items = Array.from(itemList.children);

  // TODO: Filtrer les éléments visibles, les trier par ordre alphabétique
  // avec localeCompare, puis les réinsérer dans itemList dans l'ordre.
  
}

/**
 * Fonction pour réinitialiser la liste d'éléments
 * et remettre le DOM dans son état initial
 */
function resetList() {
  // Supprimer les éléments actuels de la liste
  itemList.innerHTML = '';

  // Réinsérer les éléments originaux
  originalItems.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    itemList.appendChild(li);
  });

  // Réinitialiser le champ de saisie et le compteur
  sizeInput.value = '';
  updateCount();
}

// Événements
sizeInput.addEventListener('input', () => {
  const maxSize = parseInt(sizeInput.value);
  if (!isNaN(maxSize)) {
    filterItemsBySize(maxSize);
  }
});

sortButton.addEventListener('click', () => {
  sortItemsAlphabetically();
});

resetButton.addEventListener('click', () => {
  resetList();
});

// Initialiser le compteur au chargement
updateCount();