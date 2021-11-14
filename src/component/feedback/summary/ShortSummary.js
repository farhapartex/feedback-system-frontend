import React, {Component} from "react";
import { Alert } from "react-bootstrap";


class ShortSummary extends Component{
    render(){
        const summaryData = this.props.summaryData;
        console.log(this.props.summaryData);

        return (
            <div className="row mt-5">
                <div className="col-lg-3 col-sm-12 col-md-4">
                    <Alert variant="info">
                        <p className="text-center">Total Question: {summaryData.totalQuestion}</p>
                    </Alert>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-4">
                    <Alert variant="info">
                        <p className="text-center">Total Feedback: {summaryData.totalFeedback}</p>
                    </Alert>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-4">
                    <Alert variant="info">
                        <p className="text-center">Total View: {summaryData.totalView}</p>
                    </Alert>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-4">
                    <Alert variant="info">
                        <p className="text-center">Total Comment: {summaryData.totalComment}</p>
                    </Alert>
                </div>
            </div>
        )
    }
}

export default ShortSummary;