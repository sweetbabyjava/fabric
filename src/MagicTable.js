import React from "react";
import MagicButton from "./MagicButton";
class MagicTable extends React.Component{
    constructor(props){
        super(props)
        this.state = { render: true};
    }
    createTable(){
        let table = []
        for(let i=0; i < 10;i++){

            table.push(<tr><td><MagicButton></MagicButton></td></tr>)
        }
        return table;
    }
    render(){
        return(<table>
            {this.createTable()}
        </table>)

    }

}
export default MagicTable;