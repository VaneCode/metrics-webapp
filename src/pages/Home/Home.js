import CurrencyList from '../../components/CurrencyList/CurrencyList';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.MainContainer}>
    <CurrencyList />
  </div>
);
export default Home;
