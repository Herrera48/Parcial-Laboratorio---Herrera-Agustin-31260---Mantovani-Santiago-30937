import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { servicios, TEMA_SERVICIOS } from '../data/datos';

export default function Servicios() {
  const [searchParams] = useSearchParams();
  const tema = searchParams.get('tema');
  const ids = tema ? TEMA_SERVICIOS[tema] : null;
  const lista = ids ? servicios.filter(s => ids.includes(s.id)) : servicios;

  return (
    <Layout>
      <h2>Nuestros Servicios</h2>

      {tema && (
        <div className="filtro-tema">
          <span className="badge-tema">Tema: {tema}</span>
          <Link to="/servicios" className="link-ver-todos">Ver todos</Link>
        </div>
      )}

      <div className="servicios-header-imgs">
        <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=200&h=130&fit=crop&q=80" alt="Servicios" className="servicios-header-img" />
        <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=200&h=130&fit=crop&q=80" alt="Seguridad" className="servicios-header-img" />
      </div>

      <table>
        <thead>
          <tr className="tabla-header">
            <th>Imagen</th>
            <th>Servicio</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(s => (
            <tr key={s.id} className="tabla-fila">
              <td><img src={s.img} alt={s.nombre} className="tabla-img" /></td>
              <td>{s.nombre}</td>
              <td className="tabla-precio">{s.precio}</td>
              <td className="td-accion">
                <Link to={`/detalle/${s.id}`} className="btn-detalle">Ver Detalle</Link>
              </td>
            </tr>
          ))}
          {lista.length === 0 && (
            <tr>
              <td colSpan={4} className="td-vacio">No hay servicios para este tema.</td>
            </tr>
          )}
        </tbody>
      </table>
    </Layout>
  );
}
