import Link from 'next/link'
import styles from './Navbar.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/home">
        <a className={`${styles.btn} ${styles.nav__link}`}>Home</a>
      </Link>
      <Link href="/">
        <a className={`${styles.btn} ${styles.nav__link}`}>Articles</a>
      </Link>
      <Link href="/">
        <a className={`${styles.btn} ${styles.nav__link}`}>People</a>
      </Link>
      <Link href="/">
        <a className={`${styles.btn} ${styles.nav__link}`}>About</a>
      </Link>
      <Link href="/">
        <a className={`${styles.btn} ${styles.nav__link}`}>Hire Me</a>
      </Link>
    </div>
  )
}
