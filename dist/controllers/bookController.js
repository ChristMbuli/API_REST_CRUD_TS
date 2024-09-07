"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.newBook = exports.getBookById = exports.getAllBooks = void 0;
const bookModel_js_1 = __importDefault(require("../models/bookModel.js")); // Import du modèle Book
// Récupérer tous les livres
const getAllBooks = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Récupère tous les livres dans la base de données
        const books = yield bookModel_js_1.default.find();
        // Retourne les livres avec un statut 200 (succès)
        return response.status(200).json({ data: books });
    }
    catch (error) {
        // En cas d'erreur, renvoie un statut 400 (erreur de requête)
        return response.sendStatus(400);
    }
});
exports.getAllBooks = getAllBooks;
// Récupérer un livre par son ID
const getBookById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Récupère l'ID du livre depuis les paramètres de la requête
        const { id } = request.params;
        // Recherche du livre par son ID
        const book = yield bookModel_js_1.default.findById(id);
        // Si le livre n'est pas trouvé, renvoie un message d'erreur avec un statut 404
        if (!book) {
            return response.status(404).json({ message: "Book not found" });
        }
        // Si le livre est trouvé, retourne-le avec un statut 200 (succès)
        return response.status(200).json({ data: book });
    }
    catch (error) {
        // En cas d'erreur, renvoie un statut 400 (erreur de requête)
        return response.status(400).json({ message: "Invalid request" });
    }
});
exports.getBookById = getBookById;
// Créer un nouveau livre
const newBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extraction des informations du livre depuis le corps de la requête
        const { title, author, description, categorie, pages, cover } = request.body;
        // Création d'un nouvel objet Book avec les informations fournies
        const book = new bookModel_js_1.default({
            title,
            author,
            description,
            categorie,
            pages,
            cover,
        });
        // Sauvegarde du livre dans la base de données
        yield book.save();
        // Réponse avec un message de succès et les détails du livre ajouté
        return response
            .status(200)
            .json({ message: "Book added successfully", data: book });
    }
    catch (error) {
        // En cas d'erreur, renvoie un statut 400
        return response.sendStatus(400);
    }
});
exports.newBook = newBook;
// Mettre à jour un livre existant
const updateBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Récupère l'ID du livre à partir des paramètres
        const { id } = request.params;
        // Récupère les informations mises à jour du livre
        const { title, author, description, categorie, pages, cover } = request.body;
        // Recherche du livre par ID et mise à jour avec les nouvelles données
        const book = yield bookModel_js_1.default.findById(id);
        if (book) {
            // Mise à jour des champs du livre s'il est trouvé
            book.title = title;
            book.author = author;
            book.description = description;
            book.categorie = categorie;
            book.pages = pages;
            book.cover = cover;
            // Sauvegarde des modifications
            yield book.save();
            // Réponse avec un message de succès et les détails du livre mis à jour
            return response
                .status(200)
                .json({ message: "Book updated successfully!", data: book });
        }
        // Si le livre n'est pas trouvé
        return response.status(404).json({ message: "Book not found" });
    }
    catch (error) {
        // En cas d'erreur, renvoie un statut 400
        return response.sendStatus(400);
    }
});
exports.updateBook = updateBook;
// Supprimer un livre par son ID
const deleteBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Récupère l'ID du livre à partir des paramètres
        const { id } = request.params;
        // Suppression du livre par son ID
        const book = yield bookModel_js_1.default.findByIdAndDelete(id);
        // Réponse avec un message de succès si le livre a été supprimé
        if (book) {
            return response
                .status(200)
                .json({ message: "Book deleted successfully!", data: book });
        }
        // Si le livre n'est pas trouvé
        return response.status(404).json({ message: "Book not found" });
    }
    catch (error) {
        // En cas d'erreur, renvoie un statut 400
        return response.sendStatus(400);
    }
});
exports.deleteBook = deleteBook;
