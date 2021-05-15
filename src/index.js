const API = 'https://randomfox.ca/images/';

const addButton = document.getElementById('add-button');
const cleanButton = document.getElementById('clean-button');
const imagesContainer = document.getElementById('images-container');
const prevIndex = [];

// Create a random index that hasn't been used before
const randomIndex = () => {
  let flag;
  let newIndex;
  do {
    flag = false;
    newIndex = Math.floor(Math.random() * 122) + 1;
    prevIndex.forEach((index) => {
      if (newIndex === index) {
        flag = true;
      }
    });
  } while (flag);
  prevIndex.push(newIndex);
  return newIndex;
};

// Create an observer for images in viewport
const printImageIntersected = (entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.src = entries[0].target.dataset.src;
    removeObserverTarget(entries[0].target);
  }
  // console.log('hola');
};

const observer = new IntersectionObserver(printImageIntersected);

const addNewObserverTarget = (target) => {
  observer.observe(target);
};

const removeObserverTarget = (target) => {
  observer.unobserve(target);
};

//Insert and removes images in the DOM
const insertImage = () => {
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  image.dataset.src = `${API}${randomIndex()}.jpg`;
  figure.appendChild(image);
  imagesContainer.append(figure);
  addNewObserverTarget(image);
};

const removeImage = () => {
  while (imagesContainer.childElementCount > 0) {
    imagesContainer.removeChild(imagesContainer.lastChild);
  }
};

// Event listeners for the buttons that load/removes images
addButton.addEventListener('click', insertImage);
cleanButton.addEventListener('click', removeImage);
