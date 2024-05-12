import  React from "react"
import redes from "../imagenes/redes.png"


const CompFooter = () => {

return (
<div>
    <div className="card-body">
    <h4 className="card-title1" >Direccion  calle siempre viva</h4>
    <p className="card-text">correo y telefonos</p>
    <img src= {redes} className="App-logo1" alt="logo"/>
    </div>
    <div className="car-footer text-muted"> horario lunes a viernes</div>
</div>

)
}

export default CompFooter