import React, {Component} from "react";


class Thead extends Component{

    renderColums =()=>{
        let colList = [];
        const colums = this.props.headColumns;
        colums.forEach(value => {
            colList.push(<th>{value}</th>)
        });
        return colList;
    }

    render(){
        return (
            <thead>
                <tr>
                    {this.renderColums()}
                </tr>
            </thead>
        )
    }
}

export default Thead;