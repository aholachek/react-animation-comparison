import React, { useRef, useState } from 'react'
import anime from 'animejs'
import Transition from 'react-transition-group/Transition'
import TransitionGroup from 'react-transition-group/TransitionGroup'

// we will trigger an event on the grid node after the exit animation completes
// to let the transitiongroup know that it can be removed from the DOM
// this is the only way to let react-transition-group delegate timing
// to the JavaScript animation
const ANIMATION_DONE_EVENT = 'animation::done'
const triggerAnimationDoneEvent = node =>
  node.dispatchEvent(new Event(ANIMATION_DONE_EVENT))

const createOpacityAnimationConfig = animatingIn => ({
  value: animatingIn ? [0, 1] : 0,
  easing: 'linear',
  duration: 300
})

const easing = 'spring(1, 150, 10)'

const animateGridIn = gridContainer =>
  anime
    .timeline()
    .add({
      targets: gridContainer,
      translateX: [-1000, 0],
      opacity: createOpacityAnimationConfig(true),
      easing
    })
    .add(
      {
        targets: gridContainer.querySelectorAll('.card'),
        easing,
        opacity: createOpacityAnimationConfig(true),
        translateY: [-30, 0],
        complete: () => triggerAnimationDoneEvent(gridContainer),
        delay: anime.stagger(70)
      },
      '-=500'
    )

const animateGridOut = gridContainer =>
  anime
    .timeline()
    .add({
      targets: gridContainer.querySelectorAll('.card'),
      easing,
      opacity: createOpacityAnimationConfig(false),
      translateY: -30,
      delay: anime.stagger(50)
    })
    .add(
      {
        targets: gridContainer,
        translateX: 1000,
        opacity: createOpacityAnimationConfig(false),
        easing,
        complete: () => triggerAnimationDoneEvent(gridContainer)
      },
      '-=1400'
    )

const animateCardIn = card =>
  anime({
    targets: card,
    opacity: createOpacityAnimationConfig(true),
    translateY: [50, 0],
    complete: () => triggerAnimationDoneEvent(card),
    easing
  })

const animateCardOut = card =>
  anime({
    targets: card,
    translateY: -10,
    opacity: createOpacityAnimationConfig(false),
    complete: () => triggerAnimationDoneEvent(card),
    easing
  })

const addEndListener = (node, done) =>
  node.addEventListener(ANIMATION_DONE_EVENT, done)

const TransitionGrid = ({ items, visible, removeItem }) => {
  // the code below makes sure we force re-mount the transition component
  // every time it enters, to avoid the transition caching old state
  // if someone rapidly toggles the component in and out
  const transitionKey = useRef(1)
  const [prevVisible, setPrevVisible] = useState(visible)
  if (visible !== prevVisible) setPrevVisible(visible)
  if (visible && !prevVisible) {
    transitionKey.current += 1
  }

  return (
    <Transition
      unmountOnExit
      appear
      addEndListener={addEndListener}
      onEnter={animateGridIn}
      onExit={animateGridOut}
      in={visible}
      key={transitionKey.current}
    >
      <ul className="grid animated-grid">
        <TransitionGroup component={null}>
          {items.map(item => (
            <Transition
              key={item}
              onEnter={animateCardIn}
              onExit={animateCardOut}
              addEndListener={addEndListener}
            >
              <li className="card" onClick={() => removeItem(item)}>
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
