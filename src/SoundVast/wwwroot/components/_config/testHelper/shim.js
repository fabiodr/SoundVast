// https://github.com/facebookincubator/create-react-app/issues/3199
global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};
