import React, { Component } from 'react';
import Gif from './gif.jsx';
// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />
    })
  }


    render() {
      return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;

// const GifList = (props) => {
//   return (
//     <div className="gif-list">
//       {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
//     </div>
//   );
// };
