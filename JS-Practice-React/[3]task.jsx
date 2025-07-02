import React from 'react'
import './style.css'

class Button extends React.Component{
  constructor(props){
    super(props);
    this.state ={buttonText: 'Show'};
  }
  change = () => {
    this.setState(prevState => ({
        buttonText: prevState.buttonText === 'Show' ? 'Hide' : 'Show'
    }));
  }
  render() {
    return <button onClick={this.change}>{this.state.buttonText}</button>
  }
}
class App extends React.Component {
    render() {
        return <Button/>
    }
}

export default App;