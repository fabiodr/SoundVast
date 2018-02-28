let documentScrollTop = 0;
let bodyScrollTop = 0;

export const disableBodyScroll = () => {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';

    // following is neccessary on iOS. position fixed will reset scroll position
    documentScrollTop = window.document.documentElement.scrollTop;
    bodyScrollTop = window.document.body.scrollTop;
    document.body.style.position = 'fixed';
  }
};

export const resetBodyScroll = () => {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = '';

    // reset position and scroll position
    document.body.style.position = '';

    try {
      window.document.documentElement.scrollTop = documentScrollTop;
    } catch (e) { console.error(e); } // eslint-disable-line no-console

    try {
      window.document.body.scrollTop = bodyScrollTop;
    } catch (e) { console.error(e); } // eslint-disable-line no-console
  }
};
