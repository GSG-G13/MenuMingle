import { Response, Request } from 'express';
import configs from '../../config/environment';
const {
  env: { publishableKey },
} = configs;

const getConfig = (_req: Request, res: Response) => {
  res.json({
    publishableKey,
  });
};

export default getConfig;
