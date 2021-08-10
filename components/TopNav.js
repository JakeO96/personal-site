import Link from 'next/link';
import styles from '../styles/TopNav.module.css'

export default function TopNav() {
  return (
    <div className={styles.topNav}>
      <ul>
        <Link href={"/"}>
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href={"/test-pg1"}>
          <a>
            <li>Test Link 1</li>
          </a>
        </Link>
        <Link href={"/test-pg2"}>
          <a>
            <li>Test Link 2</li>
          </a>
        </Link>
      </ul>
    </div>
  );
}
