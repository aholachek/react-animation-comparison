# What's the most developer-friendly React animation library?

### The Goal: to replicate this animation on entering and exiting react components:

![example animation](./src/assets/react-animation-comparison.gif)

1. Initially, when it is first rendered in React, the grid should animate in, followed by the staggered animation of its children cards.
2. New cards can be added individually to the cards array and should be animated in.
3. Cards can be removed from the cards array and should be animated out as they leave.
4. When the grid is removed from the DOM, it should wait for its children to animate out before animating itself and leaving the DOM
5. In-progress animations should be appropriately cancelled if the enter/exit state is toggled rapidly.
6. _Stretch goal_: When shuffled, the cards should smoothly transition to their new positions.

### Why It's Hard
The example sequences the "enter" and "exit" animations of both a parent and its child elements, requiring coordination between different components. Not only that, but the enter and exit animations are not simple mirrors of each other (as many libraries expect). The positions of the grid and cards should be animated with a slightly gooey-feeling elastic easing, but opacity changes should have a linear easing. The cards animating in and out are initially staggered, but adding or removing cards one-by-one should also result in a fluid animation with no delay.

### The Arbitrary Limit:
Spend as little time as possible learning a library's API and trying to implement the animation.

### The Results, Ordered by Preference

1. 🥇  **react-transition-group & animejs**

* Using `react-transition-group` and a JavaScript animation library ended up being my favorite technique, because it offered the flexibility to make custom, sequenced transitions.
* `Animejs` is lightweight and open source, and I find the imperative API more intuitive than the typical React approach for multiple complex animations.
* [my animation attempt](https://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=React-Transition-Group%20%2B%20animejs&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [my code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-transition-group-anime-example.js)
* [React transition group docs](http://reactcommunity.org/react-transition-group/)
* [Anime docs](https://github.com/juliangarnier/anime)

2. 🥈 **react-pose**
* This was the easiest example to get up and running.
* The automatic FLIP animations are pretty cool (try shuffling the cards to see it in action), and the default easings made the animations look great.
* I liked how the library automatically applies transitions to DOM elements for you instead of just tweening values and making you handle the style updates yourself.
* The docs are good.
* 🐛 **Bug** Interrupted repeat animations are implemented incorrectly (extra ghost elements are animated in if the previous animation did not fully complete). Try toggling the example multiple times fairly quickly to see what I mean.
*  🐛 **Bug** Shuffling the cards will result in an out-of-order staggered exit transition.
*  This would have been my #1 choice were it not for the bugs.
* [my animation attempt](https://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Popmotion%20Pose&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [my code](https://github.com/aholachek/react-animation-comparison/blob/master/src/popmotion-pose-example.js)
* [Popmotion Pose docs](https://popmotion.io/pose/)

3. 🥉 **react-transition-group & gsap**

* Basically the same as the `animejs` example, just with the animation library swapped out. `GSAP` has a less permissive license and it's older and heavier than  `animejs`, but it's battle-tested and powerful.
* [my animation attempt](https://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=React-Transition-Group%20%2B%20GSAP&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [my code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-transition-group-gsap-example.js)
* [React transition group docs](http://reactcommunity.org/react-transition-group/)
* [GSAP docs](https://greensock.com/docs)

4.  **react-spring**

* This newcomer melds the powers of `react-motion` and `react-animated` into one library (and the docs have tons of cool examples).
* `React-spring`'s keyframes API, which I used in my example to sequence animations makes great use of async/await but is marked as experimental in the docs.
* 🐛 **Bug** There is a serious, window-crashing memory leak created when adding new cards, though this could be something I'm doing incorrectly.
* I couldn't quite get the whole thing working the way I wanted to.
* [my animation attempt](https://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=React-Spring&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [my code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-spring-example.js)
* [react-spring docs](https://github.com/drcmda/react-spring)

5.  **react-move**

* A lightweight library that helps `D3` and `React` work together. It ended up not being quite flexible enough for the needs of this task, though if the demo featured more traditionally D3-like interactions it would have been great.
* [my animation attempt](https://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=React-Move&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [my code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-move-example.js)
* [react-move docs](https://react-move-example.js.org/#/)

6.  **velocity-react**

* A straightforward option that got me far but then ended up tripping me up when it came time to get the nested leave animations working.
* At one point, this library might have been one of the better options for animating in React, but now with `popmotion-pose`, `react-spring`, and `react-transition-group v2` there are more powerful, updated alternatives with better documentation.
* [my animation attempt](https://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Velocity-React&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [my code](https://github.com/aholachek/react-animation-comparison/blob/master/src/velocity-react-example.js)
* [velocity-react docs](https://github.com/google-fabric/velocity-react)

7.  **react-motion**

* An hour and a half wasn't enough time for me to understand the intricacies of this physics-based animation library and to create the example animation.
* [my sad animation attempt](https://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=React-Motion&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
* [my code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-motion-example.js)
* [react motion docs](https://github.com/chenglou/react-motion)


## Run the project locally

1. `yarn` or `npm install`
2. `yarn start` or `npm start`

