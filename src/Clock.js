import React from "react";
import './Clock.css';
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
class Clock extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {date: new Date()};
    }
    
    componentDidMount(){
        this.ticker = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.ticker);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
    return (
  <div id="Clock"><h1>{this.state.date.toLocaleTimeString()} -- {this.state.date.toLocaleDateString('de-DE', options)}</h1> </div>
    );
} 
}
export default Clock;
