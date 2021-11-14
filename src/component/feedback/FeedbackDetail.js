import React from "react";
import { useParams, } from "react-router";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import FeedbackCommentForm from "./FeedbackCommentForm";
import CommentList from "./CommentList";
import Question from "./Question";
import { questions } from "../../dummyData/questions";


const FeedbackDetail = () => {
        const params = useParams();
        // This section only for demo


        if(params.id === "2"){
            return <Alert variant="info"><span>You already have done with this feedback. Thank you!</span> <Link to="/" ><span className="margin-l1">Back to List</span></Link></Alert>
        }

        return (
            
            <div className="w-100">
                <div className="w-100" id="f-detail-headeing">
                    <h4 className="">Topic: Contrary to popular belief, Lorem Ipsum is not simply random text.</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                        opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                        will uncover many web sites still in their infancy.</p>
                </div>
                <div className="text-center mb-4" id="f-detail-insight">
                    <ul id="feedbackInsight">
                        <li>Department: Engineering</li>
                        <li>Total Feedback: 465</li>
                    </ul>
                </div>

                <div className="w-100">
                    <h5>Feedback Question</h5>
                    {
                        questions.map((item, index) => (
                            <Question key={index} id={item.id} question={item.question} type={item.type} name={item.name} labels={item.labels}/>
                        ))
                    }
                    
                </div>


                <div id="f-comment-block" className="mt-5">
                    <h5>Comments</h5>
                    <FeedbackCommentForm/>
                    <CommentList />
                </div>
            </div>
        )

}

export default FeedbackDetail;