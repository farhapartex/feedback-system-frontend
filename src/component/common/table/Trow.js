import React, {Component} from "react";
import { Link } from "react-router-dom";


class Trow extends Component{

    renderCell = ()=>{
        let rowDataList = [];
        const rowObj = this.props.rowObj;
        Object.keys(rowObj).forEach((key) => {
            if(key === "action"){
                rowDataList.push(<td><Link to={"/feedback-detail/1"} className="anchor">{rowObj[key]}</Link></td>)
            }
            else{
                rowDataList.push(<td>{rowObj[key]}</td>)
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