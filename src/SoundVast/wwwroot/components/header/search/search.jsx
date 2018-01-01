import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classnames from 'classnames';

import SearchIcon from '../../icons/search';
import styles from './search.less';
import Button from '../../shared/button/button';

const Search = ({
  handleSubmit,
  searchOnFocus,
  searchOnBlur,
  searchExpanded,
  className,
}) => (
  <form
    onSubmit={handleSubmit}
    action=""
    className={classnames(styles.search, searchExpanded && styles.searchExpanded, className)}
  >
    <Field
      onFocus={searchOnFocus}
      onBlur={searchOnBlur}
      placeholder="Search"
      name="search"
      id="search"
      component="input"
      className={styles.searchField}
    />
    <Button styleName="secondary" className={styles.searchButton}>
      <SearchIcon className={styles.searchIcon} />
    </Button>
  </form>
);

Search.defaultProps = {
  className: null,
};

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchOnFocus: PropTypes.func.isRequired,
  searchOnBlur: PropTypes.func.isRequired,
  searchExpanded: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default Search;
