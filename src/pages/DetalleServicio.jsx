import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { servicios } from '../data/datos';

export default function DetalleServicio() {
  const { id } = useParams();
  const s = servicios.find(x => x.id === parseInt(id)) || servicios[0];
  const alternativos = servicios.filter(x => x.id !== s.id).slice(0, 3);

  const imgGrande = s.img.replace('w=80&h=60', 'w=400&h=300');

  return (
    <Layout>
      <h2>{s.nombre}</h2>

      <div className="detalle-flex">
        <img src={imgGrande} alt={s.nombre} className="detalle-img-principal" />
        <div>
          <h3 className="detalle-precio">{s.precio}</h3>
          <p>{s.desc}</p>
        </div>
      </div>

      <img src={s.banner} alt={s.nombre} className="detalle-banner" />

      <h3 className="alternativos-titulo">Servicios Alternativos</h3>
      <table>
        <thead>
          <tr className="tabla-header">
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {alternativos.map(a => (
            <tr key={a.id} className="tabla-fila">
              <td><img src={a.img} alt={a.nombre} className="tabla-img" /></td>
              <td>{a.nombre}</td>
              <td className="tabla-precio">{a.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
