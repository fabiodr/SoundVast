import PropTypes from 'prop-types';
import { compose, withProps, withStateHandlers, withHandlers, setPropTypes } from 'recompose';
import { withRouter } from 'found';

import DateFilter from './dateFilter';
import daysBetween from '../shared/utilities/daysBetween';
import getFormattedDate from '../shared/utilities/getFormattedDate';

const propTypes = {
  dateFilterName: PropTypes.string.isRequired,
};

const daysAgoInputToDateUrl = (daysAgo) => {
  const date = new Date();

  date.setUTCDate(date.getUTCDate() + daysAgo);

  return getFormattedDate(date);
};

const handlers = {
  pushDateToUrlQuery: ({ match, router, dateFilterName }) => (date) => {
    router.push({
      pathname: match.location.pathname,
      query: {
        ...match.location.query,
        [dateFilterName]: date,
      },
    });
  },
};

const secondHandlers = {
  inputOnBlur: ({ pushDateToUrlQuery }) => (e) => {
    let value = e.target.value;

    // TODO: change magic numbers to .env file
    if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }

    const date = daysAgoInputToDateUrl(-value);

    pushDateToUrlQuery(date);
  },
};

const stateHandlers = {
  sliderOnChange: () => value => ({
    tempDaysValue: value,
  }),
  sliderOnAfterChange: (_, { pushDateToUrlQuery }) => (value) => {
    const date = daysAgoInputToDateUrl(-value);

    pushDateToUrlQuery(date);

    return {
      tempDaysValue: null,
    };
  },
  inputOnChange: () => e => ({
    tempDaysValue: e.target.value,
  }),
};

const createProps = ({
  match,
  tempDaysValue,
  dateFilterName,
}) => {
  const date = new Date(match.location.query[dateFilterName]);
  let daysBetweenValue = daysBetween(new Date(), date);

  if (daysBetweenValue < 0) {
    daysBetweenValue *= -1;
  }

  const daysAgo = tempDaysValue !== null ? tempDaysValue : Number(daysBetweenValue);

  return {
    daysAgo,
  };
};

export default compose(
  setPropTypes(propTypes),
  withRouter,
  withHandlers(handlers),
  withHandlers(secondHandlers),
  withStateHandlers({
    tempDaysValue: null,
  }, stateHandlers),
  withProps(createProps),
)(DateFilter);
