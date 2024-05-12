import axios from "axios";
import {useNavigate, useParams} from  "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'http://localhost:5000/api/empleados/'

const CompEditarEmpleados = () => {


    const [ nombres,setNombres] = useState('');
    const [ apellidos,setApellidos] = useState('');
    const [ cedula,setCedula] = useState('');
    const [ cargo,setCargo] = useState('');
    const [ sueldo,setSueldo] = useState('');
    const [ sede,setSede] = useState('');
    const navigate = useNavigate();
    const{ id } = useParams();

    // funcion actualizar

    const editarEmpleados= async(e) => {
        e.preventDefault();
        await axios.put(`${URL}${id}`,  {

            nombres: nombres, 
            apellidos: apellidos, 
            cedula: cedula,
            cargo: cargo, 
            sueldo : sueldo, 
            sede: sede,

        } )

        navigate('/empleados');
    }
    
    useEffect(() => {
        getempleadosID();

    },[]);

    const getempleadosID = async () => {
      const resul =  await axios.get(`${URL}${id}`)  
        setNombres(resul.data.nombres)
        setApellidos(resul.data.apellidos)
        setCedula(resul.data.cedula)
        setCargo(resul.data.cargo)
        setSueldo(resul.data.sueldo)
        setSede(resul.data.sede)
        
    }
    return(

   
<div>
    <h3> Formulario Editar Empleados</h3>
    <form onSubmit={editarEmpleados}>

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
        <button type="submit" className="btn btn-secondary"> <i className="fa-solid fa-pen-to-square"></i> Editar</button>

    </form>



</div>

)
}

    export default CompEditarEmpleados