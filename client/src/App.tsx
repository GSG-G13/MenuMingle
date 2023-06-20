import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Login, SignUp } from './pages';
import SplashPage from './pages/SplashPage/Splash';
import Menu from './components/Menu';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;
