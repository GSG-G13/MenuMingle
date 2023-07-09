import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login, SignUp } from './pages';
import SplashPage from './pages/Splash';
import WaitingRoom from './pages/WaitingRoom';
import CartPage from './pages/Cart';
import Menu from './pages/Menu';
import AdminDash from './pages/Admin';
import CookDash from './pages/CookDash';
import { Payment } from './components';
import ErrorPage from './components/Error';
import Completion from './components/WaitingRoomComponent/Completion';
import AuthContextProvider from './Context/AuthContext';
import ProtectedRouteProvider from './Context/ProtectedContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/waiting-room',
    element: <WaitingRoom />,
  },
  {
    path: '/menu',
    element: <Menu />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/Admin',
    element: (
      <ProtectedRouteProvider>
        <AdminDash />
      </ProtectedRouteProvider>
    ),
  },
  {
    path: '/cook',
    element: (
      <ProtectedRouteProvider>
        <CookDash />
      </ProtectedRouteProvider>
    ),
  },
  {
    path: '/go-to-completion',
    element: <Completion />,
  },
]);

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
