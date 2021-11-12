import React, {Component} from "react";
import {ListGroup,} from "react-bootstrap";
import FeedbackCard from "./FeedbackCard";


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

    renderListItem = () =>{
        let dataList = []
        dummyFeedbackData.map((item, index) => {
            dataList.push(<ListGroup.Item key={index}><FeedbackCard title={item.title} shortDescription={item.shortDescription} supporter={item.supporter} reviewer={item.reviewer}/></ListGroup.Item>)
        })

        return dataList;
    }

    render(){
        return (
            <div className="" id="feedbackListBlock">
                <ListGroup>
                    {this.renderListItem()}
                </ListGroup>
            </div>
        )
    }
}

export default FeedbackList;