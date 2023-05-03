import './App.css';
import React from 'react';
import App0 from './App0';
import App1 from './App1';
import App2 from './App2';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Car from './App4';

class App extends React.Component {
  constructor(props) {
    console.log("Birth of a component");
    super(props);
    this.state = {
      counter: 0,
      check: false
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    let { counter } = this.state;
    if (counter < 2) {
      counter++;
      this.setState({ counter });
    }

   
  }

  decrement() {
    let { counter } = this.state;
    if (counter !== 0) {
      counter--;

      this.setState({ counter });
    }
  }

  componentDidMount(){
    console.log("after rendering");
    
    setTimeout(()=>{
      this.setState({check : true});
      console.log(this.state.check);
    },5000);
    
  }

  // getSnapshotBeforeUpdate(props,state){
  //   console.log(props,state);
  // }

  componentWillUnmount(){
    console.log("component is dead");
  }

  // componentDidUpdate(){
  //   this.setState({check : false});
  // }

  // static getDerivedStateFromProps(){
  //     return {check:false};
  // }

  
  // shouldComponentUpdate(){
  //   console.log("jfbwijbue");
  //   var x = true;
  //   if(this.state.counter === 2){
  //   x = false;
  //   }
  //   return x;
  // }

  render(){
    console.log("render");
    console.log(this.state.check);
  return (
    <>
    
      {this.state.counter === 0 && <App0 />}

      {this.state.counter === 1 && <App1 />}

      {this.state.counter === 2 && <App2 />}

      <div className='bt-cont text-center'>

       {this.state.counter !==0 && <button className="btn btn-primary btn-lg btn-block nxt-btn" onClick= {this.decrement}>Prev</button>}
        
       {this.state.counter !==2 && <button className="btn btn-secondary btn-lg btn-block nxt-btn" id="nxt-btn" onClick={this.increment}>Next</button>}
        
      </div>

    </>

  )
  
  }
}

export default App;

