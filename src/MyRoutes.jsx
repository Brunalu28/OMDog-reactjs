import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Learning } from './components/Learning';
import { Register } from './components/Register';
import { Login } from './components/Login';

export function MyRoutes(){
    return(
        <Router>
          <Routes>
            <Route path='/' exact element={<Learning />}/>
            {/* <Route path='/Register' element={<Register />}/>
            <Route path='/Login' element={<Login />}/> */}
          </Routes>
        </Router>

    )
}