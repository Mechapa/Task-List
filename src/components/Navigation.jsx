import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">Активные задачи</Link>
      <Link className={styles.link} to="/deleted">Удаленные задачи</Link>
    </nav>
  );
};
export default Navigation;