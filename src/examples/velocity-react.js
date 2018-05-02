import React from "react"
import PropTypes from "prop-types"
import { VelocityTransitionGroup, velocityHelpers } from "velocity-react"
import "velocity-animate/velocity.ui"
import animationTimings from "../common/animationTimings"

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
        display: "flex"
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
        display: "flex"
      }
    ]
  ]
})

const AnimatedGridContents = props => {
  return (
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
      // ========================================================
      // velocity react is smart about applying the end stage of the leave animation
      // (opacity : 0) to the enter animation
      // ========================================================
      leave={{
        animation: cardAnimationOut,
        stagger: animationTimings.cardStagger,
        drag: true
      }}
    >
      {props.items.map(item => {
        return (
          <div className="card" key={item}>
            {item}
          </div>
        )
      })}
    </VelocityTransitionGroup>
  )
}

const gridAnimationIn = velocityHelpers.registerEffect({
  defaultDuration: animationTimings.gridEnter,
  calls: [
    [
      {
        opacity: [1, 0],
        translateX: [0, -100],
        translateZ: 0
      },
      1,
      {
        display: "flex",
        easing: "spring"
      }
    ]
  ]
})

const gridAnimationOut = velocityHelpers.registerEffect({
  defaultDuration: animationTimings.gridLeave,
  delay: 2000,
  calls: [
    [
      {
        opacity: 0,
        translateX: 2000
      },
      1,
      {
        display: "flex",
        easing: "spring"
      }
    ]
  ]
})

const AnimatedGrid = props => {
  return (
    <VelocityTransitionGroup
      enter={{ animation: gridAnimationIn }}
      leave={{ animation: gridAnimationOut, delay: 1000 }}
      runOnMount
    >
      {props.items.length ? (
        <div className="animated-grid">
          <AnimatedGridContents items={props.items} />
        </div>
      ) : (
        <div />
      )}
    </VelocityTransitionGroup>
  )
}

export default AnimatedGrid
