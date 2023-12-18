import {Layout} from './layout' 
import '../styles/tareas.css';
import { FaDeleteLeft } from "react-icons/fa6";
import { Form } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';


export function Tareas(){

    return (    
    <div className='App-tareas'>
    <Layout />
    <div className='contenedor-tareas'>
        <h1>Mis tareas</h1>
        <ListaTareas />
    </div>
    </div>
    );

}

export function CrearTareas({id,texto, completada, completarTarea, eliminarTarea}){
    return (
        <div className={completada ? 'tarea completada' : 'tarea'}>
            <div className='tarea-texto'
            onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className='tarea-logo' onClick={() => eliminarTarea(id)}>
                <FaDeleteLeft className='tarea-logo' />
            </div>
        </div>
    );
}

export function Formulario(props){
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value)
    }
    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = { 
            id: uuidv4,
            texto: input ,
            completada : false

        }
    props.onSubmit(tareaNueva);
    }
    return (
        <form className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <div className='ordenar-formulario'>
            <input
            className='tarea-input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={manejarCambio}
            />
            <button className='tarea-boton' >
                Agregar Tarea
            </button>
            </div>

        </form>
    );
}

export function ListaTareas(){
    const [tareas,setTareas] = useState([]);
    
    const addTarea = crearTareas => {
        console.log(crearTareas)
    }
    return (
        <div>
        <Formulario />
        <div className='tarea-lista-contenedor'>
            <h1>Lista de Tareas</h1>
            {
                tareas.map((crearTareas) => 
                    <CrearTareas 
                    texto={crearTareas.texto}
                    completada={crearTareas.completada} /> )
            }
        </div>
        </div>
    );
}