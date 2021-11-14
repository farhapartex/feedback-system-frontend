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
            rowDataList.push(<td key={key}>{rowObj[key]}</td>)
        })

        if(this.props.url){
            rowDataList.push(<td key="url"><Link to={this.props.url} className="anchor">View</Link></td>)
        }
        return rowDataList;
    }

    render(){
        return (
            <tr>{this.renderCell()}</tr>
        )
    }
}

export default Trow;