import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: 'Dev Life',
            description: '',
            url: ''
        }
        this.addMeme = this.addMeme.bind(this)
        this.editMeme = this.editMeme.bind(this)
        this.axiosCall = this.axiosCall.bind(this)
    }
    componentWillReceiveProps(props){
        console.log(props)
        this.setState({
            id: props.edit.id,
            type: props.edit.type,
            description: props.edit.description,
            url: props.edit.url
        })
    }

    addMeme(){
        axios.post('/api/meme', this.state).then(response => {
            this.props.updateMemes(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    editMeme(){
        console.log('hit----form')
        axios.put('/api/meme/:id', this.state).then(response => {
            this.props.updateMemes(response.data)
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    axiosCall(){
        if(this.state.id){
            this.editMeme()    
        }
        else{
            this.addMeme()
        }
        this.setState({
            url: '',
            description: ''
        })
    }

    render(){
        return(
            <div>
                <br/>
                <select value= {this.state.type}onChange= {(e) => this.setState({type:e.target.value})}> 
                    <option value="Dev Life">Dev Life</option>
                    <option value="Single">Single</option>
                    <option value="Girls">Girls</option>
                </select>
                <input value= {this.state.description} placeholder="Description" onChange= {(e) => this.setState({description:e.target.value})}type="text"/>
                <input value= {this.state.url}placeholder="url" onChange= {(e) => this.setState({url:e.target.value})}type="text"/>
                <button onClick= {this.axiosCall} >Submit</button>
            </div>
        )
    }
}

export default Form