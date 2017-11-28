import _ from 'lodash';

/**
 * Given an Enzyme ShallowWrapper and component identifier, dives() down until the
 * specified component is the root component.
 *
 * @param { Enzyme.ShallowWrapper } shallowWrapper - wrapper to dive into
 * @param { string } name of component to dive for (should match constructor name).
 * @param { object= } options to pass to dive()
 */
const diveTo = (shallowWrapper, identifier, options = { context: {} }) => {
  const instance = shallowWrapper.instance();

  if (instance && shallowWrapper.name() === identifier) {
    return shallowWrapper.dive(); // We found it!
  }

  // Enzyme limitation workaround: until https://github.com/airbnb/enzyme/issues/664 is resolved,
  // it's necessary to manually pass down child context like this
  const context = _.merge({}, instance.getChildContext ? instance.getChildContext() : {},
    options.context);

  return diveTo(shallowWrapper.dive({ context }), identifier, { context });
};

export default diveTo;
