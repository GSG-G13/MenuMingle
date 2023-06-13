import Jwt from 'jsonwebtoken';
import configs from '../config/environment';

const {
  app: { jwtSecret },
} = configs;

export const verify = (token: string) =>
  new Promise((resolve, reject) => {
    Jwt.verify(
      token,
      jwtSecret as string,
      (error: unknown, decoded: unknown) => {
        if (error) reject(error);
        resolve(decoded);
      },
    );
  });

export const signToken = ({
  email,
  id,
  username,
}: {
  email: string;
  id: string;
  username: string;
}) =>
  new Promise((resolve, reject) => {
    Jwt.sign(
      { email, id, username },
      jwtSecret as string,
      (error: unknown, token: unknown) => {
        if (error) reject(error);
        resolve(token);
      },
    );
  });
