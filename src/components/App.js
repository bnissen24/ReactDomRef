import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      urlInput: 'https://www.tribality.com/wp-content/uploads/2015/11/SCAG-Sword-Coast-Map.png',
      imageUrl: 'https://www.tribality.com/wp-content/uploads/2015/11/SCAG-Sword-Coast-Map.png',
      imageHeight: 0,
      imageWidth: 0,
      errorMessage: ''
    }

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setImageDimensions);
  }

  setImageDimensions = () => {
    const imageHeight = this.imageRef.current.clientHeight;
    const imageWidth = this.imageRef.current.clientWidth;

    this.setState({ imageHeight, imageWidth });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ imageUrl: this.state.urlInput });
  }

  render() {
    return (
      <div className="container">

        <form onSubmit={this.onSubmit}>
          <label>Image URL</label>
          <input type="text" value={this.state.urlInput} onChange={(e) => this.setState({ urlInput: e.target.value })} />
        </form>

        <div className="image-props">
          <div>Image Height: {this.state.imageHeight }</div>
          <div>Image Width: {this.state.imageWidth }</div>
        </div>

        <div className="image-container">
          <img src={this.state.imageUrl} ref={this.imageRef} />
        </div>

      </div>
    );
  }
}

export default App;