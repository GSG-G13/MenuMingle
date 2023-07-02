import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { Login, SignUp } from './pages';
import SplashPage from './pages/SplashPage/Splash';
import WaitingRoom from './pages/WatingRoom';
import CartPage from './pages/Cart';
import Menu from './pages/Menu';
import CookDash from './pages/Cook';
import IncomingOrders from './components/Cook/Incoming';
import InProgressOrders from './components/Cook/InProgress';
import Done from './components/Cook/Done';

const socket = io('http://localhost:8080');

const App = ({ router }) => {
  return <RouterProvider router={router} />;
};

const TestComponent = () => {
  const sendMessage = () => {
    console.log('hi');
  };

  useEffect(() => {
    socket.emit('send_message', { message: 'hello' });
  }, []);

  const router = createBrowserRouimport './index.css';
  import { RouterProvider, createBrowserRouter } from 'react-router-dom';
   import { io } from 'socket.io-client';
  import { useEffect } from 'react';
  import { Login, SignUp } from './pages';
  import SplashPage from './pages/SplashPage/Splash';
  import WaitingRoom from './pages/WatingRoom';
  import CartPage from './pages/Cart';
  import Menu from './pages/Menu';
  import CookDash from './pages/Cook';
  import IncomingOrders from './components/Cook/Incoming';
  import InProgressOrders from './components/Cook/InProgress';
  import Done from './components/Cook/Done';
   const socket = io('http://localhost:8080');
  
  
  const TestComponent = () => {
    const sendMessage = () => {
      console.log('hi');
    };
  
     useEffect(() => {
       socket.emit('send_message', { message: 'hello' });
     });
  
    
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
  
  export default App;ter([
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

  return <App router={router} />;
};

export default TestComponent;
