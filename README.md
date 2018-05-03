# Comparing the Ease of Use of Different React Animation Libraries

Read [the blog post](https://www.freshtilledsoil.com/whats-the-most-developer-friendly-react-animation-library/) where I give a more in-depth discussion of this project.

**Update:** I've updated this repo for 2018, adding `popmotion-pose` and `react-spring` examples and updating the `react-transition-group` examples from the V1 api to the V2 Api.

### The Goal: to replicate this animation on entering and exiting react components:

![example animation](./src/example_react_animation.gif)

1.  Initially, when it is first rendered in React, the grid should animate in, followed by the staggered animation of its children cards
    Cards can be added individually to the cards array and should be animated in
2.  Cards can be removed individually from the cards array and should be animated out as they leave
3.  When the grid is removed from the DOM, it should wait for its children to animate out before animating itself and leaving the DOM
4.  _Stretch goal_: When shuffled, the cards should smoothly transition to their new positions.

### The Arbitrary Limit: Spend as little time as possible learning a library's API and trying to implement the animation.

### The Results (Roughly in order of preference)

1.  **popmotion-pose**

2.  **react-transition-group & animejs**

* Using react-transition-group and a JavaScript animation library ended up being by far my favorite technique
* [my animation attempt](http://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Using%20react%20transition%20group%20%2B%20animejs&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/examples/react-transition-group-example-anime.js)

3.  **react-transition-group & gsap**

* Very much like the animejs example. Animejs is more lightweight, ES2015-friendly, and open source, but GSAP is the standard for powerful JavaScript animation libraries.
* [my animation attempt](http://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Using%20react%20transition%20group%20%2B%20gsap&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/examples/react-transition-group.js)

4.  **react-spring**

* A lightweight library that applies d3's interpolate to specified components.
* [my animation attempt](http://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Using%20react-move&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/examples/react-spring.js)

5.  **react-move**

* A lightweight library that applies d3's interpolate to specified components.
* [my animation attempt](http://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Using%20react-move&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/examples/react-move.js)

6.  **velocity-react**

* A powerful, intuitive option that got me far but then ended up tripping me up when it came time to get the nested leave animations working.
* [my animation attempt](http://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Using%20velocity-react&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/examples/velocity-react.js)

7.  **react-motion**

* An hour and a half wasn't enough time for me to understand the intricacies of this physics-based animation library and to create the example animation.
* [my animation attempt](http://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Using%20react%20motion&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
* [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/examples/react-motion.js)


