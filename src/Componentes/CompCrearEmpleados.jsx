import axios from "axios";
import {useNavigate} from  "react-router-dom";
import { useState } from "react";

//const URL = 'http://localhost:5000/api/empleados/'
const URL = 'https://be-mongo-proyecto-final-2.onrender.com/api/empleados/'

const CompCrearEmpleados = () => {


    const [ nombres,setNombres] = useState('');
    const [ apellidos,setApellidos] = useState('');
    const [ cedula,setCedula] = useState('');
    const [ cargo,setCargo] = useState('');
    const [ sueldo,setSueldo] = useState('');
    const [ sede,setSede] = useState('');
    const navigate = useNavigate();

    //se crea la funcion guardar

    const guardarEmpleados= async(e) => {
        e.preventDefault();
        await axios.post( URL,  {

            nombres: nombres, apellidos: apellidos, cedula: cedula,
            cargo: cargo, sueldo: sueldo, sede: sede,

        } )
        navigate('/empleados')
    }


    return(



<div>
    <h3> Creación Empleados</h3>
    <form onSubmit={guardarEmpleados}>

        <div className="mb -3">
        <label className="form-label">Nombre Empleado</label>
        <input value = {nombres} onChange={(e) => setNombres(e.target.value)}
        type="text" className="form-control" />
        </div>




        <div className="mb -3">
        <label className="form-label">Apellido  Empleado</label>
        <input value = {apellidos} onChange={(e) => setApellidos(e.target.value)}
        type="text" className="form-control" />
        </div>




        <div className="mb -3">
        <label className="form-label">Cedula</label>
        <input value = {cedula} onChange={(e) => setCedula(e.target.value)}
        type="number" className="form-control" />
        </div>


        <div className="mb -3">
        <label className="form-label">Cargo</label>
        <input value = {cargo} onChange={(e) => setCargo(e.target.value)}
        type="text" className="form-control" />
        </div>

        <div className="mb -3">
        <label className="form-label">Sueldo</label>
        <input value = {sueldo} onChange={(e) => setSueldo(e.target.value)}
        type="number" className="form-control" />
        </div>

        <div className="mb -3">
        <label className="form-label">Sede</label>
        <input value = {sede} onChange={(e) => setSede(e.target.value)}
        type="text" className="form-control" />
        </div>

        <br />
        <button type="submit" className="btn btn-secondary"> <i className="fa-solid fa-floppy-disk"></i> Agregar</button>

    </form>


</div>


)
}

export default CompCrearEmpleados