import React, { Component } from "react"
import ReactDOM from "react-dom"
import delay from "delay"
import { Transition, Spring, Trail, Keyframes, animated, config } from "react-spring"

class TransitionGrid extends Component {
  async componentDidMount() {
    // Since the script prop basically just receives the animation function we can
    // pick it up and use it elsewhere, that makes it possible to combine several of them
    // even though they belong to different elements, they can wait for one another, etc.
    // And again, since we are using the native prop none of this causes re-rendering
    while (true) {
      this.container(Spring, { from: { x: -100 }, to: { x: 0 }, config: config.slow })
      await delay(100)
      await this.content(Trail, { from: { x: -120, opacity: 0 }, to: { x: 0, opacity: 1 } })
      this.content(Trail, { to: { x: -120, opacity: 0 } })
      await delay(500)
      await this.container(Spring, { to: { x: -100 }, config: config.slow })
    }
  }

  render() {
    const { in: open, items, removeItem } = this.props
    return (
      <Keyframes native script={next => (this.container = next)}>
        {({ x }) => (
          <animated.div
            className="grid animated-grid"
            style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }}
          >
            <Keyframes native keys={items} script={next => (this.content = next)}>
              {items.map(item => ({ x, ...props }) => (
                <animated.div
                  className="card"
                  style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`), ...props }}
                >
                  {item}
                </animated.div>
              ))}
            </Keyframes>
          </animated.div>
        )}
      </Keyframes>
    )
  }
}

export default props => <TransitionGrid {...props} />
