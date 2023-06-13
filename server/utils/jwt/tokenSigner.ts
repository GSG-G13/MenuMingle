import { sign, Secret } from 'jsonwebtoken';
import config from '../../config/environment';
import { TokenPayload } from '../types';

const { jwtSecret } = config.app;

const tokenSigner = (payload: TokenPayload) => {
  return new Promise((resolve, reject) => {
    sign(payload, jwtSecret as Secret, { expiresIn: '1d' }, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
};

export { tokenSigner };
