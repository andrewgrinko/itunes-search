import React from 'react';

export default class Search extends React.Component {

  render() {
    return (
      <main>
        <section class='search'>
          <p>Type anything to start searching artists</p>
          <div class='form'>
            <input id='input' type='text' placeholder='e.g. Justin Bieber...' />
          </div>
        </section>
        <section class='results'></section>
      </main>
    );
  }
}
