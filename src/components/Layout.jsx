import { useNavigate, NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { TEMAS } from '../data/datos';

export default function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="main-wrapper">
        <div className="columna-izquierda">
          <h3>Páginas</h3>
          <NavLink to="/" end className="sidebar-link">Inicio</NavLink>
          <NavLink to="/servicios" className="sidebar-link">Servicios</NavLink>
          <NavLink to="/detalle/1" className="sidebar-link">Detalle</NavLink>
          <NavLink to="/contacto" className="sidebar-link">Contacto</NavLink>

          <h3 style={{ marginTop: '16px' }}>Temas</h3>
          {TEMAS.map(t => (
            <p key={t} onClick={() => navigate(`/servicios?tema=${encodeURIComponent(t)}`)}>
              {t}
            </p>
          ))}
        </div>
        <div className="columna-derecha">{children}</div>
      </div>
      <Footer />
    </>
  );
}
