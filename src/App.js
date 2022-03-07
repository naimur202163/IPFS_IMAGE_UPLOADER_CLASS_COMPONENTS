import React, { Component } from 'react';
import { ImageUpload } from 'react-ipfs-uploader';
import './App.css';



class App extends Component {
  // const [imageUrl, setImageUrl] = useState('')
  constructor(props) {
    super(props);
    this.state = {
      imageUrl:''
    };
  }

  render(){
    return (
      <div>
      <ImageUpload setUrl={(()=>this.setState({imageUrl:this.imageUrl}))} />
      ImageUrl : <a
          href={this.state.imageUrl}
          target='_blank'
          rel='noopener noreferrer'
      >
          {this.state.imageUrl}
      </a>
  </div>
    );
  }
  
}

export default App;
