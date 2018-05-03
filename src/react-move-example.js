import React, { Component } from "react"
import PropTypes from "prop-types"
import NodeGroup from "react-move/NodeGroup"
import Animate from "react-move/Animate"
import { easeElastic } from "d3-ease"
import animationTimings from "./common/animationTimings"

class TransitionGrid extends Component {
  render() {
    const { visible, items, removeItem } = this.props

    return (
      <Animate
        show={visible}
        start={{
          // values have to be in an array for some reason or else they won't tween (?)
          translateX: [-100],
          opacity: [1]
        }}
        enter={[
          {
            opacity: [1],
            timing: { duration: animationTimings.gridEnter }
          },
          {
            translateX: [0],
            timing: { duration: animationTimings.gridEnter, ease: easeElastic },
          }
        ]}
        leave={[
          {
            opacity: [0]
          },
          {
            translateX: [1000],
            timing: { duration: animationTimings.gridLeave, ease: easeElastic  },
          }
        ]}
      >
        {({ opacity, translateX }) => {
          return (
            <div
              className="animated-grid"
              style={{ opacity: opacity, transform: `translateX(${translateX}px)` }}
            >
              {
                <NodeGroup
                  data={items}
                  keyAccessor={item => item}
                  start={(item, i) => {
                    return {
                      opacity: [0],
                      translateY: [-50],
                      timing: { delay: i * 100 }
                    }
                  }}
                  enter={(item, i) => {
                    return [
                      {
                        opacity: [1],
                        timing: {
                          duration: animationTimings.cardEnter,
                          delay: i * 100
                        }
                      },
                      {
                        translateY: [0],
                        timing: {
                          duration: animationTimings.cardEnter,
                          ease: easeElastic,
                          delay: i * 100
                        }
                      }
                    ]
                  }}
                  leave={(item, i) => {
                    return {
                      opacity: 0,
                      translateY: -50,
                      timing: { delay: (items.length - i) * 100 }
                    }
                  }}
                >
                  {nodes => {
                    return (
                      <ul className="grid">
                        {nodes.map(({ key, data, state }) => {
                          return (
                            <li
                              key={key}
                              className="card"
                              style={{
                                opacity: state.opacity,
                                transform: `translateY(${state.translateY}px)`
                              }}
                              onClick={() => removeItem(data)}
                            >
                              <div className="close-card">&#x2715;</div>
                              <div>{data}</div>
                            </li>
                          )
                        })}
                      </ul>
                    )
                  }}
                </NodeGroup>
              }
            </div>
          )
        }}
      </Animate>
    )
  }
}

export default props => <TransitionGrid {...props} />
