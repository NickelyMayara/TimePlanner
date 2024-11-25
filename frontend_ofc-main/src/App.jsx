import { BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginPage from './Components/Pages/LoginPage/LoginPage.jsx';
import PaginaInicial from './Components/Pages/PaginaInicial/PaginaInicial.jsx'
import Horarios from './Components/Pages/Horarios/Horarios.jsx';
import Agendamento from './Components/Pages/Agendamento/Agendamento.jsx';

const App = () =>{

    return(
        <>   
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/paginaInicial' element={<PaginaInicial/>}/>
                <Route path='/horarios' element={<Horarios/>}/>
                <Route path='/agendamento' element={<Agendamento/>}/>
            </Routes>
        </BrowserRouter>  
        </>
    )
}
export default App;