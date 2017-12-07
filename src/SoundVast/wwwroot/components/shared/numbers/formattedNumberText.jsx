import PropTypes from 'prop-types';

/**
 *
 * Formats the text to be singular or plural based on the number given
 */
const FormattedNumberText = ({ number, singularText, pluralText }) =>
  `${number} ${number === 1 ? singularText : pluralText}`;

FormattedNumberText.propTypes = {
  number: PropTypes.number.isRequired,
  singularText: PropTypes.string.isRequired,
  pluralText: PropTypes.string.isRequired,
};

export default FormattedNumberText;

