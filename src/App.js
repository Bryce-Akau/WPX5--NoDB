import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form.js';
import Something from './something.js';
import Footer from './footer.js';
import Disclaimer from './Disclaimer.js';
import Credit from './Credit.js';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      memes: [],
      url: '',
      description: '',
      id: null,
      currentMeme: {}, 
    }
    this.getDevLife = this.getDevLife.bind(this)
    this.getSingle = this.getSingle.bind(this)
    this.getGirls = this.getGirls.bind(this)
    this.updateMemes = this.updateMemes.bind(this)
    this.memeEdit = this.memeEdit.bind(this)
    this.memeDelete = this.memeDelete.bind(this)

  }
  
  componentDidMount(){
    axios.get('/api/meme').then(response =>{
      this.setState(() => ({
        memes: response.data
      }))
    })
    .catch(err => {
      console.log(err)
    })
  }

  getDevLife(){
    if( this.state.memes ){
      let slice = this.state.memes.slice()
      console.log( slice )
        let filteredMemes = slice.filter( e => {
          if( e.type === "Web Dev" ) {
            return true
          }
        })
        console.log( filteredMemes )
        let num = Math.floor( Math.random(1) * filteredMemes.length);
        console.log( num )
        return filteredMemes.map(( value, i ) => {
          console.log( value.id )
          if ( i === num ){
            console.log( value )
            this.setState({
              url: value.url,
              description: value.description,
              id: value.id
            })
          }
      })
    }
  }

  getSingle(){
    if( this.state.memes ){
      let slice = this.state.memes.slice()
      console.log( slice )
        let filteredMemes = slice.filter( e => {
          if( e.type === "Single" ) {
            return true
          }
        })
        console.log( filteredMemes )
        let num = Math.floor( Math.random(1) * filteredMemes.length);
        console.log( num )
        return filteredMemes.map(( value, i ) => {
          console.log( value.id )
          if ( i === num ){
            console.log( value )
            this.setState({
              url: value.url,
              description: value.description,
              id: value.id
            })
          }
      })
    }
  }

  getGirls(){
    if( this.state.memes ){
      let slice = this.state.memes.slice()
      console.log( slice )
        let filteredMemes = slice.filter( e => {
          if( e.type === "Girls" ) {
            return true
          }
        })
        console.log( filteredMemes )
        let num = Math.floor( Math.random(1) * filteredMemes.length);
        console.log( num )
        return filteredMemes.map(( value, i ) => {
          console.log( value.id )
          if ( i === num ){
            console.log( value )
            this.setState({
              url: value.url,
              description: value.description,
              id: value.id
            })
          }
      })
    }
  }
  
  updateMemes(memes){
    this.setState({memes, currentMeme: {}})
  }

  memeDelete(){
    // this.setState({memes, currentMeme: {}})
      axios.delete(`/api/meme/${this.state.id}`).then(response => {
        console.log(response.data)
        this.setState({
          memes: response.data,
          url: '',
          description: '',
          id: ''
        })
      })
  }

  memeEdit(){
    console.log('hit')
    if(this.state.memes){
      let index = this.state.memes.findIndex((e) => e.url === this.state.url)
      console.log(index)
      this.setState({
        currentMeme: this.state.memes[index],
        url: ''
      })
    }
  }


  render() {
    console.log(this.state.memes)
    return (
      <div className="App">
          <div className="something">
            <Something something= {this.something}/>
          </div>
          <br/>
          <div className="Dev Life">
            <button onClick= {this.getDevLife}>#DevLife #TylersWords</button>
            {this.state.url ? 
                <div className="URL">
                <span onClick={() => this.setState({url: ''})} className="close">&times;</span>
                <div>
                  <img src={this.state.url} alt=""/>
                  {this.state.description}
                </div>
                <div className='button-container'>
                  <button onClick= {this.memeEdit}>Edit</button>
                  <button onClick= {this.memeDelete}>Delete</button>
                </div>
                </div>
                  : 
                  null }
          </div>
          <br/>
          <div className="Single">
            <button onClick= {this.getSingle}>#SingleLife #NotFatImFluffy</button>
          </div>
          <br/>
          <div className="Girls">
            <button onClick= {this.getGirls}>#女の子が混乱しています</button>
          </div>
          <Form updateMemes={this.updateMemes} edit={this.state.currentMeme}/>
          <br/>
          {/* <div className="dontlook">THAT IS ALL NO QUESTIONS</div>
          <br/> */}
          {/* <div>(\__/)</div>
          <div>...(^o^)/”)</div>
          <div>...( (”’)(”’)</div>
          <br/> */}
          <div className="disclaimer">
              <Disclaimer disclaimer= {this.disclaimer}/>
          </div>
          <div className="footer">
            <Footer footer= {this.footer}/>
          </div>
          <br/>
          <div className="disclaimer2">
              <Disclaimer disclaimer= {this.disclaimer}/>
          </div>
          <div className="credit">
              <Credit credit= {this.credit}/>
          </div>
      </div>
    );
  }
}

export default App;
