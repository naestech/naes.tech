import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/modules/Navbar.module.css'

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsCollapsed(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${isCollapsed ? styles.collapsed : ''}`}>
      <Link to="/" className={styles.logo}>naes.tech</Link>
      <nav className={styles.nav}>
        <Link to="/about" className={styles.navItem}>About</Link>
        <span className={styles.separator}>::</span>
        <Link to="/projects" className={styles.navItem}>Projects</Link>
        <span className={styles.separator}>::</span>
        <Link to="/blog" className={styles.navItem}>Blog</Link>
        <span className={styles.separator}>::</span>
        <Link to="/contact" className={styles.navItem}>Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar
