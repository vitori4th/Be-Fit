import AppError from '../../../shared/errors/AppError';
import { Response, Request, NextFunction } from 'express';
import { Secret, verify } from 'jsonwebtoken';
import authConfig from '../../../config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}



export default function isAdmin(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing.');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(
      token,
      authConfig.jwt.secret as Secret,
    ) as unknown as ITokenPayload;

    const subjectToken = JSON.parse(decodedToken.sub)

    if (subjectToken.role !== 'ADMIN') {
      throw Error;
    }

    return next();
  } catch (_err) {
    throw new AppError('User has no permission.', 403);
  }
}
