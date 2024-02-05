import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    const tables = useSelector((state) => getAllTables(state));
    return (
        <>
        <Row className="mb-4">
            <Col>
                <h1>All Tables</h1>
            </Col>
        </Row>
        <Row>
            <Col className="p-0">
                {tables.map(table => (
                    <Card key={table.id} className="mb-4 border-0 border-bottom">
                        <Card.Body className="d-flex justify-content-between">
                            <div style={{marginRight: '10px'}}>
                                <Card.Title className="h1" style={{fontSize: '30px'}}>Table {table.id}</Card.Title>
                            </div>
                            <div className="me-auto mx-3 pt-2 align-items-center">
                                <span><b>Status:</b></span> {table.status}
                            </div>
                            <Link to={`/table/${table.id}`}>
                                <>
                                    <Button>Show more</Button>
                                </>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </Col>
        </Row>
        </>
    )
}
export default Home;