import { Router, Request, Response } from "express";
import UserService from "../services/user.service";
import Controller from "../utils/controller.interface";
import { HttpFailure, HttpSuccess } from "../utils/response/http.response";
import { IUser } from "../utils/user.interface";

class UserController implements Controller {
  public path: string = "/user";
  public router = Router();
  public UserService = new UserService();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.get(`${this.path}/:phoneNumber`, this.getUser);
    this.router.put(`${this.path}`, this.updateUser);
  }

  private getUser = async (req: Request, res: Response) => {
    try {
      const phoneNumber: string = req.params.phoneNumber;
      const result = await this.UserService.getUser(phoneNumber);
      HttpSuccess(res, "User fetched successfully", result, 200);
    } catch (error) {
      HttpFailure(res, error.message, 400);
    }
  };

  private updateUser = async (req: Request, res: Response) => {
    try {
      const payload: IUser = req.body;
      const result = await this.UserService.updateUser(payload);
      HttpSuccess(res, "User updated successfully", result, 201);
    } catch (error) {
      HttpFailure(res, error.message, 400);
    }
  };
}

export default UserController;
