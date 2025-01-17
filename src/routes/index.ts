import express, { Express } from "express";
import {routes as userRoutes} from "./userRoutes.js";

const routes = (app: Express): void => {
  app.use(express.json());
  app.use("/users", userRoutes);
}

export default routes;