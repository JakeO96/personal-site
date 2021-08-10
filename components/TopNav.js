import Link from 'next/link';
import styles from '../styles/TopNav.module.css'

export default function TopNav() {
  return (
    <div className={styles.topNav}>
      <ul>
          <a href={"https://www.jake-oleary.com/"}>
            <li>Home</li>
          </a>
          <a href={"https://www.jake-oleary.com/test-pg1"}>
            <li>Test Link 1</li>
          </a>
          <a href={"https://www.jake-oleary.com/test-pg2"}>
            <li>Test Link 2</li>
          </a>
      </ul>
    </div>
  );
}
