import express from "express";
import Book from "../models/bookModel.js";

// Récupérer tous les livres
export const getAllBooks = async (request: express.Request, response: express.Response) => {
  try {
    // Récupère tous les livres dans la base de données
    const books = await Book.find();

    // Retourne les livres avec un statut 200 (succès)
    return response.status(200).json({ data: books });
  } catch (error) {
    // En cas d'erreur, renvoie un statut 400 (erreur de requête)
    return response.sendStatus(400);
  }
};

// Récupérer un livre par son ID
export const getBookById = async (request: express.Request, response: express.Response) => {
  try {
    // Récupère l'ID du livre depuis les paramètres de la requête
    const { id } = request.params;

    // Recherche du livre par son ID
    const book = await Book.findById(id);

    // Si le livre n'est pas trouvé, renvoie un message d'erreur avec un statut 404
    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }

    // Si le livre est trouvé, retourne-le avec un statut 200 (succès)
    return response.status(200).json({ data: book });
  } catch (error) {
    // En cas d'erreur, renvoie un statut 400 (erreur de requête)
    return response.status(400).json({ message: "Invalid request" });
  }
};

// Créer un nouveau livre
export const newBook = async (request: express.Request, response: express.Response) => {
  try {
    // Extraction des informations du livre depuis le corps de la requête
    const { title, author, description, categorie, pages, cover } = request.body;

    // Création d'un nouvel objet Book avec les informations fournies
    const book = new Book({
      title,
      author,
      description,
      categorie,
      pages,
      cover,
    });

    // Sauvegarde du livre dans la base de données
    await book.save();

    // Réponse avec un message de succès et les détails du livre ajouté
    return response
      .status(200)
      .json({ message: "Book added successfully", data: book });
  } catch (error) {
    // En cas d'erreur, renvoie un statut 400
    return response.sendStatus(400);
  }
};

// Mettre à jour un livre existant
export const updateBook = async (request: express.Request, response: express.Response) => {
  try {
    // Récupère l'ID du livre à partir des paramètres
    const { id } = request.params;

    // Récupère les informations mises à jour du livre
    const { title, author, description, categorie, pages, cover } = request.body;

    // Recherche du livre par ID et mise à jour avec les nouvelles données
    const book = await Book.findById(id);

    if (book) {
      // Mise à jour des champs du livre s'il est trouvé
      book.title = title;
      book.author = author;
      book.description = description;
      book.categorie = categorie;
      book.pages = pages;
      book.cover = cover;

      // Sauvegarde des modifications
      await book.save();

      // Réponse avec un message de succès et les détails du livre mis à jour
      return response
        .status(200)
        .json({ message: "Book updated successfully!", data: book });
    }

    // Si le livre n'est pas trouvé
    return response.status(404).json({ message: "Book not found" });
  } catch (error) {
    // En cas d'erreur, renvoie un statut 400
    return response.sendStatus(400);
  }
};

// Supprimer un livre par son ID
export const deleteBook = async (request: express.Request, response: express.Response) => {
  try {
    // Récupère l'ID du livre à partir des paramètres
    const { id } = request.params;

    // Suppression du livre par son ID
    const book = await Book.findByIdAndDelete(id);

    // Réponse avec un message de succès si le livre a été supprimé
    if (book) {
      return response
        .status(200)
        .json({ message: "Book deleted successfully!", data: book });
    }
    // Si le livre n'est pas trouvé
    return response.status(404).json({ message: "Book not found" });
  } catch (error) {
    // En cas d'erreur, renvoie un statut 400
    return response.sendStatus(400);
  }
};
