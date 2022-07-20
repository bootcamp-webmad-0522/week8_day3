import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import coastersService from "../../services/coaster.services"


const CoasterDetails = () => {

    const [coaster, setCoaster] = useState()

    const { coaster_id } = useParams()

    useEffect(() => {

        coastersService
            .getOneCoaster(coaster_id)
            .then(({ data }) => setCoaster(data))
            .catch(err => console.error(err))
    }, [])

    return (

        <Container>
            {
                !coaster
                    ?
                    <Loader />
                    :
                    <>
                        <h1>Detalles de {coaster.title}</h1>
                        <hr />

                        <Row>

                            <Col md={{ span: 6 }}>
                                <h3>Especificaciones</h3>
                                <p>{coaster.description}</p>
                                <ul>
                                    <li>Longitud: {coaster.length}</li>
                                    <li>Inversiones: {coaster.inversions}</li>
                                </ul>
                                <hr />

                                <Link to="/galeria">
                                    <Button as="div" variant="dark">Volver a la galería</Button>
                                </Link>
                            </Col>

                            <Col md={{ span: 4 }}>
                                <img src={coaster.imageUrl} style={{ width: '100%' }} />
                            </Col>

                        </Row>
                    </>
            }

        </Container>
    )
}

export default CoasterDetails