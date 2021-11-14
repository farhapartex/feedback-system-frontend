import React from "react";
import { Alert } from "react-bootstrap";

const NotFound = () => {
    return (
        <div className="w-100">
            <Alert variant="secondary">
                <h4 className="text-center">Sorry! 404 Not Found!</h4>
            </Alert>
        </div>
    )
}

export default NotFound;