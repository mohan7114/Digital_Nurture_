import React, { Component } from 'react'

export default class EventsDemo extends Component {

    constructor(props){
        super(props);
        this.state={
            count:0,
            message:'',
            rupees:'',
            euro:''
        };
    }

    increment =()=>{
        this.setState((prevState) => ({
      count: prevState.count + 1
        }));
    };
    decrement = ()=>{
         this.setState((prevState) => ({
      count: prevState.count - 1
        }));
    };
    increase = ()=>{
        this.increment();
        this.decrement();
        this.staticMessage();
    };
    sayHello = ()=>{
        this.setState({message: 'Hello from React Event..!!'});
    };
    staticMessage = ()=>{
        alert('This is the static message from the Increase button');
    };
    sayWelcome = (msg)=>{
        alert('Welcome message: '+msg);
    };
    handlePress = () => {
        alert('I was clicked');
    };

    handleChange = (e) => {
        this.setState({ rupees: e.target.value });
    };

    handleSubmit= ()=>{
       const { rupees } = this.state;
        if (rupees && !isNaN(rupees)) {
        const euro = (parseFloat(rupees) / 90).toFixed(2); // assuming 1 Euro = ₹90
        this.setState({ euro });
        } else {
        alert("Please enter a valid number in INR");
        }
    }

    render() {
    return (
      <div style={{padding : '30px'}}>
         <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button><br/>
        <button onClick={this.decrement}>Decrement</button><br/>
        <button onClick={this.increase}>Increase</button>

        <h3>{this.state.message}</h3>
        <button onClick={()=> this.sayWelcome('Welcome to React..!')}>Say Welcome</button>

        <br /><br />
        <button onClick={this.handlePress}>Click on me</button>

        <br /><br />
        <div>
          <h2 style={{color: 'green'}}>Currency Converter (₹ ➜ €)</h2>
          <input
            type="text"
            value={this.state.rupees}
            onChange={this.handleChange}
            placeholder="Enter amount in INR"
          />
          <button onClick={this.handleSubmit}>Convert</button>
          <h3>Equivalent Euro: € {this.state.euro}</h3>
        </div>
      </div>
    )
  }
}
