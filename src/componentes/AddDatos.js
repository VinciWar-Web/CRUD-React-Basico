import React from 'react'

const AddDatos = ({ listaDatos, handleBorarDatos, editar }) => {
     return (
          <div>

                    {
                         listaDatos.map( elemento => (

                              <div className="caja-padre-datos" key={ elemento.id }>

                                   <div className="caja-datos">
                                        <p> { elemento.nombre } </p>
                                   </div>

                                   <div className="caja-botones">
                                        <button 
                                             onClick= {()=>{ handleBorarDatos(elemento.id)} }
                                             className="btn">
                                                  Borrar
                                        </button>

                                        <button 
                                             onClick= {()=>{ editar(elemento) } }
                                             className="btn">
                                                  Editar
                                        </button>
                                   </div>
                              </div>
                         ))
                    }
          </div>
     )
}

export default AddDatos
