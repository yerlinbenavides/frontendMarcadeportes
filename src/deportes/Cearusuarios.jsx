import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const URI = 'http://localhost:8000/usuarios/reguser'

export const CompCreateUser = () => {

    const [correo, setContent] = useState('')
    const [nomuser, setUsuario] = useState('')
    const [password, setPass] = useState('')
    const navigate = useNavigate()

    //procedimiento para guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {correo:correo, nomuser:nomuser, password:password})
        navigate('/login')
    }

    return(
        <div className="login-form">
            <h3>Creacion de Usuarios</h3>
            <form onSubmit={store}>

              <div>
                
              <input
                     value={nomuser}
                     onChange={ (e)=> setUsuario(e.target.value)}
                     type="text"
                     placeholder='Ingrese su Nombre'
                />

                    
              </div> 

              <div>
              <input 
                    value={correo}
                    onChange={ (e)=> setContent(e.target.value)}
                    type="email"
                    placeholder='correo' 
                />

              </div>
              <div>
              <input 
                    value={password}
                    onChange={ (e)=> setPass(e.target.value)}
                    type="password"
                    className='form-control'
                    placeholder='password'
                />

              </div>
              <button type='submit' className='btn-register'>Guardar</button>
            </form>
        </div>
    )
}

export default CompCreateUser