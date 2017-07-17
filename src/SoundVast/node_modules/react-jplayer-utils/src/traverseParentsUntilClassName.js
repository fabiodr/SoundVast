export default (currentElement, className) => {
  let element = currentElement;

  while (element.parentNode) {
    element = element.parentNode;

    if (element.className !== undefined &&
        element.className.includes(className)) {
      return element;
    }
  }
  return false;
};
