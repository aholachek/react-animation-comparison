import React, { Component } from "react"
import PropTypes from "prop-types"
import NodeGroup from "react-move/NodeGroup"
import Animate from "react-move/Animate"
import { easeElastic } from "d3-ease"
import animationTimings from "../common/animationTimings"

class TransitionGrid extends Component {
  state = { gridAnimatedIn: false }
  render() {
    const { visble: show, items, removeItem } = this.props

    return (
      <Animate
        show={show}
        start={{
          translateX: [-1000],
          opacity: [0]
        }}
        enter={[
          {
            opacity: [0, 1]
          },
          {
            translateX: [-1000, 0],
            timing: { duration: animationTimings.gridEnter, ease: easeElastic },
            events: { end: () => setTimeout(() => this.setState({ gridAnimatedIn: true }), 300) }
          }
        ]}
        leave={[
          {
            opacity: [0]
          },
          {
            translateX: [0, 1000],
            timing: { duration: animationTimings.gridLeave, ease: easeElastic },
            events: { end: () => this.setState({ gridAnimatedIn: false }) }
          }
        ]}
      >
        {data => {
          return (
            <div
              className="animated-grid"
              style={{ opacity: data.opacity, transform: `translateX(${data.translateX}px)` }}
            >
              {this.state.gridAnimatedIn ? (
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
                        opacity: [0, 1],
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
                      opacity: [0],
                      translateY: [-50],
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
              ) : null}
            </div>
          )
        }}
      </Animate>
    )
  }
}

export default props => <TransitionGrid {...props} />
