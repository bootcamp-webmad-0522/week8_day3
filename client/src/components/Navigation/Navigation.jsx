import { useContext } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import { MessageContext } from '../../contexts/userMessage.context'


const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const { setShowMessage } = useContext(MessageContext)

    const logout = () => {
        setShowMessage({ show: true, title: 'Hasta pronto!', text: 'Se ha cerrado tu sesión correctamente' })
        logoutUser()
    }

    return (
        <Navbar bg="dark" expand="md" variant="dark" className='mb-5'>
            <Container>
                <Navbar.Brand>Coasters App!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </Link>
                        <Link to="/galeria">
                            <Nav.Link as="span">Galería</Nav.Link>
                        </Link>


                        {
                            !user
                                ?
                                <>
                                    <Link to="/registro">
                                        <Nav.Link as="span">Registro</Nav.Link>
                                    </Link>
                                    <Link to="/iniciar-sesion">
                                        <Nav.Link as="span">Iniciar sesión</Nav.Link>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to="/crear">
                                        <Nav.Link as="span">Nueva montaña rusa</Nav.Link>
                                    </Link>
                                    <Link to="/">
                                        <Nav.Link as="span">Perfil de {user.username}</Nav.Link>
                                    </Link>
                                    <Nav.Link as="span" onClick={logout}>Cerrar sesión</Nav.Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation