import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classnames from 'classnames';

import SearchIcon from '../../icons/search';
import styles from './search.less';
import Button from '../../shared/button/button';

const Search = ({
  handleSubmit,
  className,
}) => (
  <form
    onSubmit={handleSubmit}
    action=""
    className={classnames(styles.search, className)}
  >
    <Field
      placeholder="Search"
      name="search"
      id="search"
      component="input"
      className={styles.searchField}
    />
    <Button title="Search" styleName="secondary" className={styles.searchButton}>
      <SearchIcon className={styles.searchIcon} />
    </Button>
  </form>
);

Search.defaultProps = {
  className: null,
};

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Search;
