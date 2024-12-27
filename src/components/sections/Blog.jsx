import styles from '../../styles/modules/Section.module.css'

function Blog() {
  return (
    <section className={`${styles.section}`} id="blog">
      <div className={styles.content}>
        <div className={styles.blogPreview}>
          <div id="substack-feed-embed"></div>
          <a 
            href="https://technaelogy.substack.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.readMore}
          >
            read more on substack →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog