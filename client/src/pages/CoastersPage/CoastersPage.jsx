import { useState, useEffect, useContext } from "react"
import coastersService from "../../services/coaster.services"

import { Container, Modal } from 'react-bootstrap'
import CoastersList from "../../components/CoastersList/CoastersList"
import CoasterForm from "../../components/CoasterForm/CoasterForm"
import Loader from "../../components/Loader/Loader"

import { MessageContext } from "../../contexts/userMessage.context"
import { AuthContext } from "../../contexts/auth.context"



const CoastersListPage = () => {

    const [coasters, setCoasters] = useState([])
    const [showModal, setShowModal] = useState(false)

    const { setShowMessage } = useContext(MessageContext)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadCoasters()
    }, [])


    const loadCoasters = () => {
        coastersService
            .getCoasters()
            .then(({ data }) => {
                setCoasters(data)
                setShowMessage({ show: true, title: 'Bienvenid@', text: `Se han cargado las ${data.length} montañas rusas` })
            })
            .catch(err => console.error(err))
    }

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
        loadCoasters()
        setShowMessage({ show: true, title: 'Completado', text: 'Montaña rusa creada en la BBDD' })
    }

    return (

        <>

            <Container>

                <h1>Galería de montañas rusas {user && <span onClick={openModal}>+</span>} </h1>
                <hr />
                {
                    coasters.length ? <CoastersList coasters={coasters} /> : <Loader />
                }

            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva montaña rusa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CoasterForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default CoastersListPage