import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
