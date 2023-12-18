import logo from './logo.svg';
import './App.css';
import {Inicio} from './componentes/inicio';
import { Link} from 'react-router-dom';
import {Layout} from './componentes/layout' 


function App() {
  return (

    <div className="App">
      <Layout />
      <div className='first-container'>
      <h1>Este es el titulo</h1>
      <Inicio
      name='Mario Bros' 
      lvl='Lvl.99'
      text='El hermano de luigi'
      image='1'/>
      <Inicio
      name='Luigi' 
      lvl='Lvl.87'
      text='El hermano de Mario'
      image='2'/>
      <Inicio
      name='Yoshi' 
      lvl='Lvl.57'
      text='Mascota de mario'
      image='3'/>
    </div>
    </div>
  );
}

export default App;
