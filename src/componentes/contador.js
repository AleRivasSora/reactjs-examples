import '../styles/contador.css';
import {Layout} from './layout' 
import { useState } from 'react';

export function Contador() {
    const [numClick, setNumClick] = useState(0);

    const useClick = () => {
        setNumClick(numClick + 1)
    };
    const resetClick = () => {
        setNumClick(0)
    };
    return (
    <div className="Contador">
        <Layout />
        <div className="contador-contenedor">
            <CajaContador numClick={numClick} />
            <Boton 
            texto='click'
            IsButtonClick={true}
            useClick={useClick} />
            <Boton 
            texto='reset'
            IsButtonClick={false}
            useClick={resetClick} />
        </div>
    </div>
    );
}

export function Boton({texto,IsButtonClick,useClick}) {
    return (
        <button className={IsButtonClick ? 'button-click' : 'button-reset'} onClick={useClick}>
            {texto}
        </button>
    );
}

export function CajaContador({ numClick }) {
    return (
        <div className='caja-contador'>
            {numClick}
        </div>
    );
}
