//Se importan los componentes
import  './App.css'
import CompMostrarClientes from './Componentes/CompMostrarClientes'
import CompCrearClientes from './Componentes/CompCrearClientes'
import CompEditarClientes from './Componentes/CompEditarClientes'



import CompMostrarEmpleados from './Componentes/CompMostrarEmpleados'
import CompCrearEmpleados from './Componentes/CompCrearEmpleados'
import CompEditarEmpleados from './Componentes/CompEditarEmpleados'


// Se importan las rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {


  return (
  

  <div className='App'>

 <header className='container'>

 <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a href="/" className="navbar-brand">Inicio</a>
   
    <button
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="#navbarNav"
      data-bs-toggle="collapse"
      type="button"
    >
      <span className="navbar-toggler-icon" />
    </button>
   
    <div
      className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/login" className="nav-link">login</a></li>
        <li className="nav-item"><a href="/clientes" className="nav-link">Clientes</a></li>
        <li className="nav-item"><a href="/empleados" className="nav-link"> Empleados</a></li>
        <li className="nav-item"><a aria-disabled="true" className="nav-link disabled"  href="#" tabIndex="-1">Disabled</a></li>
      </ul>
    </div>
  </div>
</nav>

 </header>


          <BrowserRouter>
          <Routes>
          <Route path ='/clientes/' element={<CompMostrarClientes />}/>
          <Route path ='/clientes/agregar' element={<CompCrearClientes />}/>
          <Route path ='/clientes/editar/:id' element={<CompEditarClientes />}/>

          <Route path ='/empleados/' element={<CompMostrarEmpleados />}/>
          <Route path ='/empleados/agregar' element={<CompCrearEmpleados />}/>
          <Route path ='/empleados/editar/:id' element={<CompEditarEmpleados />}/>
          </Routes>
          </BrowserRouter>
        </div>



  )
}

export default App
