import React, {Component} from "react";
import { ListGroup } from 'react-bootstrap';

class CommentList extends Component{


    render(){
        return (
            <div className="w-100 mt-5">
                <ListGroup>
                    <ListGroup.Item><span className="commentBy">(Mr. Tony Stark)</span>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</ListGroup.Item>
                    <ListGroup.Item><span className="commentBy">(Mr. Thor)</span>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</ListGroup.Item>
                    <ListGroup.Item><span className="commentBy">(Mr. Thanos)</span>web page editors now use Lorem Ipsum as their default model text</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default CommentList;