# Mise en Situation JavaScript - Filtrage et Tri de Liste Dynamique

## Description

Ce projet consiste à développer une interface web dynamique qui permet de manipuler une liste de prénoms. En utilisant HTML, CSS et JavaScript, les apprenants doivent implémenter la logique permettant de filtrer la liste par longueur de chaîne et de trier les prénoms en ordre alphabétique. Une fonction de réinitialisation est également incluse pour remettre la liste dans son état d'origine. 

Ce projet est conçu pour améliorer les compétences des apprenants en JavaScript, en particulier en manipulation du DOM.

## Objectifs d'Apprentissage

- Manipuler le DOM avec JavaScript.
- Utiliser des filtres et des conditions pour afficher et masquer des éléments.
- Utiliser la fonction `localeCompare` pour trier des chaînes de manière alphabétique.
- Comprendre et manipuler les événements (`input`, `click`) pour rendre une interface interactive.
- Concevoir un script JavaScript structuré et commenté.

## Structure du Projet

Le projet comprend trois fichiers principaux :

- **index.html** : Contient la structure HTML de la page, y compris les éléments d'entrée (champ de nombre, boutons de tri et de réinitialisation) et la liste de prénoms.
- **style.css** : Applique un style moderne, inspiré de sites comme Airbnb, pour rendre l'interface attrayante et responsive.
- **script.js** : Contient le code JavaScript pour manipuler le DOM, y compris des fonctions vides que les apprenants doivent compléter.

## Fonctionnalités

1. **Filtrage par Longueur de Chaîne** : 
   - L’utilisateur entre un nombre dans le champ prévu à cet effet, et la liste affiche uniquement les prénoms dont la longueur de chaîne est égale ou inférieure au nombre saisi.
   
2. **Tri Alphabétique** :
   - En cliquant sur le bouton de tri, les prénoms visibles sont triés par ordre alphabétique.

3. **Réinitialisation** :
   - Le bouton de réinitialisation permet de rétablir la liste de prénoms dans son état d'origine, d'effacer le champ d'entrée et de remettre à jour le compteur d'éléments.

## Instructions

### Prérequis

- Un navigateur web moderne (Google Chrome, Firefox, Safari, etc.).

### Lancement du Projet

1. Téléchargez les fichiers du projet.
2. Ouvrez `index.html` dans un navigateur pour visualiser la page.
3. Le fichier `script.js` contient des fonctions que vous devez compléter.

### Instructions pour Compléter les Fonctions

#### 1. Fonction `filterItemsBySize`

- **Description** : Filtre les éléments de la liste en fonction de leur longueur.
- **Paramètre** : `maxSize` (le nombre maximum de caractères autorisés).
- **À faire** :
  - Parcourez chaque élément de la liste.
  - Affichez les prénoms dont la longueur est égale ou inférieure à `maxSize`.
  - Masquez les autres.
  - Mettez à jour le compteur d'éléments visibles en appelant `updateCount()`.

#### 2. Fonction `sortItemsAlphabetically`

- **Description** : Trie la liste de prénoms visibles par ordre alphabétique.
- **À faire** :
  - Filtrez les prénoms visibles uniquement.
  - Triez ces prénoms avec la méthode `localeCompare` pour assurer un tri correct.
  - Insérez les éléments triés dans le DOM.

### Exemple de Résultat Attendu

1. **Filtrage** : Si l’utilisateur entre "5" dans le champ, seuls les prénoms de 5 caractères ou moins s’affichent.
2. **Tri Alphabétique** : Après le tri, la liste des prénoms visibles doit être ordonnée alphabétiquement.

## Conseils

- Utilisez `item.style.display` pour masquer ou afficher les éléments en fonction du filtrage.
- Pensez à tester vos fonctions avec des valeurs différentes pour valider le comportement attendu.

Voici une section de documentation ajoutée au README pour expliquer les méthodes JavaScript **`forEach`**, **`localeCompare`**, **`filter`** et **`sort`**. Chaque explication inclut un exemple général pour aider à comprendre l'usage de ces méthodes en dehors du contexte de l'exercice.

---

## Documentation des Méthodes JavaScript Utilisées

### 1. `forEach()`

La méthode `forEach` est utilisée pour parcourir chaque élément d'un tableau. Elle exécute une fonction pour chaque élément sans modifier le tableau d'origine.

- **Syntaxe** : 
  ```javascript
  array.forEach(function(currentValue, index, array) {
    // Opérations à exécuter
  });
  ```

- **Exemple** :
  ```javascript
  const nombres = [1, 2, 3, 4, 5];
  nombres.forEach(nombre => {
    console.log(nombre * 2); // Affiche 2, 4, 6, 8, 10
  });
  ```
  
Dans cet exemple, `forEach` exécute une fonction qui multiplie chaque nombre par 2 et l'affiche dans la console.

### 2. `localeCompare()`

La méthode `localeCompare` est utilisée pour comparer deux chaînes de caractères en tenant compte des conventions linguistiques, ce qui est particulièrement utile pour trier des chaînes en ordre alphabétique.

- **Syntaxe** :
  ```javascript
  string1.localeCompare(string2);
  ```
  - Retourne un nombre négatif si `string1` est avant `string2`.
  - Retourne `0` si les deux chaînes sont identiques.
  - Retourne un nombre positif si `string1` est après `string2`.

- **Exemple** :
  ```javascript
  const noms = ["Anna", "Éric", "Bob"];
  noms.sort((a, b) => a.localeCompare(b));
  console.log(noms); // Affiche ["Anna", "Bob", "Éric"]
  ```
  
Dans cet exemple, `localeCompare` trie les noms en tenant compte des accents.

### 3. `filter()`

La méthode `filter` crée un nouveau tableau avec tous les éléments qui passent un test fourni sous forme de fonction. Elle est utile pour sélectionner des éléments spécifiques d'un tableau.

- **Syntaxe** :
  ```javascript
  const nouveauTableau = array.filter(function(element) {
    return condition;
  });
  ```

- **Exemple** :
  ```javascript
  const nombres = [1, 2, 3, 4, 5];
  const nombresPairs = nombres.filter(nombre => nombre % 2 === 0);
  console.log(nombresPairs); // Affiche [2, 4]
  ```
  
Dans cet exemple, `filter` renvoie un tableau contenant uniquement les nombres pairs.

### 4. `sort()`

La méthode `sort` trie les éléments d'un tableau en place et retourne le tableau trié. Par défaut, `sort` trie les éléments en tant que chaînes de caractères, mais on peut fournir une fonction de comparaison pour un tri plus spécifique (par exemple, ordre numérique ou alphabétique).

- **Syntaxe** :
  ```javascript
  array.sort(function(a, b) {
    return a - b; // Pour un tri numérique
  });
  ```

- **Exemple (Tri Numérique)** :
  ```javascript
  const nombres = [5, 1, 3, 8, 2];
  nombres.sort((a, b) => a - b);
  console.log(nombres); // Affiche [1, 2, 3, 5, 8]
  ```

- **Exemple (Tri Alphabétique)** :
  ```javascript
  const fruits = ["banane", "pomme", "orange"];
  fruits.sort();
  console.log(fruits); // Affiche ["banane", "orange", "pomme"]
  ```

Dans cet exemple, `sort` trie les fruits en ordre alphabétique. Utiliser une fonction de comparaison avec `localeCompare` permet de gérer des cas sensibles à la langue, comme vu précédemment.

---

Bonne chance !