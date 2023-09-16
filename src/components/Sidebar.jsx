import styles from "./Sidebar.module.css";
import Logo from "./Logo";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />

      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Leon
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
