import React, { Component } from "react"
import ReactDOM from "react-dom"
import delay from "delay"
import { Transition, Spring, Trail, Keyframes, animated, config } from "react-spring"

class TransitionGrid extends Component {
  async componentDidUpdate(prevProps, prevState) {
    if (!prevProps.visible && this.props.visible) {
      this.container(Spring, {
        from: { x: -100, opacity: 0 },
        to: { x: 0, opacity: 1 },
        config: config.slow
      })
      await delay(500)
      await this.content(Trail, { from: { y: -120, opacity: 0 }, to: { y: 0, opacity: 1 } })
    } else if (prevProps.visible && !this.props.visible) {
      this.content(Trail, { to: { y: -120, opacity: 0 } })
      await delay(500)
      await this.container(Spring, { to: { x: -100, opacity: 0 }, config: config.slow })
    }
  }

  render() {
    const { items, removeItem, visible } = this.props
    return (
      <Keyframes native script={next => (this.container = next)}>
        {({ x, opacity }) => (
          <animated.ul
            className="grid animated-grid"
            style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`), opacity }}
          >
            <Keyframes native keys={items} script={next => (this.content = next)}>
              {items.map(item => ({ y, ...props }) => (
                <animated.li
                  onClick={() => removeItem(item)}
                  className="card"
                  style={{ transform: y.interpolate(y => `translate3d(0,${y}%,0)`), ...props }}
                >
                  <div className="close-card">&#x2715;</div>
                  <div>{item}</div>
                </animated.li>
              ))}
            </Keyframes>
          </animated.ul>
        )}
      </Keyframes>
    )
  }
}

export default props => <TransitionGrid {...props} />
