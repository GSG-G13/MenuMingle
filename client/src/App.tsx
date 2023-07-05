import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createContext, useContext } from 'react';
import { Login, SignUp } from './pages';
import SplashPage from './pages/SplashPage/Splash';
import WaitingRoom from './pages/WatingRoom';
import CartPage from './pages/Cart';
import Menu from './pages/Menu';
import AdminDash from './pages/Admin';
import CookDash from './pages/Cook';
import IncomingOrders from './components/Cook/Incoming';
import InProgressOrders from './components/Cook/InProgress';
import Done from './components/Cook/Done';
import { Payment, Completion } from './components';

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
    path: '/waiting-room',
    element: <WaitingRoom />,
  },
  {
    path: '/menu',
    element: <Menu />,
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
    path: '/payment/completion',
    element: <Completion />,
  },
  {
    path: '/Admin',
    element: <AdminDash />,
  },
  {
    path: '/cook',
    element: <CookDash />,
    children: [
      {
        path: '/cook/incoming',
        element: <IncomingOrders />,
      },
      {
        path: '/cook/inprogress',
        element: <InProgressOrders />,
      },
      {
        path: '/cook/done',
        element: <Done />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
