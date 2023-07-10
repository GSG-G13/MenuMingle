import { createContext, useContext, FC } from 'react';
import { authContext, AuthContextProviderProps } from './AuthContext';
import { Login } from '../pages';

const protectedRouteContext = createContext(null);

const ProtectedRouteProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const { user } = useContext(authContext);

  return (
    <protectedRouteContext.Provider value={null}>
      {user ? children : <Login />}
    </protectedRouteContext.Provider>
  );
};

export default ProtectedRouteProvider;
