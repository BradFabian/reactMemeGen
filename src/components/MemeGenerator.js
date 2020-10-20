import React, { Component } from 'react';


export default class MemeGenerator extends Component {

    constructor() {
        super()
        this.state ={
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: [],
        }

        this.changeHandler = this.changeHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    
  componentDidMount(){
    fetch('https://api.imgflip.com/get_memes').then(response => response.json()).then(response => {
        const {memes} = response.data
        this.setState({
          allMemeImgs: memes
        })
    });

    
  }

  changeHandler(event){
    event.preventDefault();
    const {value, name} = event.target
    this.setState({
        [name]: value,
    })

}

    handleSubmit(event){
        event.preventDefault();
        
    // get random int
     let randomInt = Math.floor(Math.random() * this.state.allMemeImgs.length)
     console.log(randomInt);
    // get meme from the index
    const randMemeImg = this.state.allMemeImgs[randomInt].url
     
    //get new image state
    this.setState({ randomImage: randMemeImg})
}
    

    render(){
       
    return (<div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.topText} name='topText' placeholder='Top Text' onChange={this.changeHandler}   ></input>
        <input type='text' value={this.state.bottomText} name='bottomText' placeholder='Bottom Text' onChange={this.changeHandler} ></input>

        <button>Gen</button>
        </form>
        <div className='meme'>
        <img src={this.state.randomImage} alt='random meme'></img>
        <h2 className="top">{this.state.topText} </h2>
        <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        
        
        </div>)
    }

}