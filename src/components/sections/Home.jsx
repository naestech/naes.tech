import { motion } from 'framer-motion'
import styles from '../../styles/modules/Section.module.css'
import SectionTransition from '../layout/SectionTransition'

function Home() {
  return (
    <section className={styles.section} id="home">
      <SectionTransition isFade={true}>
        <div className={styles.content}>
          <div className={styles.homeImage}>
            {/* Placeholder for main image */}
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>
      </SectionTransition>
    </section>
  )
}

export default Home