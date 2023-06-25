import Navbar from '../components/Admin/Nav';
import DishesTable from '../components/Admin/table';
import pg from '../assets/bg.png';

const styles = {
  backgroundImage: `url(${pg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
};
const AdminDash = () => {
  return (
    <div style={styles}>
      <Navbar />
      <DishesTable />
    </div>
  );
};
export default AdminDash;
