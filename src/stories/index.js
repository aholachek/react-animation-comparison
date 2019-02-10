import React from 'react'
import { storiesOf } from '@storybook/react'
import ReactMove from '../react-move-example'
import VelocityReact from '../velocity-react-example'
import ReactMotion from '../react-motion-example'
import ReactTransitionGroup from '../react-transition-group-gsap-example'
import AnimeExample from '../react-transition-group-anime-example'
import PopmotionPoseExample from '../popmotion-pose-example'
import ReactSpringExample from '../react-spring-example'

import Container from '../common/container'

import 'normalize.css'
import '../common/index.css'

storiesOf('Animation Examples', module)
  .add('React-Transition-Group + Animejs', () => (
    <Container animationComponent={AnimeExample} />
  ))
  .add('React-Spring', () => (
    <Container animationComponent={ReactSpringExample} />
  ))
  .add('Popmotion Pose', () => (
    <Container animationComponent={PopmotionPoseExample} />
  ))
  .add('React-Transition-Group + GSAP', () => (
    <Container animationComponent={ReactTransitionGroup} />
  ))
  .add('React-Move', () => <Container animationComponent={ReactMove} />)
  .add('Velocity-React', () => <Container animationComponent={VelocityReact} />)
  .add('React-Motion', () => <Container animationComponent={ReactMotion} />)
