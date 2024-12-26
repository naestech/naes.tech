import { motion } from 'framer-motion'

function SectionTransition({ children, direction = null, isFade = false }) {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slide: {
      initial: { x: direction === 'right' ? '100%' : '-100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: direction === 'right' ? '-100%' : '100%', opacity: 0 }
    }
  }

  const transition = {
    duration: 0.6,
    ease: "easeInOut"
  }

  return (
    <motion.div
      variants={isFade ? variants.fade : variants.slide}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

export default SectionTransition 