import React from 'react';

export default class Result extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { wrapperType, artistLinkUrl, artistName, primaryGenreName } = this.props;

    return (
      <div class='result'>
        <span class="type">{wrapperType}</span>
        <h3><a href={artistLinkUrl}>{artistName}</a></h3>
        <p>{primaryGenreName}</p>
      </div>
    );
  }
}
