import React, { Component } from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import animationTimings from "../common/animationTimings"
import Transition from "react-transition-group/Transition"
import TransitionGroup from "react-transition-group/TransitionGroup"
import "gsap/TweenLite"
import "gsap/CSSPlugin"
import "gsap/EasePack"
import "gsap/TimelineLite"

// gsap cheatsheet: https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf

// we will trigger an event on the actual grid node after the exit animation completes
// to let the transitiongroup know that it can be removed from the DOM
const ANIMATION_DONE_EVENT = "animation::done"
const triggerAnimationDoneEvent = node => node.dispatchEvent(new Event(ANIMATION_DONE_EVENT))

const animateGridIn = gridContainer => {
  const cards = gridContainer.querySelectorAll(".card")
  new TimelineLite()
    .fromTo(
      gridContainer,
      animationTimings.gridEnter / 1000,
      { x: -2000 },
      { x: 0, ease: Elastic.easeOut }
    )
    .staggerFromTo(
      cards,
      animationTimings.cardEnter / 1000,
      { autoAlpha: 0, y: -30 },
      { autoAlpha: 1, y: 0 },
      0.1
    )
}

const animateGridOut = gridContainer => {
  const cards = gridContainer.querySelectorAll(".card")
  const tl = new TimelineLite()
  tl
    .staggerTo(cards, animationTimings.cardLeave / 1000, { autoAlpha: 0, y: -30 }, 0.15)
    .fromTo(
      gridContainer,
      animationTimings.gridLeave / 1000,
      { x: 0 },
      { x: 2000, autoAlpha: 0, onComplete: () => triggerAnimationDoneEvent(gridContainer) }
    )
}

const animateCardIn = card => {
  TweenLite.fromTo(
    card,
    animationTimings.cardEnter / 1000,
    {
      y: -50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      ease: Elastic.easeOut,
      onComplete: () => triggerAnimationDoneEvent(card)
    }
  )
}

const animateCardOut = card => {
  TweenLite.fromTo(
    card,
    animationTimings.cardEnter / 1000,
    { y: 0, opacity: 1 },
    {
      y: -50,
      opacity: 0,
      ease: Elastic.easeOut,
      onComplete: () => triggerAnimationDoneEvent(card)
    }
  )
}

const TransitionGrid = props => {
  return (
    <Transition
      unmountOnExit
      appear
      addEndListener={(node, done) => node.addEventListener(ANIMATION_DONE_EVENT, done)}
      onEnter={animateGridIn}
      onExit={animateGridOut}
      in={props.visible}
    >
      <ul className="grid animated-grid">
        <TransitionGroup component={null}>
          {props.items.map((item, index) => (
            <Transition
              key={item}
              onEnter={animateCardIn}
              onExit={animateCardOut}
              addEndListener={(node, done) => node.addEventListener(ANIMATION_DONE_EVENT, done)}
            >
              <li className="card" onClick={() => props.removeItem(item)}>
                <div className="close-card">&#x2715;</div>
                <div> {item}</div>
              </li>
            </Transition>
          ))}
        </TransitionGroup>
      </ul>
    </Transition>
  )
}

export default TransitionGrid
