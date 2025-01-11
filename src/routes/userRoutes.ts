import express, { Router } from "express";
import UsersControllers from "../controllers/usersControllers.js";
import { userValidationRules } from "../validations/userValidation.js";

export const routes: Router = express.Router();

routes.get("/", UsersControllers.getUsers);
routes.post("/", userValidationRules, UsersControllers.createUser);
