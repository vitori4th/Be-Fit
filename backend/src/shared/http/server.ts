import 'reflect-metadata';
import 'express-async-errors';
import express, { Application, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';

import { errors } from 'celebrate';
import AppError from '@shared/errors/AppError';

const app: Application = express();

app.use(cors());

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
});

console.log(process.env.NODE_ENV);

app.use(express.json());

app.use(routes);

app.use(errors());

app.use(
  (
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction,
  ) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, (): void => console.log(`Server is running on 3333`));
