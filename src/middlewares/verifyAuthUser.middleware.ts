import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/appError";

export const verifyAuthUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    jwt.verify(
      token as string,
      process.env.SECRET_KEY as string,
      (err: any, decoded: any) => {
        req.user = {
          isAdm: decoded.isAdm,
          id: decoded.id,
          isActive: decoded.isActive,
        };
        return next();
      }
    );
  } catch (error) {
    
      return res.status(401).json({ message: "Invalid Token" });
    
  }
};
