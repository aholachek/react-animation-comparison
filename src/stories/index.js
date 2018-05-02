import React from "react"
import { storiesOf } from "@storybook/react"
import ReactMoveGrid from "../examples/react-move"
import VelocityReact from "../examples/velocity-react"
import ReactMotion from "../examples/react-motion"
import ReactTransitionGroup from "../examples/react-transition-group-gsap"
import AnimeExample from "../examples/react-transition-group-anime"
import PopmotionPoseExample from "../examples/popmotion-pose"
import ReactSpringExample from "../examples/react-spring"

import Container from "../common/container"

import "normalize.css"

import "../common/index.css"

storiesOf("Animation Examples", module)
  .add("Popmotion Pose", () => <Container render={PopmotionPoseExample} />)
  .add("React-Spring", () => <Container render={ReactSpringExample} />)
  .add("React-Transition-Group + GSAP", () => <Container render={ReactTransitionGroup} />)
  .add("React-Transition-Group + animejs", () => <Container render={AnimeExample} />)
  .add("React-Move", () => <Container render={ReactMoveGrid} />)
  .add("Velocity-React", () => <Container render={VelocityReact} />)
  .add("React-Motion", () => <Container render={ReactMotion} />)
