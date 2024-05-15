import axios from 'axios';
import{ Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/api/empleados/';
const URL = 'https://be-mongo-proyecto-final-2.onrender.com/api/empleados/'

const CompMostrarEmpleados = () => {

    const [empleados, setEmpleados] = useState([])

        useEffect(()=> {
            getempleados()
        },[]);
        
    

    // funcion para mostrar los Empleado
    
    const getempleados = async () => {
        const result = await axios.get(URL)
        setEmpleados(result.data);
    }

    // funcion Eliminar Empleados

        const eliminarEmpleados = async (id) => {
            await axios.delete(`${URL}${id}`)
            getempleados();
        }

    return(

        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to= '/empleados/agregar' className='btn btn-info mt-2 mb -2'> <i className="fa-solid fa-user-plus"></i> Guardar</Link>
                        <table className='table'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>Nombres Empleado</th>
                                    <th>Apellidos Empleado</th>
                                    <th>Cedula</th>
                                    <th>Cargo</th>
                                    <th>Sueldo</th>
                                    <th>Sede</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empleados.map((empleado , index)=> (
                                    <tr key = {index}>
                                    <td> {empleado.nombres}</td>
                                    <td> {empleado.apellidos}</td>
                                    <td> {empleado.cedula}</td>
                                    <td> {empleado.cargo}</td>
                                    <td> {empleado.sueldo}</td>
                                    <td> {empleado.sede}</td>
                                   <td>
                                   <Link to= {`/empleados/editar/${empleado._id}`} className='btn btn-warning mt-2 mb -2'> <i className="fa-regular fa-pen-to-square"></i> Editar</Link>&nbsp; 
                                   <button onClick={() => eliminarEmpleados(empleado._id)} className="btn btn-dark mt-2 mb -2"><i className="fa-solid fa-trash"></i> Eliminar</button>

                                    
                                    </td> 
                               
                                    </tr>
                                
                                ) ) }





                            </tbody>
                        </table>
          
                </div>
            </div>
        </div>

    )

   


}

export default CompMostrarEmpleados