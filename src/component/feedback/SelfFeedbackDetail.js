import React, {useState} from "react";
import { useParams, } from "react-router";
import { Container, Button, Alert } from "react-bootstrap";
import ShortSummary from "./summary/ShortSummary";
import { ShortSummaryData } from "../../dummyData/shortSummaryData";
import QuestionSummary from "./summary/QuestionSummary";
import { QuestionSummaryData } from "../../dummyData/questionSummaryData";
import {ConfirmationModal } from "../common/modal";

const SelfFeedbackDetail = () => {
        const params = useParams();
        const [isShowModal, setIsShowModal] = useState(false);
        const [isShowBanner, setIsShowBanner] = useState(false);
        const [bannerMessage, setBannerMessage] = useState("");
        const shortSummaryObj = ShortSummaryData[parseInt(params.id)-1];

        const renderQuestionSummary = ()=>{
            let items = [];

            QuestionSummaryData.forEach((item, index) => {
                items.push(<QuestionSummary key={index} summaryData={item}/>)
            });

            return items;
        }

        const handleCloseFeedback = ()=>{
            setIsShowBanner(true);
            setBannerMessage("Your feedback closed successfully.");
            setIsShowModal(false);
        }

        const SuccessBanner = ()=>{
            return <Alert variant="success" onClose={() => setIsShowBanner(false)} dismissible>{bannerMessage}</Alert>
        }

    
        return (
            <div className="w-100">
                {isShowBanner && <SuccessBanner/>}

                <ConfirmationModal show={isShowModal} onHide={() => setIsShowModal(false)} question="Are you sure to close this Feedback?" closeFeedback={handleCloseFeedback}/>
                <div className="w-100">
                    <h5>Topic: The use of negative feedback in amplifier and process control</h5>
                </div>
                <div className="w-100 mt-4">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                        opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                        will uncover many web sites still in their infancy.</p>
                </div>

                <div className="w-100 mt-5" id="selfFeedbackShortSummary">
                    <h5>Short Summary</h5>

                    <Container fluid>
                        <ShortSummary summaryData={shortSummaryObj}/>
                    </Container>
                </div>

                <div className="w-100 mt-5" id="selfFeedbackShortSummary">
                    <Button variant="danger" onClick={()=> {setIsShowModal(true)}}>Close Feedbck</Button>
                </div>

                <div className="w-100 mt-5" id="selfFeedbackShortSummary">
                    <h5>Question Summary</h5>

                    <Container fluid>
                        {renderQuestionSummary()}
                    </Container>
                </div>

            </div>
        )
}

export default SelfFeedbackDetail;