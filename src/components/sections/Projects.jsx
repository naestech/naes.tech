import styles from '../../styles/modules/Section.module.css'

function Projects() {
  return (
    <section className={`${styles.section} ${styles.projects}`} id="projects">
      <div className={styles.content}>
        {/* Three-row layout */}
        <div className={styles.projectRows}>
          <div className={styles.projectRow}>
            <div className={styles.placeholder}>
              <span>Featured Project</span>
            </div>
          </div>
          <div className={styles.projectRow}>
            <div className={styles.placeholder}>
              <span>Recent Work</span>
            </div>
          </div>
          <div className={styles.projectRow}>
            <div className={styles.placeholder}>
              <span>Past Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects