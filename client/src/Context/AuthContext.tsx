import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
  FC,
  useEffect,
} from 'react';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

interface User {
  id: number;
  username: string;
  role: string;
}

interface AuthContextValues {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export interface AuthContextProviderProps {
  children: ReactNode;
}

export const authContext = createContext<AuthContextValues>({} as AuthContextValues);

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = document.cookie.slice(6).toString() || null;
    if (token) {
      try {
        const decodedToken = jwt_decode(token) as User;
        setUser(decodedToken);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const values = useMemo(() => ({ user, setUser }), [user]);
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
