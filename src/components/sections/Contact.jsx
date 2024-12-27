import styles from '../../styles/modules/Section.module.css'

function Contact() {
  return (
    <section className={`${styles.section} ${styles.contact}`} id="contact">
      <div className={styles.content}>
        {/* Form and social media links */}
        <div className={styles.contactContainer}>
          <form className={styles.contactForm}>
            <div className={styles.placeholder}>
              <span>Contact Form Coming Soon</span>
            </div>
          </form>
          <div className={styles.socialLinks}>
            <div className={styles.placeholder}>
              <span>Social Media Links</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
