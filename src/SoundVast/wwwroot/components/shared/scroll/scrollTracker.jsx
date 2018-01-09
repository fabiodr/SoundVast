import React from 'react';
import PropTypes from 'prop-types';

class ScrollTracker extends React.Component {
  constructor() {
    super();

    this.state = {
      pastTopOfElement: false,
    };
  }
  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }
  setRef = ref => this.setState({ element: ref })
  trackScrolling = () => {
    const getBoundingClientRect = this.state.element.getBoundingClientRect();

    if (getBoundingClientRect.top <= 0) {
      this.setState({ pastTopOfElement: true });
    } else {
      this.setState({ pastTopOfElement: false });
    }
  }
  render() {
    return this.props.children(this.setRef, this.state);
  }
}

ScrollTracker.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ScrollTracker;
