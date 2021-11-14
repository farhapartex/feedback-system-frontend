import React, {Component} from "react";
import { Link } from "react-router-dom";


class Trow extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    renderCell = ()=>{
        let rowDataList = [];
        const rowObj = this.props.rowObj;
        Object.keys(rowObj).forEach((key) => {
            if(key === "action"){
                rowDataList.push(<td key={key}><Link to={this.props.url} className="anchor">{rowObj[key]}</Link></td>)
            }
            else{
                rowDataList.push(<td key={key}>{rowObj[key]}</td>)
            }
            
        })
        return rowDataList;
    }

    render(){
        return (
            <tr>{this.renderCell()}</tr>
        )
    }
}

export default Trow;