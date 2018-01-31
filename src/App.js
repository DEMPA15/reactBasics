import React, { Component } from 'react';
import Child from './child'

class App extends Component {
    constructor(props){
      super(props)
      this.state ={
        input :"",
        arr: ['World', 'Galaxy', 'Universe', 'Josh', 'gaje', 'sam', 'jon', 'pink'],
      }
      this.type = this.type.bind(this);
      this.alertStuff = this.alertStuff.bind(this);
      this.addString = this.addString.bind(this);
    }

    type(e){
      this.setState({
        input: e.target.value
      })
    }

    addString(){
      if(this.state.input.length> 0){
        this.setState({
          arr: [...this.state.arr, this.state.input],
          input:""
        })
      }
    }
    alertStuff(){
      alert(this.state.input )
    }
  render() {
    
    let stuff;
    if(this.state.input === ""){
       stuff = <div> TYPE TO ADD BUTTON</div>
    }else{
      stuff =  <div> CLICK CLICK ME TO ADD BUTTON</div>
    }
    const buttons = this.state.arr.map((element, index)=>{
      return <Child key = {index}stuff ={this.alertStuff} abc = {element}/>  
    })
    return(
      <div>
      hello world
      <input type="text" value={this.state.input} onChange={this.type}/>
      <button onClick = {this.addString}>click me</button>
      <br/>
      <br/>
      <hr/>
        {stuff}
       {buttons}
      </div>
    )
  }
}

export default App;
