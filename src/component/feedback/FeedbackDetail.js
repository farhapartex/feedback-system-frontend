import React, {Component} from "react";
import FeedbackCommentForm from "./FeedbackCommentForm";
import CommentList from "./CommentList";
import Question from "./Question";
import { questions } from "../../dummyData/questions";


class FeedbackDetail extends Component{


    render(){
        return (
            <div className="w-100 mt-5">
                <div className="w-100" id="f-detail-headeing">
                    <h4 className="">Contrary to popular belief, Lorem Ipsum is not simply random text.</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                        opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                        will uncover many web sites still in their infancy.</p>
                </div>
                <div className="text-center mb-4" id="f-detail-insight">
                    <ul id="feedbackInsight">
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
}

export default FeedbackDetail;