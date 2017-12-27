import React from 'react';
import PropTypes from 'prop-types';
import { Range, createSliderWithTooltip } from 'rc-slider';

import styles from './filters.less';
import Button from '../shared/button/button';
import FilterText from './filterText';

const TooltipRange = createSliderWithTooltip(Range);

const Filters = ({
  filter,
  filterMax,
  topRated,
  mostCommented,
  mostPlayed,
  onAfterChange,
  from,
  to,
}) => (
  <div>
    <div className={styles.filterToggles}>
      <Button onClick={() => filter('newest', true)}>Newest</Button>
      <Button onClick={() => filter('topRated', [from, to])}>Top Rated</Button>
      <Button onClick={() => filter('mostCommented', [from, to])}>Most Commented</Button>
      <Button onClick={() => filter('mostPlayed', [from, to])}>Most Played</Button>
      { (topRated || mostCommented || mostPlayed) &&
      (<div>
        <TooltipRange
          className={styles.rangeFilter}
          defaultValue={[from, to]}
          max={20}
          step={1}
          onAfterChange={onAfterChange}
        />
        <div className={styles.rangeFilterLabel}>({from} - {to})</div>
      </div>)
      }
    </div>
    <FilterText filter={topRated} label="Top Rated" from={from} to={to} />
    <FilterText filter={mostCommented} label="Most Commented" from={from} to={to} />
    <FilterText filter={mostPlayed} label="Most Played" from={from} to={to} />
  </div>
);

Filters.defaultProps = {
  from: 0,
  to: 7,
  filterMax: 0,
  topRated: false,
  mostCommented: false,
  mostPlayed: false,
};

Filters.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  filter: PropTypes.func.isRequired,
  filterMax: PropTypes.number,
  topRated: PropTypes.bool,
  mostCommented: PropTypes.bool,
  mostPlayed: PropTypes.bool,
  onAfterChange: PropTypes.func.isRequired,
};

export default Filters;
