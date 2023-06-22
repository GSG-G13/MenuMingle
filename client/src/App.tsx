import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { useEffect } from 'react';
import { Login, SignUp } from './pages';
import SplashPage from './pages/SplashPage/Splash';

const socket = io('http://localhost:8080');

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
]);

const App = () => {
  // return <RouterProvider router={router} />;
  const sendMessage = () => {
    console.log('hi');
  };

  useEffect(() => {
    socket.emit('send_message', { message: 'hello' });
  });

  return (
    <>
      <input type="text" placeholder="write your massage" />
      <button type="button" onClick={sendMessage}>
        send massage
      </button>
    </>
  );
};

export default App;
