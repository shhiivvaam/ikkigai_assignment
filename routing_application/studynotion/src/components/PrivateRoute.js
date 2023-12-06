import {Navigate} from 'react-router-dom'

const PrivateRoute = ({isLoggedIn, children}) => {

    // const navigate = useNavigate();

    if(isLoggedIn) {
        return children;
    }
        return <Navigate to='/login'/> 
        // navigate('/login')
}

export default PrivateRoute