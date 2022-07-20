import { Routes, Route } from 'react-router-dom'
import CoasterDetails from '../pages/CoasterDetails/CoasterDetails'
import CoastersPage from '../pages/CoastersPage/CoastersPage'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NewCoasterPage from '../pages/NewCoasterPage/NewCoasterPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<CoastersPage />} />

            <Route path="/crear" element={<PrivateRoute />}>
                <Route path="" element={<NewCoasterPage />} />
            </Route>


            <Route path="/detalles/:coaster_id" element={<CoasterDetails />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
        </Routes>
    )
}

export default AppRoutes