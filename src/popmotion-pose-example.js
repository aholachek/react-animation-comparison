import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { easing } from 'popmotion'
import animationTimings from './common/animationTimings'

const GridProps = {
  preEnter: {
    x: -1000,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1,
    delayChildren: animationTimings.gridEnter,
    staggerChildren: 80,
    // https://popmotion.io/pose/learn/custom-transitions/
    // https://popmotion.io/pose/learn/dynamic-props/
    transition: {
      opacity: {
        duration: animationTimings.gridEnter,
        ease: easing.linear
      },
      x: { type: 'spring' }
    }
  },
  exit: {
    x: 1000,
    opacity: 0,
    delay: 800,
    staggerChildren: 50,
    transition: {
      opacity: {
        duration: animationTimings.gridLeave,
        ease: easing.linear
      },
      x: { type: 'spring' }
    }
  }
}

const Grid = posed.ul(GridProps)

const itemProps = {
  preEnter: {
    y: -50,
    opacity: 0,
    transition: { type: 'spring' }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' }
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: { type: 'spring' }
  }
}

const Item = posed.li(itemProps)

// https://popmotion.io/pose/api/posegroup/
const TransitionGrid = ({ visible, items, removeItem }) => {
  return (
    <PoseGroup preEnterPose="preEnter">
      {visible && (
        <Grid className="grid animated-grid" key="grid">
          <PoseGroup preEnterPose="preEnter">
            {items.map(item => {
              return (
                <Item
                  className="card"
                  key={item}
                  onClick={() => removeItem(item)}
                >
                  <div className="close-card">&#x2715;</div>
                  <div>{item}</div>
                </Item>
              )
            })}
          </PoseGroup>
        </Grid>
      )}
    </PoseGroup>
  )
}

export default TransitionGrid
