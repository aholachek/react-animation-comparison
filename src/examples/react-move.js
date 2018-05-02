import React from "react"
import PropTypes from "prop-types"
import { Transition, Animate } from "react-move"

const AnimatedGridContents = props => {
  return (
    <Transition
      data={props.items}
      enter={item => {
        return { opacity: 0, translateY: -30 }
      }}
      update={item => {
        return { opacity: 1, translateY: 0 }
      }}
      leave={item => {
        return { opacity: 0, translateY: 30 }
      }}
      getKey={item => item}
      duration={1000}
      stagger={100}
    >
      {data => (
        <div className="grid" style={{ backgroundColor: "transparent" }}>
          {data.map(item => (
            <div
              key={item.key}
              className="card"
              style={{
                opacity: item.state.opacity,
                transform: `translateY(${item.state.translateY}px)`
              }}
            >
              {item.data}
            </div>
          ))}
        </div>
      )}
    </Transition>
  )
}

const AnimatedGrid = props => {
  if (!props.items.length) return <div />
  return (
    <Animate
      default={{
        translateX: -100,
        opacity: 0,
        complete: 0
      }}
      data={{
        translateX: 0,
        opacity: 1,
        complete: 1
      }}
      easing="easeElasticInOut"
      duration={1500}
    >
      {data => {
        return (
          <div
            className="animated-grid"
            style={{ opacity: data.opacity, transform: `translateX(${data.translateX}vw)` }}
          >
            {data.complete >= 1 ? <AnimatedGridContents items={props.items} /> : ""}
          </div>
        )
      }}
    </Animate>
  )
}

export default AnimatedGrid
