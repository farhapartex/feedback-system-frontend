import React, {Component} from "react";
import {ListGroup, Table, Container} from "react-bootstrap";
import FeedbackCard from "./FeedbackCard";
import Thead from "../common/table/Thead";
import Trow from "../common/table/Trow";


const  dummyFeedbackData = [
    {
        title: "Where does it come from?",
        shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        supporter: "259",
        reviewer: "Nazmul Hasan"
    },
    {
        title: "Where can I get some?",
        shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        supporter: "164",
        reviewer: null
    },
    {
        title: "Where does it come from?",
        shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        supporter: "114",
        reviewer: null
    }

];

class FeedbackList extends Component{

    tableColums = ["#", "Department", "Topic", "Status", "Feedbacks", "Action"]
    tableRows = [
        {
            "id": 1,
            "department": "Engineering",
            "topic": "The use of negative feedback in amplifier and process control",
            "status": "Running",
            "feedbacks": 124,
            "action": "View"
        },
        {
            "id": 2,
            "department": "Marketing",
            "topic": "The use of negative feedback in amplifier and process control",
            "status": "Resolved",
            "feedbacks": 268,
            "action": "View"
        },
        {
            "id": 3,
            "department": "Engineering",
            "topic": "The use of negative feedback in amplifier and process control",
            "status": "Resolved",
            "feedbacks": 322,
            "action": "View"
        }
    ]

    renderListItem = () =>{
        let dataList = []
        dummyFeedbackData.forEach((item, index) => {
            dataList.push(<ListGroup.Item key={index}><FeedbackCard title={item.title} shortDescription={item.shortDescription} supporter={item.supporter} reviewer={item.reviewer}/></ListGroup.Item>)
        })

        return dataList;
    }

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