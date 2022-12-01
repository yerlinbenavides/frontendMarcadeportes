import axios from "axios";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//mostramos todos los eventos
const URI = 'http://localhost:8000/usuarios/shproyecto'
//Actualizar el evento deportivo
const URI2 = 'http://localhost:8000/usuarios/upproyecto'

export const CompEditProyecto = () => {    
    const [fecha, setFecha] = useState('')
    const [equipo1, setEquipo1] = useState('')
    const [equipo2, setEquipo2] = useState('')
    const [marcador1, setMarcador1] = useState('')
    const [marcador2, setMarcador2] = useState('')
    const [tipoevento, setTipoevento] = useState('')
    const navigate = useNavigate()
    const {_id} = useParams()
    console.log('el valor del id es : ', _id)

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI2+_id, {
            fecha: fecha,
            equipo1: equipo1,
            equipo2: equipo2,
            marcador1: marcador1,
            marcador2: marcador2,
            tipoevento: tipoevento
        })
        navigate('/shproyecto')
    }




    const getBlogById = async () => {
        const res = await axios.get(URI+_id)
        setFecha(res.data.fecha)
        setEquipo1(res.data.equipo1)
        setEquipo2(res.data.equipo2)
        setMarcador1(res.data.marcador1)
        setMarcador2(res.data.marcador2)
        setTipoevento(res.data.tipoevento)
    }

    useEffect( ()=> {
        getBlogById()
    },[ ] )
    return (
        <div className="login-form">
            <h3>Editar Evento</h3>
            <Card>
                  <Card.Body>
            
            <Form onSubmit={store}>

                <div className="login-form">
                    <label>Fecha</label>
                    <Form.Control
                        value={fecha}
                        onChange={ (e)=> setFecha(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="login-form">
                    <label>Equipo 1</label>
                    <Form.Control
                        value={equipo1}
                        onChange={ (e)=> setEquipo1(e.target.value)}
                        type="text"                    
                    />
                </div>
                <div className="login-form">
                    <label>Equipo 2</label>
                    <Form.Control
                        value={equipo2}
                        onChange={ (e)=> setEquipo2(e.target.value)}
                        type="text"                    
                    />
                </div>
                <div className="login-form">
                    <label>Marcador E1</label>
                    <Form.Control
                        value={marcador1}
                        onChange={ (e)=> setMarcador1(e.target.value)}
                        type="text"                    
                    />
                </div>
                <div className="login-form">
                    <label>Marcador E2</label>
                    <Form.Control
                        value={marcador2}
                        onChange={ (e)=> setMarcador2(e.target.value)}
                        type="text"                    
                    />
                </div>
                <div className="login-form">
                    <label>Tipo Evento</label>
                    <Form.Control
                        value={tipoevento}
                        onChange={ (e)=> setTipoevento(e.target.value)}
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

export default CompEditProyecto