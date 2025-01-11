import { Request, Response } from "express";
import User from "../models/userModels.js";

class UsersControllers {

  static async getUsers(req: Request, res: Response): Promise<any> {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Request Failed'
        res
         .status(500)
         .json({ message: `${errorMessage}` });
   }
  }

  static async createUser(req: Request, res: Response): Promise<any> {
    try {
      const userData = req.body
      const newUser = await User.create(userData);
      res.status(201).json({message: "User created successfuly", user: newUser});
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Request Failed'
      res
       .status(500)
       .json({ message: `${errorMessage}` });
   }
  }
};

export default UsersControllers;