import cssAni from 'css-animation';

/* eslint-disable no-param-reassign */
const toggleHeightAnim = (node, show, contentHeight, done) => {
  let height;
  cssAni(node, '__card__', {
    start() {
      node.style.overflow = 'hidden';
      if (!show) {
        node.style.height = `${node.offsetHeight}px`;
        node.style.opacity = 0;
      } else {
        height = node.offsetHeight;
        node.style.height = 0;
        node.style.opacity = 1;
      }
    },
    active() {
      node.style.height = `${show ? height : 0}px`;
    },
    end() {
      node.style.height = contentHeight ? `${contentHeight}px` : '';
      node.style.overflow = '';
      node.style.padding = '';
      done();
    },
  });
};
/* eslint-enable no-param-reassign */

export default {
  toggleHeightAnim,
};
