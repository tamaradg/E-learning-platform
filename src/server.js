import express from "express";
import mongoose from "mongoose";
import loadApp from "./app.js";
import dotenv from "dotenv";

// ici on créé l'application express
const app = express();

//on lit le fichier et on accède aux variables d'environnement
dotenv.config();
// c'est une promesse
mongoose
  .connect(
  // on appelle la variable database dans .env
    process.env.DATABASE_URL
  )
  // puis on lance la fonction loadapp dans app.js
  .then(() => {
    loadApp(app);
  })
  .catch((err) => {
    console.error(`Source de l'erreur : ${err.message}`);
  });
