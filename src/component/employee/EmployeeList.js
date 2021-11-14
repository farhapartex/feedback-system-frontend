import React, {useState} from "react";
import { useSelector } from "react-redux";
import {Table, Button, Alert} from "react-bootstrap";
import Thead from "../common/table/Thead";
import Trow from "../common/table/Trow";
import { EmployeeListData } from "../../dummyData/employeeListData";
import { EmployeeInviteModal } from "../common/modal";
const EmployeeList = ()=> {
    let user = useSelector((state) => state.user);

    const tableColums = ["#", "First Name", "Last Name", "Designation", "Email", "Action"];
    const [isShowInviteModal, setIsShowInviteModal] = useState(false);

    const renderRows = ()=>{
        let rowList = [];
        EmployeeListData.forEach((item, index) => {
            let url = "/employee-detail/" + item.id;
            
            rowList.push(<Trow key={index} rowObj={item} url={url}/>)
        })
        return rowList;
    }

    if(!user.user.isAdmin){
        return (
            <Alert variant="secondary">
                <p className="text-center"><b>You're not permitted for this page!</b></p>
            </Alert>
        )
    }

    return (
        <div className="w-100">
            {<EmployeeInviteModal show={isShowInviteModal} onHide={() => setIsShowInviteModal(false)}/>}
            <div className="mx-auto mb-3">
                <Button variant="primary" className="float-right" onClick={()=>{setIsShowInviteModal(true)}}>Invite Employee</Button>
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