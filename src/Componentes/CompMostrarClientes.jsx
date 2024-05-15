import axios from 'axios';
import{ Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//const URL = 'http://localhost:5000/api/clientes/';
const URL = 'https://be-mongo-proyecto-final-2.onrender.com/api/clientes/';

const CompMostrarClientes = () => {

    const [clientes, setClientes] = useState([])

        useEffect(()=> {
            getclientes()
        },[]);
        
    

    // funcion para mostrar los cliente
    
    const getclientes = async () => {
        const result = await axios.get(URL)
        setClientes(result.data);
    }

    // funcion Eliminar clientes

        const eliminarClientes = async (id) => {
            await axios.delete(`${URL}${id}`)
            getclientes();
        }

    return(

        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to= '/clientes/agregar' className='btn btn-success mt-2 mb -2'> <i className="fa-solid fa-user-plus"></i> Guardar</Link>
                    <div className="table-responsive">
                        <table className='table'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>Nombres Cliente</th>
                                    <th>Apellidos Cliente</th>
                                    <th>Cedula</th>
                                    <th>Correo</th>
                                    <th>Telefono</th>
                                    <th>Direccion</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map((cliente , index)=> (
                                    <tr key = {index}>
                                    <td> {cliente.nombres}</td>
                                    <td> {cliente.apellidos}</td>
                                    <td> {cliente.cedula}</td>
                                    <td> {cliente.correo}</td>
                                    <td> {cliente.telefono}</td>
                                    <td> {cliente.direccion}</td>
                                   <td>
                                   <Link to= {`/clientes/editar/${cliente._id}`} className='btn btn-primary mt-2 mb -2'> <i className="fa-regular fa-pen-to-square"></i> Editar</Link>&nbsp; 
                                   <button onClick={() => eliminarClientes(cliente._id)} className="btn btn-danger mt-2 mb -2"><i className="fa-solid fa-trash"></i> Eliminar</button>

                                    
                                    </td> 
                               
                                    </tr>
                                
                                ) ) }





                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )

   


}

export default CompMostrarClientes