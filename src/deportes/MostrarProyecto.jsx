import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import { BsPlusCircleFill } from "react-icons/bs";

//import styles from "./styles.modules.css"
// importamos la ruta para mostrar los eventos deportivos
const URI = 'http://localhost:8000/usuarios/shproyecto'

const URI2 = 'http://localhost:8000/usuarios/delproyecto/'

export const CompMostrarProyec = () => {

    //Aca inicia el codigo que envia el encabezado del tocken
    const token1 = localStorage.getItem("auth")
      const token = `${token1}`;
      const beer = "Bearer"
      let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              'accept': 'application/json',
            //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njk0NjcxMzgsImV4cCI6MTY2OTQ2ODkzOH0.Dp0FfAN_taNOtPRhOGeAB7nQZvMvzVddPhN4TKb3JJo',
           'Authorization': `${beer} ${token}`,
          }
      };
      
      
      //Aca finaliza

      const [cproyectos, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[ ])

    //procedimiento para mostrar todos los registro
    const getBlogs = async () => {
        const res = await axios.get(URI,axiosConfig)
        setBlog(res.data)
    }

    //procedimiento para eliminar un registro
    const deleteBlog = async (_id) => {
        await axios.delete(`${URI2}${_id}`)
        getBlogs()
    }

    return(
        <div className="">
            <div className='row'>
                <div className='col'>
                    <Link to="/regproyecto" className='btn btn-primary mt-2'><i className="fas fa-plus"></i>Crear Evento</Link>
                    <table className='table'>
                        <thead className='thead tr:first-child'>
                            <tr>
                                <th>fecha</th>                                
                                <th>equipo 1</th>
                                <th>equipo 2</th>
                                <th>marcador E1</th>
                                <th>marcador E2</th>
                                <th>tipoevento</th>
                            </tr>
                        </thead>
                        <tbody>
                            { cproyectos.map ( (blog)=> (
                                <tr key= {blog._id}>
                                    <td>{blog.fecha}</td>                                
                                    <td>{blog.equipo1}</td>
                                    <td>{blog.equipo2}</td>
                                    <td>{blog.marcador1}</td>
                                    <td>{blog.marcador2}</td>
                                    <td>{blog.tipoevento}</td>
                                    <td>
                                        <Link to={`/upproyecto/${blog._id}`} className=''><FaRegEdit size = "30" color = "blue" /></Link>
                                    </td>
                                    <td>
                                        <button onClick={ () => deleteBlog(blog._id) } className='btn btn-danger'><FaTrashAlt /> </button>
                                    </td>
                                </tr>
                              )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )
   
}
   

export default CompMostrarProyec