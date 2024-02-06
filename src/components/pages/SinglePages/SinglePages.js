import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getTablesById } from "../../../redux/tablesRedux.js";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";


const SinglePages = () => {
    const { tableId } = useParams();
    const tableData = useSelector(state => getTablesById(state, tableId));
    if(!tableData) return <Navigate to='/'/> 
    return (
        <Form className="ms-0">
        <h1>Table {tableData.id}</h1>
        <Row className="mb-2">
            <Col><strong>Status :</strong></Col>
            <Col xs="auto" style={{marginRight: '33rem'}} >
                <Form.Select value={tableData.status}>
                    <option>{tableData.status}</option>
                </Form.Select>
            </Col>
        </Row>
        <Row className="mb-2">
            <Col><strong>People</strong></Col>
            <Col xs="auto" style={{marginRight: '-1.7rem',marginLeft: '-39.7rem'}}>
                <Form.Control style={{marginRight: '-11rem'}} value={tableData.peopleAmount} />
            </Col>
            <Col xs="auto" style={{marginRight: '-1.7rem'}}>
                <InputGroup.Text className="border-0 bg-transparent">/</InputGroup.Text>
            </Col>
            <Col xs="auto">
                <Form.Control style={{marginRight: '-11rem'}} value={tableData.maxPeopleAmount} />
            </Col>
        </Row>
        <Row className="mb-2"> 
            <Col><strong>Bill :</strong></Col>
            <Col xs="auto" style={{marginLeft: '-39.7rem'}}>
                <InputGroup.Text className="border-0 bg-transparent">$</InputGroup.Text>
            </Col>
            <Col xs="auto">
                <Form.Control style={{textAlign: 'center' ,marginRight: '-10rem'}} value={tableData.bill} />
            </Col>
        </Row>
        <Button type="submit">Update</Button>
    </Form>
    )
}
export default SinglePages;