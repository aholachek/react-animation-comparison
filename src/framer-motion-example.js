import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const springConfig = {
  type: 'spring',
  stiffness: 200,
  damping: 13
}

const containerVariants = {
  initial: {
    translateX: -1000,
    opacity: 0
  },
  animate: {
    translateX: 0,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      translateX: springConfig,
      opacity: 'linear'
    }
  },
  exit: {
    translateX: 1000,
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
      translateX: springConfig,
      opacity: 'linear'
    }
  }
}

const itemVariants = {
  initial: {
    translateY: -50,
    opacity: 0
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: {
      translateY: springConfig,
      opacity: 'linear'
    }
  },
  exit: {
    translateY: -10,
    opacity: 0,
    transition: {
      translateY: springConfig,
      opacity: 'linear'
    }
  }
}

const TransitionGrid = ({ items, visible, removeItem }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.ul
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid animated-grid"
          key="container"
        >
          {items.map(item => {
            return (
              <motion.li
                positionTransition
                key={item}
                variants={itemVariants}
                className="card"
                onClick={() => removeItem(item)}
              >
                <div className="close-card">&#x2715;</div>
                <div>{item}</div>
              </motion.li>
            )
          })}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export default TransitionGrid
