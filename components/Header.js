import TopNav from './TopNav';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.yuesHeader}>
      <div className={styles.headerContent}>
          <div className={styles.navSection}>
            <div className={styles.wrapit}>
              <TopNav />
            </div>
          </div>
      </div>
    </header>
  );
}