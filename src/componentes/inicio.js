import React from 'react';
import '../styles/inicio.css';

export function Inicio(props) {
  return (
    <div className='container-inicio'>
      <img className='image-container'
      src={require(`../imagenes/imagen-${props.image}.jpg`)}
      alt='Foto de mario'
      />
      <div className='container-text-inicio'>
        <strong><p className='name-example'>{props.name}</p></strong>
        <p className='subtitle-example'>{props.lvl}</p>
        <p className='text-example'>{props.text}</p>

      </div>
    </div>
  );
}

