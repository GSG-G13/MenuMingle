import { Outlet } from 'react-router-dom';
import Navbar from '../components/Cook/Nav';
import DishesTable from '../components/Cook/table';
import pg from '../assets/pg.png';

const styles = {
  backgroundImage: `url(${pg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
};
const CookDash = () => {
  return (
    <div style={styles}>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default CookDash;
