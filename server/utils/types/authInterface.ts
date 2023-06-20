import { Request } from 'express';

import Payload from './payload';

type CustomRequest = {
  user?: Payload;
} & Request;

export default CustomRequest;
