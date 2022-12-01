import { Link } from "react-router-dom";

export const Admin = () => {

    return(
<div className="login-form">
        <h3><Link to ="/regproyecto" className="btn-register">Registrar Eventos Deportivos</Link></h3>
        <h3><Link to ="/shproyecto" className="btn-register">Ver Evento Deportivo</Link></h3>
        // <h3><Link to ="/updateuser/:id" className="btn-register">Cambiar Contraseña Ususrio</Link></h3>
</div>
    )
}
export default Admin;