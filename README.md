# Comparing the Ease of Use of Various React Animation Libraries

Read [the blog post](https://www.freshtilledsoil.com/whats-the-most-developer-friendly-react-animation-library/) where I give a more in-depth discussion of this project.

**Update:** I've updated this repo for 2018, adding `popmotion-pose` and `react-spring` examples and updating the `react-transition-group` examples from the V1 api to the V2 Api.

### The Goal: to replicate this animation on entering and exiting react components:
![example animation](./src/example_react_animation.gif)
1. Initially, when it is first rendered in React, the grid should animate in, followed by its children cards
2. Cards can be added individually and should be animated in
3. Cards can be removed individually and should be animated out
4. When the grid is removed from the DOM, it should wait for its children to animate out before animating itself and leaving the DOM 
5. *Stretch goal*: When shuffled, the cards should smoothly transition to their new positions.

### The Arbitrary Limit: Spend as little time as possible learning a library's API and trying to implement the animation.

### The Results

1. **react-move**
  - A lightweight library that applies d3's interpolate to specified components. Ultimately the features it offered were a bit too simple and I struggled to get the complete sequential animation working.
  - [my animation attempt](http://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Using%20react-move&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
  - [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-move-example.js)

3. **react-motion**
  - An hour and a half wasn't enough time for me to understand the intricacies of this physics-based animation library and to create the example animation.
  - [my animation attempt](http://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Using%20react%20motion&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
  - [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-motion-example.js)

4. **velocity-react**
 - A powerful, intuitive option that got me far but then ended up tripping me up when it came time to get the nested leave animations working.
 - [my animation attempt](http://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Using%20velocity-react&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
 - [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/velocity-react-example.js)


 5. **react-transition-group & animejs**
  - Using react-transition-group and a JavaScript animation library ended up being by far my favorite technique
  - [my animation attempt](http://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Using%20react%20transition%20group%20%2B%20animejs&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
  - [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-transition-group-example-anime.js)

  6. **react-transition-group & gsap**
   - Very much like the animejs example. Animejs is more lightweight, ES2015-friendly, and open source, but GSAP is the standard for powerful JavaScript animation libraries.
   - [my animation attempt](http://alex.holachek.com/react-animation-comparison/?selectedKind=Animation%20Examples&selectedStory=Using%20react%20transition%20group%20%2B%20gsap&full=0&down=1&left=1&panelRight=0&downPanel=tuchk4%2Freadme%2Fpanel)
   - [the code](https://github.com/aholachek/react-animation-comparison/blob/master/src/react-transition-group-example.js)
