import styles from '../../styles/modules/Section.module.css'
import SectionTransition from '../layout/SectionTransition'

function About() {
  return (
    <section className={`${styles.section} ${styles.about}`} id="about">
      <div className={styles.content}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.imageColumn}>
            <SectionTransition direction="left">
              <div className={styles.imagePlaceholder}>
                <span>Profile Image</span>
              </div>
            </SectionTransition>
          </div>
          <div className={styles.textColumn}>
            <SectionTransition direction="right">
              <div>
                <p className={styles.aboutText}>
                  nadine is a software engineer based in california and texas.
                </p>
                <p className={styles.aboutText}>
                  <span className={styles.emphasis}>embedded in:</span>
                  nasa, warner music group, amazon web services, and the open source community.
                </p>
              </div>
            </SectionTransition>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
