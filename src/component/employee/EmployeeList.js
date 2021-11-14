import React from "react";
import {Table, Button} from "react-bootstrap";
import Thead from "../common/table/Thead";
import Trow from "../common/table/Trow";
import { EmployeeListData } from "../../dummyData/employeeListData";

const EmployeeList = ()=> {
    const tableColums = ["#", "First Name", "Last Name", "Designation", "Email", "Action"];

    const renderRows = ()=>{
        let rowList = [];
        EmployeeListData.forEach((item, index) => {
            let url = "/employee-detail/" + item.id;
            
            rowList.push(<Trow key={index} rowObj={item} url={url}/>)
        })
        return rowList;
    }

    return (
        <div className="w-100">
            <div className="mx-auto mb-3">
                <Button variant="primary" className="float-right">Invite Employee</Button>
            </div>
            <Table striped bordered hover>
                <Thead headColumns={tableColums}/>
                <tbody>
                    {renderRows()}
                </tbody>
            </Table>
        </div>
    )
}

export default EmployeeList;