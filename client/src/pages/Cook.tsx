import Navbar from '../components/Cook/Nav';
import pg from '../assets/pg.png';
import InProgressOrders from '../components/Cook/InProgress';

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
      <InProgressOrders />
    </div>
  );
};
export default CookDash;
