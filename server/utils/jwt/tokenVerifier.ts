import { verify, Secret } from 'jsonwebtoken';
import config from '../../config/environment';

const { jwtSecret } = config.app;

const tokenVerifier = (token: string) => {
  return new Promise((resolve, reject) => {
    verify(token, jwtSecret as Secret, (err, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
};

module.exports = tokenVerifier;
