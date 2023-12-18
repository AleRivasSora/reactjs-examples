import {Layout} from './layout' 
import '../styles/calculadora.css';
import { useState } from 'react';
import {evaluate} from 'mathjs';

export function Calculadora(){
    const [ShowNum,setShowNum] = useState('');
    const addNum = val => {
        setShowNum(ShowNum + val);
    };
    const ShowResult = () => {
        if (ShowNum){
            setShowNum(evaluate(ShowNum));
        }
        else {
            alert('Ingresar un valor primero')
        };

    };

    return (
        <div className='Calculadora'>
            <Layout />
            <div className='calculadora-contenedor'>
                <Pantalla ShowNum={ShowNum} />
                <div className='row'>
                    <CalculadoraBoton userClick={addNum} >1</CalculadoraBoton>
                    <CalculadoraBoton userClick={addNum} >4</CalculadoraBoton>
                    <CalculadoraBoton userClick={addNum}>7</CalculadoraBoton>
                    <CalculadoraBoton userClick={ShowResult} >=</CalculadoraBoton>

                </div>
                <div className='row'>
                <CalculadoraBoton userClick={addNum}>2</CalculadoraBoton>
                <CalculadoraBoton userClick={addNum}>5</CalculadoraBoton>
                <CalculadoraBoton userClick={addNum}>8</CalculadoraBoton>
                <CalculadoraBoton userClick={addNum}>0</CalculadoraBoton>

                </div>
                <div className='row'>
                <CalculadoraBoton userClick={addNum}>3</CalculadoraBoton>
                <CalculadoraBoton userClick={addNum}>6</CalculadoraBoton>
                <CalculadoraBoton userClick={addNum}>9</CalculadoraBoton>
                <CalculadoraBoton userClick={addNum}>.</CalculadoraBoton>

                </div>
                <div className='row'>
                <CalculadoraBoton userClick={addNum}>+</CalculadoraBoton>
                <CalculadoraBoton userClick={addNum}>-</CalculadoraBoton>
                <CalculadoraBoton userClick={addNum}>*</CalculadoraBoton>
                <CalculadoraBoton userClick={addNum}>/</CalculadoraBoton>

                </div>
                <ClearBoton userClick={() => setShowNum('')}>
                    Clear
                </ClearBoton>

            </div>
        </div>
    );
}

export function CalculadoraBoton(props){
    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=')
    };

    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador': null}`.trim()}
        onClick={() => props.userClick(props.children)}>
            {props.children}
        </div>
    );
}

export function Pantalla({ShowNum}){
    return (
        <div className='ShowNum'>
            {ShowNum}
        </div>
    );
}

export function ClearBoton(props){
    return (
        <div className='clear-boton' onClick={props.userClick}>
            {props.children}
        </div>
    );
}