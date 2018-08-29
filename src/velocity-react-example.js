import React from 'react'
import { VelocityTransitionGroup, velocityHelpers } from 'velocity-react'
import 'velocity-animate/velocity.ui'
import animationTimings from './common/animationTimings'

const cardAnimationIn = velocityHelpers.registerEffect({
  defaultDuration: animationTimings.cardEnter,
  calls: [
    [
      {
        opacity: [1, 0],
        translateY: [0, -20],
        translateZ: 0
      },
      1,
      {
        display: 'flex',
        easing: 'spring'
      }
    ]
  ]
})
const cardAnimationOut = velocityHelpers.registerEffect({
  defaultDuration: animationTimings.cardLeave,
  calls: [
    [
      {
        opacity: [0, 1],
        translateY: [20, 0],
        translateZ: 0
      },
      1,
      {
        display: 'flex',
        easing: 'spring'
      }
    ]
  ]
})

const gridAnimationIn = velocityHelpers.registerEffect({
  defaultDuration: animationTimings.gridEnter,
  calls: [
    [
      {
        opacity: [1, 0],
        translateX: [0, -1000],
        translateZ: 0
      },
      1,
      {
        display: 'flex',
        easing: 'spring'
      }
    ]
  ]
})

const gridAnimationOut = velocityHelpers.registerEffect({
  defaultDuration: animationTimings.gridLeave,
  calls: [
    [
      {
        opacity: [1, 0],
        translateX: [0, 1000]
      },
      1,
      {
        display: 'flex',
        easing: 'spring',
        delay: 2000
      }
    ]
  ]
})

const TransitionGrid = ({ visible, items, removeItem }) => {
  return (
    <VelocityTransitionGroup
      enter={{ animation: gridAnimationIn }}
      leave={{ animation: gridAnimationOut, delay: 500 }}
    >
      {visible && (
        <div className="animated-grid">
          <VelocityTransitionGroup
            component="ul"
            className="grid"
            runOnMount
            enter={{
              animation: cardAnimationIn,
              stagger: animationTimings.cardStagger,
              drag: true,
              delay: animationTimings.gridEnter
            }}
            // velocity react is smart about applying the end stage of the leave animation
            // (opacity : 0) to the enter animation
            leave={{
              animation: cardAnimationOut,
              stagger: animationTimings.cardStagger,
              drag: true
            }}
          >
            {items.map(item => {
              return (
                <div
                  className="card"
                  key={item}
                  onClick={() => removeItem(item)}
                >
                  <div className="close-card">&#x2715;</div>
                  <div>{item}</div>
                </div>
              )
            })}
          </VelocityTransitionGroup>
        </div>
      )}
    </VelocityTransitionGroup>
  )
}

export default TransitionGrid
