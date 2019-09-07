import React from 'react';
import axios from 'axios';
import './App.css';
import Display from './components/Display';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    console.log(this.state.data);
  };

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    
    .then( res => 
      
      this.setState({data: res.data})
    )
    .catch(
      err =>
        console.log("error: ", err)
      )
  };
  render() {
    return (
      <div>
        <Display data={this.state.data} />
      </div>
    )
  }


}



export default App;
