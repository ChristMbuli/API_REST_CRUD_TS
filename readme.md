# Book API

Cette API est construite avec Node.js, Express, Mongoose et TypeScript. Elle permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur une collection de livres dans une base de données MongoDB. Elle est destinée aux développeurs frontend souhaitant tester et interagir avec les données de livres pour leurs interfaces utilisateurs.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) installé et en cours d'exécution

## Installation

1. Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/votre-nom-utilisateur/book-api.git

cd book-api
npm install

Démarrage du serveur
Pour démarrer le serveur en mode développement avec nodemon :

npm run start

Routes API
Voici les différentes routes disponibles pour interagir avec l'API :

1. Créer un nouveau livre
URL : /api/book/new
Méthode : POST
Description : Cette route permet de créer un nouveau livre en envoyant les détails via un corps JSON.
Corps de requête :
{
  "title": "Nom du livre",
  "author": "Nom de l'auteur",
  "description": "Description du livre",
  "categorie": "Catégorie du livre",
  "pages": 123,
  "cover": "URL de l'image de couverture"
}

2. Obtenir tous les livres
URL : /api/book/
Méthode : GET
Description : Cette route renvoie tous les livres présents dans la base de données.
3. Mettre à jour un livre
URL : /api/book/update/:id
Méthode : PUT
Description : Cette route met à jour les informations d'un livre spécifique.
Corps de requête :
{
  "title": "Nouveau titre du livre",
  "author": "Nouvel auteur",
  "description": "Nouvelle description",
  "categorie": "Nouvelle catégorie",
  "pages": 200,
  "cover": "Nouvelle URL de l'image de couverture"
}

4. Supprimer un livre
URL : /api/book/delete/:id
Méthode : DELETE
Description : Cette route supprime un livre en fonction de l'ID fourni.

/src
├── controllers
│   └── bookController.ts   # Gestion des requêtes API
├── models
│   └── Book.ts             # Modèle Mongoose pour le livre
├── routes
│   └── bookRoutes.ts       # Routes liées aux opérations sur les livres
├── index.ts                # Point d'entrée de l'application


Voici un exemple de fichier README.md pour ton API CRUD de livres :

md
Copier le code
# Book API

Cette API est construite avec Node.js, Express, Mongoose et TypeScript. Elle permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur une collection de livres dans une base de données MongoDB. Elle est destinée aux développeurs frontend souhaitant tester et interagir avec les données de livres pour leurs interfaces utilisateurs.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) installé et en cours d'exécution

## Installation

1. Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/votre-nom-utilisateur/book-api.git
Accédez au répertoire du projet :
bash
Copier le code
cd book-api
Installez les dépendances :
bash
Copier le code
npm install
Créez un fichier .env à la racine du projet et ajoutez-y la connexion MongoDB :
env
Copier le code
MONGO_URI=mongodb://localhost:27017/bookdb
PORT=5000
Démarrage du serveur
Pour démarrer le serveur en mode développement avec nodemon :

bash
Copier le code
npm run start
Le serveur sera disponible sur http://localhost:5000.

Routes API
Voici les différentes routes disponibles pour interagir avec l'API :

1. Créer un nouveau livre
URL : /api/book/new
Méthode : POST
Description : Cette route permet de créer un nouveau livre en envoyant les détails via un corps JSON.
Corps de requête :
json
Copier le code
{
  "title": "Nom du livre",
  "author": "Nom de l'auteur",
  "description": "Description du livre",
  "categorie": "Catégorie du livre",
  "pages": 123,
  "cover": "URL de l'image de couverture"
}
2. Obtenir tous les livres
URL : /api/book/
Méthode : GET
Description : Cette route renvoie tous les livres présents dans la base de données.
3. Mettre à jour un livre
URL : /api/book/update/:id
Méthode : PUT
Description : Cette route met à jour les informations d'un livre spécifique.
Corps de requête :
json
Copier le code
{
  "title": "Nouveau titre du livre",
  "author": "Nouvel auteur",
  "description": "Nouvelle description",
  "categorie": "Nouvelle catégorie",
  "pages": 200,
  "cover": "Nouvelle URL de l'image de couverture"
}
4. Supprimer un livre
URL : /api/book/delete/:id
Méthode : DELETE
Description : Cette route supprime un livre en fonction de l'ID fourni.
Structure du Projet
bash
Copier le code
/src
├── controllers
│   └── bookController.ts   # Gestion des requêtes API
├── models
│   └── Book.ts             # Modèle Mongoose pour le livre
├── routes
│   └── bookRoutes.ts       # Routes liées aux opérations sur les livres
├── index.ts                # Point d'entrée de l'application
Tester l'API
Vous pouvez utiliser des outils comme Postman ou Insomnia pour tester les différentes routes de l'API en simulant des requêtes HTTP.

Exemple d'une requête POST avec Postman
Ouvrez Postman.
Sélectionnez la méthode POST.
Entrez l'URL : http://localhost:9000/api/book/new
Dans l'onglet Body, sélectionnez raw et JSON, puis entrez les données du livre comme suit :
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "Un roman sur le rêve américain",
  "categorie": "Fiction",
  "pages": 180,
  "cover": "https://example.com/covers/gatsby.jpg"
}

Contribution
Les contributions sont les bienvenues ! N'hésitez pas à proposer des améliorations ou à signaler des problèmes.

Forkez le projet
Créez une branche (git checkout -b feature/Amelioration)
Commitez vos modifications (git commit -am 'Ajout de nouvelles fonctionnalités')
Poussez sur la branche (git push origin feature/Amelioration)
Ouvrez une Pull Request
