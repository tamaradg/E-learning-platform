import express from "express";
import cors from "cors";
import courseRouter from "./courses/course.router.js";
import userRouter from "./users/user.router.js";

// on écoute un port définit sur .env ou par défaut le port 3000
const PORT = process.env.PORT || 3000;

// fonction qui démarre l'app
export default function loadApp(app) {
  // on appelle les fonctions middlewares ici
  app.use(express.json());
  app.use(cors());
  app.use("/api/courses", courseRouter);
  app.use("/api/users", userRouter);
  app.listen(PORT, (params) => {
    console.log(`Le serveur a démarré sur le Port ${PORT}`)
  });
}
