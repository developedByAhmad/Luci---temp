

import React from 'react'
import { Card} from 'react-bootstrap';
import imagetest from './../../assets/calimage.png'
import './propertycontent.css'
const styless = {
    card: {
      backgroundColor: '#B7E0F2',
      borderRadius: 55,
      padding: '3rem'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 55
    }
  }

class ImageUpload extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            image: null
        };

        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            console.log(img);
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };
    render(){
    return (
        <div>
            
                        <input style={{display:"none"}}
                        type="file"
                        name="myImage" 
                         onChange={this.onImageChange} 
                         ref={fileInput => this.fileInput = fileInput} />  
                      
                        <button  onClick={() => this.fileInput.click()} type="submit">
                            Upload Image(s)
                        </button>
                        
                            {/* <img src={this.state.image} alt="Card image" /> */}
                        {/* </Card> */}
                          <div className="imgDiv">
                                <img src={this.state.image} />
                        </div>
        </div>
    )}
}

export default ImageUpload

                       