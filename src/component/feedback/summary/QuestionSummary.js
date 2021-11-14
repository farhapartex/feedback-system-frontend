import React, {Component} from "react";
import { Alert } from "react-bootstrap";


class QuestionSummary extends Component{
    render(){
        const summaryData = this.props.summaryData;
        const id = this.props.id;

        return (
            <div className="row mt-4">
                <div className="col-12">
                    <p><b>#{id+1}</b> {summaryData.question}</p>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-4">
                    <Alert variant="success">
                        <p className="text-center"><b>First Option</b>: {summaryData.firstOption} Feedbacks</p>
                    </Alert>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-4">
                    <Alert variant="secondary">
                        <p className="text-center"><b>Second Option</b>: {summaryData.secondOption} Feedbacks </p>
                    </Alert>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-4">
                    <Alert variant="info">
                        <p className="text-center"><b>Third Option</b>: {summaryData.thirdOption} Feedbacks </p>
                    </Alert>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-4">
                    <Alert variant="warning">
                        <p className="text-center"><b>Fourth Option</b>: {summaryData.fourthOption} Feedbacks </p>
                    </Alert>
                </div>
            </div>
        )
    }
}

export default QuestionSummary;