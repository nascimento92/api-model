import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

export class TokenManagement {
  private token: string = '';
  private refreshtoken: string = '';

  constructor() {
    dotenv.config();
    this.token = process.env.ACCESS_TOKEN_SECRET as string;
    this.refreshtoken = process.env.REFRESH_TOKEN_SECRET as string;
  }

  tokenIsValid(authHeader: string): boolean {
    const token = authHeader.split(' ')[1];
    if (!token) {
      return false;
    }
    try {
      jwt.verify(token, this.token);
      return true;
    } catch (error) {
      return false;
    }
  }

  verifyRefreshTokenValidate(refreshtoken: string) {
    try {
      const validate = jwt.verify(refreshtoken, this.refreshtoken);
      
      if (typeof validate === 'object' && 'userId' in validate) {
        return (validate as JwtPayload).userId;
      } else {
        return false; // Token inválido
      }
    } catch (error) {
      return false;
    }
  }

  generateAccessToken(userId: string): string {
    const token = jwt.sign({ userId }, this.token, { expiresIn: '15m' });
    return token;
  }

  generateRefreshToken(userId: string): string {
    const token = jwt.sign({ userId }, this.refreshtoken, { expiresIn: '2d' });
    return token;
  }
}
