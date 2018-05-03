import React, { Component } from "react"
import shuffle from "./shuffle"

export default class Container extends Component {
  state = {
    items: [],
    visible: false
  }

  addItems = () => {
    this.setState({ items: [1, 2, 3, 4, 5, 6, 7, 8], visible: true })
  }

  removeGrid = () => {
    this.setState({ visible: false })
  }

  addItem = () => {
    if (!this.state.items.length) return
    const finalItem = [...this.state.items].sort((a, b) => b - a)[0] + 1
    this.setState({ items: this.state.items.concat(finalItem) })
  }

  removeItem = itemToRemove => {
    const items = this.state.items.filter(item => item !== itemToRemove)
    this.setState({ items })
  }

  shuffleItems = () => {
    this.setState({ items: [...shuffle(this.state.items)] })
  }

  render() {
    return (
      <div className="p-4">
        <div>
          {this.state.visible ? (
            <div>
              <button className="btn" onClick={this.removeGrid}>
                view exit animation <small>(in theory lol)</small>
              </button>
              <button className="btn fade-in" onClick={this.addItem}>
                add an item
              </button>
              <button className="btn fade-in" onClick={this.shuffleItems}>
                shuffle items
              </button>
            </div>
          ) : (
            <button className="btn" onClick={this.addItems}>
              view enter animation
            </button>
          )}
        </div>
        <div>
          {this.props.render({
            items: this.state.items,
            visible: this.state.visible,
            addItem: this.addItem,
            removeItem: this.removeItem
          })}
        </div>
      </div>
    )
  }
}
