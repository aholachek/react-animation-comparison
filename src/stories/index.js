import React from "react"
import { storiesOf } from "@storybook/react"
import ReactMove from "../react-move-example"
import VelocityReact from "../velocity-react-example"
import ReactMotion from "../react-motion-example"
import ReactTransitionGroup from "../react-transition-group-gsap-example"
import AnimeExample from "../react-transition-group-anime-example"
import PopmotionPoseExample from "../popmotion-pose-example"
import ReactSpringExample from "../react-spring-example"

import Container from "../common/container"

import "normalize.css"

import "../common/index.css"

storiesOf("Animation Examples", module)
  .add("Popmotion Pose", () => <Container render={PopmotionPoseExample} />)
  .add("React-Spring", () => <Container render={ReactSpringExample} />)
  .add("React-Transition-Group + GSAP", () => <Container render={ReactTransitionGroup} />)
  .add("React-Transition-Group + animejs", () => <Container render={AnimeExample} />)
  .add("React-Move", () => <Container render={ReactMove} />)
  .add("Velocity-React", () => <Container render={VelocityReact} />)
  .add("React-Motion", () => <Container render={ReactMotion} />)
