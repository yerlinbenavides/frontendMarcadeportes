import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import '../../src/style.css';
//import '../style.css';
import Swal from 'sweetalert2'

const URI = 'http://localhost:8000/usuarios/reguser'

export const CompCreateUser = () => {
    // const [nombre, setTitle] = useState('')
    const [correo, setContent] = useState('')
    const [nomuser, setUsuario] = useState('')
    const [password, setPass] = useState('')
    const navigate = useNavigate() 

    //procedimiento para guardar
    const store = async (e) => {
      e.preventDefault()
      Swal.fire({
          title: 'Guardar Usuario',
          text: 'Esta ud seguro de querer guardar los datos del usuario',
          icon: 'success',
          showDenyButton: true,
          denyButtonText: "NO",
          confirmButtonText: "SI"
        
        }).then ( response => {
          if (response.isConfirmed){
              axios.post(URI, {correo:correo, nomuser: nomuser, password: password})
             Swal.fire("Los datos fueron almacenados con exito")
              navigate('/users')
          } else {
             Swal.fire("la información no fue almacenada")
          }
 })

}

    return(
        <div className="login-form">
            <h3>Creacion de Usuarios</h3>
            <Card>
                  <Card.Body>
            
            <Form onSubmit={store}>

              <div className="login-form">
                
              <Form.Control
                     value={nomuser}
                     onChange={ (e)=> setUsuario(e.target.value)}
                     type="text"
                     placeholder='Ingrese su Nombre'
                />

                    
              </div> 

              <div className="login-form">
              <Form.Control
                    value={correo}
                    onChange={ (e)=> setContent(e.target.value)}
                    type="email"
                    placeholder='correo' 
                />

              </div>
              <div className="login-form">
              <Form.Control
                    value={password}
                    onChange={ (e)=> setPass(e.target.value)}
                    type="password"
                    placeholder='password'
                />

              </div>
              <Button variant="success" type="submit" className="btn-register">Guardar</Button>

              </Form>
             </Card.Body>
            </Card>
        </div>
    )
} 

export default CompCreateUser