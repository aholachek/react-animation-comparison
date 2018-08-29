import React from 'react'
import anime from 'animejs'
import animationTimings from './common/animationTimings'
import Transition from 'react-transition-group/Transition'
import TransitionGroup from 'react-transition-group/TransitionGroup'

// we will trigger an event on the actual grid node after the exit animation completes
// to let the transitiongroup know that it can be removed from the DOM
// this is the only way to let react-transition-group delegate timing
// to the JavaScript animation, as far as I can tell
const ANIMATION_DONE_EVENT = 'animation::done'
const triggerAnimationDoneEvent = node =>
  node.dispatchEvent(new Event(ANIMATION_DONE_EVENT))

// cache current animation so that it can be interrupted if necessary
let currentAnimation = null
const clearCurrentAnimation = () => currentAnimation && currentAnimation.pause()

const getOpacity = animatingIn => ({
  value: animatingIn ? [0, 1] : [1, 0],
  easing: 'linear',
  duration: 300
})

const animateGridIn = gridContainer => {
  clearCurrentAnimation()
  const cards = gridContainer.querySelectorAll('.card')
  currentAnimation = anime
    .timeline()
    .add({
      targets: cards,
      opacity: 0,
      duration: 1
    })
    .add({
      targets: gridContainer,
      translateX: [-1000, 0],
      opacity: getOpacity(true),
      duration: animationTimings.gridEnter
    })
    .add({
      targets: cards,
      duration: 800,
      opacity: getOpacity(true),
      translateY: [-30, 0],
      complete: () => triggerAnimationDoneEvent(gridContainer),
      delay: (el, i) => i * 100
    })
}

const animateGridOut = gridContainer => {
  clearCurrentAnimation()
  const cards = gridContainer.querySelectorAll('.card')
  gridContainer.style.height = gridContainer.offsetHeight + 'px'
  currentAnimation = anime
    .timeline()
    .add({
      targets: cards,
      duration: 700,
      opacity: getOpacity(false),
      translateY: -30,
      delay: (el, i) => i * 100
    })
    .add({
      targets: gridContainer,
      translateX: 1000,
      opacity: getOpacity(false),
      duration: animationTimings.gridLeave,
      complete: () => triggerAnimationDoneEvent(gridContainer),
      offset: '-=300'
    })
}

const animateCardIn = card =>
  anime({
    targets: card,
    opacity: getOpacity(true),
    translateY: [50, 0],
    complete: () => triggerAnimationDoneEvent(card),
    duration: animationTimings.cardEnter
  })

const animateCardOut = card =>
  anime({
    targets: card,
    translateY: -10,
    opacity: getOpacity(false),
    complete: () => triggerAnimationDoneEvent(card),
    duration: animationTimings.cardLeave
  })

const TransitionGrid = props => {
  return (
    <Transition
      unmountOnExit
      appear
      addEndListener={(node, done) =>
        node.addEventListener(ANIMATION_DONE_EVENT, done)
      }
      onEnter={animateGridIn}
      onExit={animateGridOut}
      in={props.visible}
    >
      <ul className="grid animated-grid">
        <TransitionGroup component={null}>
          {props.items.map(item => (
            <Transition
              key={item}
              onEnter={animateCardIn}
              onExit={animateCardOut}
              addEndListener={(node, done) =>
                node.addEventListener(ANIMATION_DONE_EVENT, done)
              }
            >
              <li className="card" onClick={() => props.removeItem(item)}>
                <div className="close-card">&#x2715;</div>
                <div>{item}</div>
              </li>
            </Transition>
          ))}
        </TransitionGroup>
      </ul>
    </Transition>
  )
}

export default TransitionGrid
