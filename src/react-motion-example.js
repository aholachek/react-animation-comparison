import React from 'react'
import { StaggeredMotion, spring } from 'react-motion'

const AnimatedGridContents = props => {
  return (
    <StaggeredMotion
      defaultStyles={props.items.map(() => ({ opacity: 1, translateY: -30 }))}
      styles={prevInterpolatedStyles =>
        prevInterpolatedStyles.map((_, i) => {
          return i === 0
            ? { opacity: spring(1), translateY: spring(0) }
            : {
              opacity: prevInterpolatedStyles[i - 1].opacity,
              translateY: spring(prevInterpolatedStyles[i - 1].translateY)
            }
        })
      }
    >
      {interpolatingStyles => (
        <div className="grid">
          {interpolatingStyles.map((style, i) => (
            <div
              className="card"
              key={props.items[i]}
              style={{
                opacity: style.opacity,
                transform: `translateY(${style.translateY}px)`
              }}
            >
              {props.items[i]}
            </div>
          ))}
        </div>
      )}
    </StaggeredMotion>
  )
}

const TransitionGrid = ({ items, visible }) => {
  return (
    visible && (
      <div className="animated-grid">
        <AnimatedGridContents items={items} />
      </div>
    )
  )
}

export default TransitionGrid
