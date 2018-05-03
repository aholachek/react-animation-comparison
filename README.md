# Comparing the Ease of Use of Different React Animation Libraries

**Update:** I've updated this repo for 2018, adding `popmotion-pose` and `react-spring` examples and updating `react-transition-group` from V1 to V2. 

### The Goal: to replicate this animation on entering and exiting react components:

![example animation](./src/assets/react-animation-comparison.gif)

1.  Initially, when it is first rendered in React, the grid should animate in, followed by the staggered animation of its children cards
    Cards can be added individually to the cards array and should be animated in
2.  Cards can be removed individually from the cards array and should be animated out as they leave
3.  When the grid is removed from the DOM, it should wait for its children to animate out before animating itself and leaving the DOM
4.  _Stretch goal_: When shuffled, the cards should smoothly transition to their new positions.

## Why It's Hard
The example sequences the enter and exit of a parent and its child elements. Not only that, but the enter and exit animations are not simple mirrors of each other (as some libraries seem to expect). The cards animating in and out are initially staggered, but adding or removing cards one-by-one should also result in a fluid animation.

### The Arbitrary Limit: Spend as little time as possible learning a library's API and trying to implement the animation.

### The Results (Roughly in order of preference)

1.  **popmotion-pose**
* In terms of pure ease of use, this one was the winner for me even though it suffered from some limitations in its API (for instance, it was hard to get the exit animation to go in the opposite direction of the enter animation)
* The automatic FLIP animations are pretty cool, and the default easings made the animations look great with very little additional work.
* The docs were great!
* [my animation attempt](https://alex.holachek.com/?selectedKind=Animation%20Examples&selectedStory=Popmotion%20Pose&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/popmotion-pose-example.js)
* [Popmotion Pose docs](https://popmotion.io/pose/)

2.  **react-transition-group & animejs**

* Using react-transition-group and a JavaScript animation library ended up being one of my favorite techniques, because it offered the flexibility to make custom, sequenced transitions.
* [my animation attempt](https://alex.holachek.com/?selectedKind=Animation%20Examples&selectedStory=React-Transition-Group%20%2B%20animejs&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-transition-group-anime-example.js)
* [React transition group docs](http://reactcommunity.org/react-transition-group/)
* [Anime docs](https://github.com/juliangarnier/anime)

3.  **react-transition-group & gsap**

* Very much like the animejs example. Animejs is more lightweight, ES2015-friendly, and open source, but GSAP is the standard for powerful JavaScript animation libraries.
* [my animation attempt](https://alex.holachek.com/?selectedKind=Animation%20Examples&selectedStory=React-Transition-Group%20%2B%20GSAP&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-transition-group-gsap-example.js)
* [React transition group docs](http://reactcommunity.org/react-transition-group/)
* [GSAP docs](https://greensock.com/docs)

4.  **react-spring**

* This newcomer melds the powers of `react-motion` and `react-animated` offers a user-friendly API (and the docs have tons of cool exammples).
* React-spring's keyframes API, which I used in my example to sequence animations, is cool and intuitive but is marked as experimental in the docs.
* There seemed to be a pretty serious memory leak created when adding new cards, though this could have been something I did incorrectly.
* I couldn't quite get the whole thing working the way I wanted to.
* [my animation attempt](https://alex.holachek.com/?selectedKind=Animation%20Examples&selectedStory=React-Spring&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-spring-example.js)
* [react-spring docs](https://github.com/drcmda/react-spring)

5.  **react-move**

* A lightweight library that helps D3 and React work together. It ended up not being quite flexible enough for the needs of this demo, though if the demo featured more traditionally D3-like interactions it would have been great.
* [my animation attempt](https://alex.holachek.com/?selectedKind=Animation%20Examples&selectedStory=React-Move&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-move-example.js)
* [react-move docs](https://react-move-example.js.org/#/)

6.  **velocity-react**

* A straightforward option that got me far but then ended up tripping me up when it came time to get the nested leave animations working.
* At one point, this library might have been one of the better options for animating in React, but now with `popmotion-pose`, `react-spring`, and `react-transition-group v2` there are more powerful, updated alternatives with better documentation.
* [my animation attempt](https://alex.holachek.com/?selectedKind=Animation%20Examples&selectedStory=Velocity-React&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/velocity-react-example.js)
* [velocity-react docs](https://github.com/google-fabric/velocity-react)

7.  **react-motion**

* An hour and a half wasn't enough time for me to understand the intricacies of this physics-based animation library and to create the example animation.
* [my sad animation attempt](https://alex.holachek.com/?selectedKind=Animation%20Examples&selectedStory=React-Motion&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-motion-example.js)
* [react motion docs](https://github.com/chenglou/react-motion)


