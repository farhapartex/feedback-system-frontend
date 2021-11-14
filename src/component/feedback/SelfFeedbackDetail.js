import React, {useState} from "react";
import { useParams, } from "react-router";
import { Container, Alert } from "react-bootstrap";
import ShortSummary from "./summary/ShortSummary";
import { ShortSummaryData } from "../../dummyData/shortSummaryData";

const SelfFeedbackDetail = () => {
        const params = useParams();
        console.log(parseInt(params.id));
        const [shortSummaryObj, setShortSummaryObj] = useState(ShortSummaryData[parseInt(params.id)-1]);
    
        return (
            <div className="w-100"> 
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

            </div>
        )
}

export default SelfFeedbackDetail;