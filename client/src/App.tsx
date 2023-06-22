import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Login, SignUp } from './pages';
import SplashPage from './pages/SplashPage/Splash';
import Menu from './pages/Menu';

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
    path: '/menu',
    element: <Menu />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
