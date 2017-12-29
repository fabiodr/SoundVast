import React from 'react';
import { Link } from 'found';

import styles from './songsHeader.less';
import Button from '../shared/button/button';

const SongsHeader = () => (
  <div className={styles.songsHeader}>
    <Button><Link to="/genres/songs">Genres</Link></Button>
    <Button><Link to="/artists">Artists</Link></Button>
    <Button><Link to="/albums">Albums</Link></Button>
  </div>
);

export default SongsHeader;
