import Jwt from 'jsonwebtoken';
import configs from '../../config/environment';
import { Payload } from '../types';

const {
  app: { jwtSecret },
} = configs;

const verifyToken = (token: string) =>
  new Promise((resolve, reject) => {
    Jwt.verify(token, jwtSecret as string, (error, decoded) => {
      if (error) reject(error);
      resolve(decoded);
    });
  });

const signToken = ({ role, id, username }: Payload) =>
  new Promise((resolve, reject) => {
    Jwt.sign(
      { role, id, username },
      jwtSecret as string,
      (error: unknown, token: unknown) => {
        if (error) reject(error);
        resolve(token);
      },
    );
  });
export { verifyToken, signToken };
