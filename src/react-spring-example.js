import React, { useRef } from 'react'
import { useTransition, useChain, config, animated } from 'react-spring'

const TransitionGrid = ({ visible, items, removeItem }) => {
  const containerRef = useRef()
  // https://react-spring.surge.sh/#/useTransition
  const containerTransition = useTransition(visible, item => item, {
    ref: containerRef,
    config: config.stiff,
    from: { opacity: 0, x: -500 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 500 },
    unique: true,
    reset: true
  })

  const cardsRef = useRef()
  const cardsTransition = useTransition(visible ? items : [], item => item, {
    ref: cardsRef,
    config: config.stiff,
    from: { opacity: 0, translateY: -30 },
    enter: { opacity: 1, translateY: 0 },
    leave: { opacity: 0, translateY: 30 },
    trail: 400 / items.length,
    unique: true,
    reset: true
  })

  // https://react-spring.surge.sh/#/useChain
  useChain(visible ? [containerRef, cardsRef] : [cardsRef, containerRef], [
    0,
    visible ? 0.1 : 0.6
  ])

  return (
    <div>
      {containerTransition.map(
        ({ item, key, props: { x, opacity } }) =>
          item && (
            <animated.div
              key={key}
              style={{
                opacity,
                transform: x.interpolate(x => `translateX(${x}px)`)
              }}
              className="grid animated-grid"
            >
              {cardsTransition.map(
                ({ item, key, props: { translateY, opacity } }) => (
                  <animated.div
                    className="card"
                    key={key}
                    style={{
                      opacity,
                      transform: translateY.interpolate(
                        s => `translateY(${s}px)`
                      )
                    }}
                    onClick={() => removeItem(item)}
                  >
                    <div className="close-card">&#x2715;</div>
                    <div>{item}</div>
                  </animated.div>
                )
              )}
            </animated.div>
          )
      )}
    </div>
  )
}

export default TransitionGrid
