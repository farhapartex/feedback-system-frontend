import React, {Component} from "react";
import {Table} from "react-bootstrap";
import Thead from "../common/table/Thead";
import Trow from "../common/table/Trow";
import { feedbackDataList } from "../../dummyData/feedbackData";

class FeedbackList extends Component{

    constructor(props){
        super(props);
        this.props = props;
    }

    tableColums = ["#", "Department", "Topic", "Status", "Feedbacks", "Action"]
    tableRows = feedbackDataList;

    renderRows = ()=>{
        let rowList = [];
        this.tableRows.forEach((item, index) => {
            let url = "";
            if(this.props.type === "general"){
                url = "/feedback-detail/" + item["id"];
            }
            else{
                url = "/self-feedback-detail/" + item["id"];
            }
            
            rowList.push(<Trow key={index} rowObj={item} url={url}/>)
        })
        return rowList;
    }

    render(){
        return (
            <div className="" id="feedbackListBlock">
                <Table striped bordered hover>
                    <Thead headColumns={this.tableColums}/>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default FeedbackList;