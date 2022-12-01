import axios from "axios";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/usuarios/muser'
const URI2 = 'http://localhost:8000/usuarios/updateuser/'

export const CompEditUser = () => {    
    const [nomuser, setTitle] = useState('')
    const [correo, setContent] = useState('')
    const [password, passContent] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    console.log('el valor del id es : ', id)
    //procedimiento para actualizar
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(URI2+id, {
            nomuser: nomuser,
            correo: correo,
            password: password
        })
        navigate('/users')
    }



    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.nomuser)
        setContent(res.data.correo)
        passContent(res.data.password)
    }

    useEffect( ()=> {
        getBlogById()
    },[ ] )
    return (
        <div className="login-form">
            <h3>Editar Usuario</h3>
            <Card>
                  <Card.Body>
            <Form onSubmit={store}>                
                <div className="login-form">
                    <label>Nombre</label>
                    <Form.Control
                        value={nomuser}
                        onChange={ (e)=> setTitle(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="login-form">
                    <label>Correo</label>
                    <Form.Control
                        value={correo}
                        onChange={ (e)=> setContent(e.target.value)}
                        type="email"                    
                    />
                </div>
                <div className="login-form">
                    <label>Password</label>
                    <Form.Control
                        value={password}
                        onChange={ (e)=> passContent(e.target.value)}
                        type="text"                    
                    />
                </div>
                <Button variant="success" type="submit" className="btn-register">Actualizar</Button>
                </Form>
             </Card.Body>
            </Card>
        </div>
    )
} 


export default CompEditUser