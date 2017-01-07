import React from 'react';
import throttle from 'lodash/fp';
import jsonp from 'jsonp';

import Result from './Result';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
    this.retrieveData = _.throttle(this.retrieveData, 1500, {'leading': false});
  }

  handleInput(e) {
    this.retrieveData(e.target.value);
  }

  retrieveData(input) {
    let url = 'https://itunes.apple.com/search?term=' + input + '&limit=10&entity=musicArtist';

    jsonp(url, (err, data) => {
      let results = data.results;
      results ? this.setState({results}) : null;
    });
  }

  render() {
    const { results } = this.state;

    const SearchResults = results.map((result) => {
      return <Result key={result.artistId} {...result}/>;
    });

    return (
      <main>
        <section class='search'>
          <p>Type anything to start searching artists</p>
          <div class='form'>
            <input onChange={this.handleInput.bind(this)} type='text' placeholder='e.g. Justin Bieber...' />
          </div>
        </section>
        <section class='results'>{SearchResults}</section>
      </main>
    );
  }
}
