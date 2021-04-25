import React, { useState } from 'react'
import AddDatos from './AddDatos'
import uniqid from 'uniqid'


const Formulario = () => {
     
     const [datos, setDatos] = useState([])
     const [listaDatos, setListaDatos] = useState([])

     const [modoEdicion, setModoEdicion] = useState(false)
     const [id, setId] = useState('')

     
     const handleDatos = (e) => {
          setDatos ( e.target.value ) 
     }

     const handleSubmit = (e) => {
          e.preventDefault()

          if(!datos.length){

               alert('Datos no ingresados') 
               return
          }
          const nuevoNombre = {
               id: uniqid(),
               nombre: datos,
          }

          setListaDatos([...listaDatos, nuevoNombre])

          //Limpiar Campo
          setDatos('')
     }
          
     const handleBorarDatos = (id) => {
          const nuevoArray = listaDatos.filter( item => item.id !== id)
          setListaDatos(nuevoArray)
     }

     const editar = (elemento) => {
          setModoEdicion(true)
          setDatos(elemento.nombre)
          setId(elemento.id)
     }

     const editarDatos = (e) => {
          e.preventDefault()
          const nuevoArray = listaDatos
          .map(item => item.id === id ? {id:item.id, nombre: datos} : item)
          setListaDatos(nuevoArray)
          setModoEdicion(false)
          setDatos('')
     }

     return (
          <div className="caja-formulario">

               <form onSubmit={ modoEdicion ? editarDatos : handleSubmit}>
                    
                    <input 
                         className="input-datos"
                         type="text"
                         name="nombre" 
                         onChange={ handleDatos }
                         value={ datos }
                         placeholder="Datos"
                    />

                    <input 
                         className="btn-enviar"
                         type="submit" 
                         value={ modoEdicion ? 'Editar' : 'Agregar' }
                    />

               </form>

               <AddDatos 
                    listaDatos={ listaDatos } 
                    handleBorarDatos={ handleBorarDatos }
                    editar={ editar }
               />
          </div>
     )
}

export default Formulario
