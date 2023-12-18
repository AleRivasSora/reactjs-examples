import { Link } from "react-router-dom";

export const Layout = () => {
    return <div>
        <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/contador'>Contador</Link>
            </li>
            <li>
                <Link to='/calculadora'> Calculadora</Link>
            </li>
            <li>
                <Link to='/tareas'> Tareas</Link>
            </li>
        </ul>
        </nav>

    </div>;
}