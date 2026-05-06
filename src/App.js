import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/global.css';

import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import DetalleServicio from './pages/DetalleServicio';
import Contacto from './pages/Contacto';
import Layout from './components/Layout';

function NotFound() {
  return (
    <Layout>
      <div className="not-found">
        <h2 className="not-found-code">404</h2>
        <p className="not-found-text">Página no encontrada.</p>
        <Link to="/" className="btn-volver">← Volver al inicio</Link>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/detalle/:id" element={<DetalleServicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
