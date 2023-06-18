import { hash, compare } from 'bcrypt';

const hashPassword = async (password: string) => {
  const passwordHashed = await hash(password, 12);
  return passwordHashed;
};
const comparePassword = async (password: string, hashedPassword: string) => {
  const isPassword = await compare(password, hashedPassword);
  return isPassword;
};
export { hashPassword, comparePassword };
