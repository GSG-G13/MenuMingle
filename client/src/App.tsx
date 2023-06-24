import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login, SignUp } from './pages';
import SplashPage from './pages/SplashPage/Splash';
import CartPage from './pages/CartPage';
import WaitingRoom from './pages/WatingRoom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashPage />,
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
    path: '/cartPage',
    element: <CartPage />,
  },
  {
    path: '/waiting-room',
    element: <WaitingRoom />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
