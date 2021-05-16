# Lazy-Loading

Project developed throughout the Platzi course "Manipulating DOM" to practice lazy loading in a web app.

## Project URL

🚀 You can check the project working in the following link: https://wfercanas.github.io/Lazy-Loading/

## Project Description

Create a web page that loads images of foxes whenever a user clicks a button to add one more. Also, the user can decide to delete all the images previously loaded and start again.

## Main Objective

The intention of this project is to practice DOM manipulation. Here you must create elements and append images to the index.html every time the user decides to add one more image of fox.

## Special Challenges

The project has special parts to practice a couple of advanced topics:

1. Each image should load and render only when the user scrolls down where that image should be rendered.
2. In order to check the previous point, the Network tab of the Dev Tools must show that the browser only loads images that can be immediately displayed in the viewport.
3. If the user adds many images and the internet conection is slow, you must show a gray box in the area where the image should be displayed in order to provide that there will be an image when the page finishes loading.
4. The project must print in console the number of images that the user has added and the amount of those that have been loaded so far.

## Key JavaScript Concepts

1. createElement()
2. append()
3. IntersectionObserver
4. observer.observe(target)
5. observer.unobserve(target)

## Things to Improve

1. The figure elements that wraps the images has a **background-color: gray** property to fulfill the requirement of giving feedback to the user about incoming content. That _background-color_, if not disabled with the class 'off', can be seen behind the image because for some reason the figure _height_ is longer than the image _height_. I would be better to make those two dimensions the same and that would let you remove the _setTimeout_ used to turn the **background-color:transparent**.
2. All the logic is within index.js, but it would be preferable to decouple it in at least two files. One for the DOM manipulation when using the buttons, and another for the Intersection Observer logic.

## Acknowledgements

To [@jonalvarezz](https://twitter.com/jonalvarezz) for his amazing class and to [Random Fox](https://randomfox.ca/) for his amazing fox photos.
