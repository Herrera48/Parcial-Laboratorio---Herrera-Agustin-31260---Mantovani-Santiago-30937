import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="seccion1">
      <h1>SecureNet - Seguridad Informática</h1>
      <nav>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/detalle/1">Detalle</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </div>
  );
}
