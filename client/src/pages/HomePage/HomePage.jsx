import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <Container>

            <Row>

                <Col md={{ span: 6, offset: 3 }}>

                    <h1>Coaster App!</h1>
                    <hr />
                    <p>La súper MERN de montañas rusas!</p>
                    <Link to="/galeria">
                        <Button variant="dark">Ir a la galería</Button>
                    </Link>

                </Col>

            </Row>

        </Container>
    )
}

export default HomePage