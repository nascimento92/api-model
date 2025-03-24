import { NextFunction, Request, Response } from "express";
import { loginService } from "../service/login.service";

class LoginController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          statuscode: 400,
          message: "Email and password are required",
        });
      }
      const response = await loginService.login(email, password);
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

export const loginController = new LoginController();
