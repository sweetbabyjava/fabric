import React from "react";
import './MagicButton.css';
class MagicButton extends React.Component{
    constructor(props){
        super(props)
        this.state = { render: true};
    }
    deleteMe(){
        this.setState({ render: false});
    }
    render(){
        if(this.state.render){
            return(
                <button onClick={(e) => this.deleteMe(e)}>Lösch mich</button>
            );
        }
        else{
            return null;
        }
    }

}
export default MagicButton;