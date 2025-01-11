import express, { Router } from "express";
import UsersControllers from "../controllers/usersControllers";

export const routes: Router = express.Router();

routes.get("/", UsersControllers.getUsers);
routes.post("/", UsersControllers.createUser);
