
import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
//mis componentes
import { CompShowUsers } from './deportes/Mostrarusuario.jsx'
import { CompCreateUser } from './deportes/Cearusuarios.jsx'
import { CompEditUser } from './deportes/EditUsuario.jsx'
import { CompCrearProyec } from './deportes/CrearProyecto.jsx'
import { CompMostrarProyec } from './deportes/MostrarProyecto.jsx'
import { CompEditProyecto } from './deportes/EditarProyecto.jsx'
import { Admin } from './deportes/Admin.jsx'
import { Logo } from './deportes/Logo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBarComp} from './deportes/NavbarComp.jsx'
import {Login} from './deportes/Login.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
      </header>
      <BrowserRouter>

                    <Routes>
                      <Route path= '/' element= { <NavBarComp/>}>
                            <Route path='/ad' element={ <Admin/>}/>
                            <Route path= '/users' element= { <CompShowUsers/>}/>
                            <Route path= '/login' element= { <Login />} />
                            <Route path= '/create' element= { <CompCreateUser/>}/>
                            <Route path= '/updateuser/:id' element= { <CompEditUser/>}/>
                            <Route path= '/regproyecto' element= { <CompCrearProyec/>}/>
                            <Route path= '/shproyecto' element= { <CompMostrarProyec/>}/>
                            <Route path= '/upproyecto/:_id' element= { <CompEditProyecto/>}/>
                            <Route path='*' element= {<Navigate replace to ="/"/>}/>
                      </Route>                                              
                    </Routes>    

      </BrowserRouter>

    </div>
  );
}

export default App;
