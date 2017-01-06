import React from 'react';

import Header from './Header';
import Search from './Search';

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}
