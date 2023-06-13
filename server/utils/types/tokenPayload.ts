interface TokenPayload {
  id: number;
  name: string;
  role: 'admin' | 'client' | 'worker';
}

export default TokenPayload;
