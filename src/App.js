import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hello');
  }
  state = {
    count : 0,

  };

  add = () => {
    //this.setState({count : this.count.state +1});
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    //this.setState({count : this.count.state -1});
    this.setState(current => ({
      count: current.count - 1,
    }));
  };

  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate(){
    console.log('updated');
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onclick = {this.add}>Add</button>
        <button onclick = {this.minus}>Minus</button>
      </div>
    )
  }

}

export default App;
