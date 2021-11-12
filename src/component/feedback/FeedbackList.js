import React, {Component} from "react";
import {ListGroup, Table, Container} from "react-bootstrap";
import FeedbackCard from "./FeedbackCard";
import Thead from "../common/table/Thead";
import Trow from "../common/table/Trow";
import { feedbackDataList } from "../../dummyData/feedbackData";

class FeedbackList extends Component{

    tableColums = ["#", "Department", "Topic", "Status", "Feedbacks", "Action"]
    tableRows = feedbackDataList;

    renderRows = ()=>{
        let rowList = [];
        this.tableRows.forEach((item, index) => {
            rowList.push(<Trow rowObj={item}/>)
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