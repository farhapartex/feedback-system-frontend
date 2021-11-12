import React, {Component} from "react";
import FeedbackCommentForm from "./FeedbackCommentForm";


class FeedbackDetail extends Component{


    render(){
        return (
            <div className="w-100 mt-5">
                <div className="w-100" id="f-detail-headeing">
                    <h4 className="text-center">Contrary to popular belief, Lorem Ipsum is not simply random text.</h4>
                </div>
                <div className="text-center" id="f-detail-insight">
                    <ul id="feedbackInsight" className="text-center">
                        <li>Total Vote: 465</li>
                        <li>Not Resolved</li>
                    </ul>
                </div>
                <div className="mt-5" id="f-detail">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                        opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                        will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
                        accident, sometimes on purpose (injected humour and the like).</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                    its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                    opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                    packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                    will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
                    accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                    its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                    opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                    packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                    will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
                    accident, sometimes on purpose (injected humour and the like).</p>

                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                        opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                        will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
                        accident, sometimes on purpose (injected humour and the like).</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                    its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                    opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                    packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                    will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
                    accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                    its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                    opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                    packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                    will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
                    accident, sometimes on purpose (injected humour and the like).</p>
                </div>


                <div id="f-comment-block" className="mt-5">
                    <h5>Comments</h5>
                    <FeedbackCommentForm/>
                </div>
            </div>
        )
    }
}

export default FeedbackDetail;