import PropTypes from 'prop-types';
import { compose, withProps, withStateHandlers, withHandlers, setPropTypes } from 'recompose';
import { withRouter } from 'found';

import DateFilter from './dateFilter';
import getFormattedDate from '../shared/utilities/getFormattedDate';

const propTypes = {
  dateFilterName: PropTypes.string.isRequired,
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

const yearInputToDateUrl = year => getFormattedDate(new Date(year, 0, 1));

const stateHandlers = {
  sliderOnChange: () => value => ({
    tempDateYearValue: value,
  }),
  sliderOnAfterChange: (_, { pushDateToUrlQuery }) => (value) => {
    const date = yearInputToDateUrl(value);

    pushDateToUrlQuery(date);

    return {
      tempDateYearValue: null,
    };
  },
  inputYearOnChange: (_, { pushDateToUrlQuery }) => (e) => {
    const value = e.target.value;

    if (value.length < 4) {
      return {
        tempDateYearValue: parseInt(value, 10),
      };
    } else if (value.length > 4) return null;

    const date = yearInputToDateUrl(value);

    pushDateToUrlQuery(date);

    return null;
  },
};

const createProps = ({
  match,
  tempDateYearValue,
  dateFilterName,
}) => {
  const date = new Date(match.location.query[dateFilterName]);

  return {
    dateValues: {
      year: tempDateYearValue || date.getUTCFullYear(),
      month: date.getUTCMonth(),
      date: date.getUTCDate(),
    },
  };
};

export default compose(
  setPropTypes(propTypes),
  withRouter,
  withHandlers(handlers),
  withStateHandlers(null, stateHandlers),
  withProps(createProps),
)(DateFilter);
