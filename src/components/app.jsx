import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const gifs = [
      { id: "xT9IgDEI1iZyb2wqo8" },
      { id: "S9crjCfQXC78ST61iv" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="xT9IgDEI1iZyb2wqo8"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
