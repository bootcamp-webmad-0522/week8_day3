import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CoasterForm from "../../components/CoasterForm/CoasterForm"


const NewCoasterPage = () => {

    const navigate = useNavigate()


    return (

        <Container>

            <h1>Nueva montaña rusa</h1>

            <hr />

            <CoasterForm fireFinalActions={() => navigate(`/galeria`)} />

        </Container>
    )
}

export default NewCoasterPage