import React, { Component } from "react"
import posed, { PoseGroup } from "react-pose"
import { easing, tween, spring } from "popmotion"
import animationTimings from "./common/animationTimings"

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
    transition: props => {
      if (props.keys === "opacity") {
        return tween({
          ...props,
          duration: animationTimings.gridEnter,
          ease: easing.linear
        })
      } else {
        return spring({
          ...props
        })
      }
    }
  },
  exit: {
    x: 1000,
    opacity: 0,
    delay: 800,
    staggerChildren: 50,
    transition: props => {
      if (props.keys === "opacity") {
        return tween({
          ...props,
          duration: animationTimings.gridLeave,
          ease: easing.linear
        })
      } else {
        return spring({
          ...props
        })
      }
    }
  }
}

const Grid = posed.ul(GridProps)

const itemProps = {
  enter: {
    y: 0,
    opacity: 1,
    transition: props =>
      spring({
        ...props
      })
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: props =>
      spring({
        ...props
      })
  }
}

const Item = posed.li(itemProps)

// https://popmotion.io/pose/api/posegroup/

const TransitionGrid = ({ visible, items, removeItem }) => {
  console.log(items)
  return (
    <PoseGroup preEnterPose="preEnter">
      {visible && (
        <Grid className="grid animated-grid" key="grid">
          <PoseGroup>
            {items.map(item => {
              return (
                <Item className="card" key={item} onClick={() => removeItem(item)}>
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
