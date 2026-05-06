import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
import './styles/global.css';

/* ══════════════════════════════════════════════
   DATOS
══════════════════════════════════════════════ */
const servicios = [
  { id: 1, nombre: 'Auditoría de Seguridad',  precio: '$500/mes', img: 'https://picsum.photos/seed/s1/80/60', desc: 'Análisis completo de vulnerabilidades en tu infraestructura.' },
  { id: 2, nombre: 'Firewall Empresarial',    precio: '$300/mes', img: 'https://picsum.photos/seed/s2/80/60', desc: 'Protección perimetral avanzada contra amenazas externas.' },
  { id: 3, nombre: 'Antivirus Corporativo',   precio: '$150/mes', img: 'https://picsum.photos/seed/s3/80/60', desc: 'Protección en tiempo real contra malware y ransomware.' },
  { id: 4, nombre: 'VPN Segura',              precio: '$200/mes', img: 'https://picsum.photos/seed/s4/80/60', desc: 'Conexión cifrada para trabajo remoto seguro.' },
  { id: 5, nombre: 'Backup en la Nube',       precio: '$100/mes', img: 'https://picsum.photos/seed/s5/80/60', desc: 'Respaldo automático de datos críticos en la nube.' },
];

const SLIDES = [
  { titulo: 'Protección de Datos',        img: 'https://picsum.photos/seed/cyber1/700/300', desc: 'Protegemos tu información más valiosa' },
  { titulo: 'Ciberseguridad Empresarial', img: 'https://picsum.photos/seed/cyber2/700/300', desc: 'Soluciones integrales para empresas' },
  { titulo: 'Ethical Hacking',            img: 'https://picsum.photos/seed/cyber3/700/300', desc: 'Encontramos vulnerabilidades antes que los atacantes' },
];

const TEMAS = [
  '🔒 Firewall', '🛡️ Antivirus', '🔑 VPN', '🌐 Redes',
  '💻 Hacking Ético', '📱 Mobile', '☁️ Cloud', '🔐 Criptografía',
  '🕵️ Forense', '⚠️ Amenazas', '🔍 Auditoría', '📊 SIEM',
];

/* ══════════════════════════════════════════════
   HEADER
══════════════════════════════════════════════ */
const Header = () => (
  <div className="seccion1">
    <h1>SecureNet - Seguridad Informática</h1>
    <nav>
      <NavLink to="/"          end>Inicio</NavLink>
      <NavLink to="/servicios"    >Servicios</NavLink>
      <NavLink to="/detalle/1"    >Detalle</NavLink>
      <NavLink to="/contacto"     >Contacto</NavLink>
    </nav>
  </div>
);

/* ══════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════ */
const Footer = () => (
  <div className="seccion3">
    <span>© {new Date().getFullYear()} SecureNet | <a href="mailto:contacto@securenet.com">contacto@securenet.com</a></span>
    <span>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      {' | '}
      <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer">Twitter</a>
      {' | '}
      <a href="https://github.com"   target="_blank" rel="noopener noreferrer">GitHub</a>
    </span>
  </div>
);

/* ══════════════════════════════════════════════
   LAYOUT
══════════════════════════════════════════════ */
const Layout = ({ children }) => (
  <>
    <Header />
    <div className="main-wrapper">
      <div className="columna-izquierda">
        <h3>Temas</h3>
        {TEMAS.map(t => <p key={t}>{t}</p>)}
      </div>
      <div className="columna-derecha">{children}</div>
    </div>
    <Footer />
  </>
);

/* ══════════════════════════════════════════════
   PÁGINA: INICIO
══════════════════════════════════════════════ */
const Inicio = () => {
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <h2>Bienvenido a SecureNet</h2>

      <div className="carrusel">
        <img src={SLIDES[slide].img} alt={SLIDES[slide].titulo} style={{ width: '100%', borderRadius: '8px' }} />
        <h3>{SLIDES[slide].titulo}</h3>
        <p>{SLIDES[slide].desc}</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{ background: slide === i ? '#0a192f' : '#ccc', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>¿Por qué elegirnos?</h2>
        <p>En SecureNet somos especialistas en seguridad informática con más de 10 años de experiencia protegiendo empresas.</p>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <div>
            <img src="https://picsum.photos/seed/sec10/200/150" alt="Seguridad" style={{ borderRadius: '8px', width: '200px' }} />
            <p>Monitoreo 24/7</p>
          </div>
          <div>
            <img src="https://picsum.photos/seed/sec11/200/150" alt="Equipo" style={{ borderRadius: '8px', width: '200px' }} />
            <p>Equipo certificado</p>
          </div>
        </div>
        <Link to="/servicios" style={{ display: 'inline-block', marginTop: '20px', background: '#0a192f', color: '#64ffda', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none' }}>
          Ver nuestros servicios →
        </Link>
      </div>
    </Layout>
  );
};

/* ══════════════════════════════════════════════
   PÁGINA: SERVICIOS
══════════════════════════════════════════════ */
const Servicios = () => (
  <Layout>
    <h2>Nuestros Servicios</h2>
    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
      <img src="https://picsum.photos/seed/srv1/200/130" alt="Servicios" style={{ borderRadius: '8px' }} />
      <img src="https://picsum.photos/seed/srv2/200/130" alt="Seguridad" style={{ borderRadius: '8px' }} />
    </div>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#0a192f', color: 'white' }}>
          <th style={{ padding: '10px' }}>Imagen</th>
          <th style={{ padding: '10px' }}>Servicio</th>
          <th style={{ padding: '10px' }}>Precio</th>
          <th style={{ padding: '10px' }}>Acción</th>
        </tr>
      </thead>
      <tbody>
        {servicios.map(s => (
          <tr key={s.id} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}><img src={s.img} alt={s.nombre} style={{ borderRadius: '4px' }} /></td>
            <td style={{ padding: '10px' }}>{s.nombre}</td>
            <td style={{ padding: '10px', color: '#0a192f', fontWeight: 'bold' }}>{s.precio}</td>
            <td style={{ padding: '10px' }}>
              <Link to={`/detalle/${s.id}`} style={{ background: '#64ffda', color: '#0a192f', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
                Ver Detalle
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
);

/* ══════════════════════════════════════════════
   PÁGINA: DETALLE SERVICIO
══════════════════════════════════════════════ */
const DetalleServicio = () => {
  const { id } = useParams();
  const s = servicios.find(x => x.id === parseInt(id)) || servicios[0];
  const alternativos = servicios.filter(x => x.id !== s.id).slice(0, 3);

  return (
    <Layout>
      <h2>{s.nombre}</h2>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <img src={s.img.replace('80/60', '400/300')} alt={s.nombre} style={{ borderRadius: '8px', width: '350px' }} />
        <div>
          <h3 style={{ color: '#0a192f' }}>{s.precio}</h3>
          <p>{s.desc}</p>
          <img src="https://picsum.photos/seed/det1/200/130" alt="detalle" style={{ borderRadius: '8px', marginTop: '10px' }} />
        </div>
      </div>
      <img src="https://picsum.photos/seed/det2/400/150" alt="banner" style={{ width: '100%', borderRadius: '8px', marginTop: '20px' }} />

      <h3 style={{ marginTop: '20px' }}>Servicios Alternativos</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#0a192f', color: 'white' }}>
            <th style={{ padding: '8px' }}>Imagen</th>
            <th style={{ padding: '8px' }}>Nombre</th>
            <th style={{ padding: '8px' }}>Precio</th>
          </tr>
        </thead>
        <tbody>
          {alternativos.map(a => (
            <tr key={a.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px' }}><img src={a.img} alt={a.nombre} style={{ borderRadius: '4px' }} /></td>
              <td style={{ padding: '8px' }}>{a.nombre}</td>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>{a.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

/* ══════════════════════════════════════════════
   PÁGINA: CONTACTO
══════════════════════════════════════════════ */
const Contacto = () => {
  const [form,    setForm]    = React.useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [errores, setErrores] = React.useState({});
  const [enviado, setEnviado] = React.useState(false);

  const validar = (f) => {
    const e = {};
    if (!f.nombre.trim())  e.nombre  = 'El nombre es obligatorio';
    if (!f.email.trim())   e.email   = 'El email es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Email inválido';
    if (!f.asunto.trim())  e.asunto  = 'El asunto es obligatorio';
    if (!f.mensaje.trim()) e.mensaje = 'El mensaje es obligatorio';
    else if (f.mensaje.length < 20) e.mensaje = 'Mínimo 20 caracteres';
    return e;
  };

  const handleChange = (e) => {
    const nuevo = { ...form, [e.target.name]: e.target.value };
    setForm(nuevo);
    setErrores(validar(nuevo));
  };

  const handleSubmit = () => {
    const e = validar(form);
    if (Object.keys(e).length === 0) setEnviado(true);
    else setErrores(e);
  };

  const hayErrores = Object.keys(validar(form)).length > 0;
  const inp = { width: '100%', padding: '10px', margin: '5px 0 0 0', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box', fontSize: '15px' };
  const err = { color: 'red', fontSize: '13px', margin: '2px 0 8px 0' };

  return (
    <Layout>
      <h2>Contacto</h2>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>

        <div style={{ flex: 1, minWidth: '280px' }}>
          {enviado ? (
            <div style={{ background: '#d4edda', color: '#155724', padding: '20px', borderRadius: '8px', fontSize: '18px' }}>
              ✅ ¡Mensaje enviado con éxito! Nos contactaremos pronto.
            </div>
          ) : (
            <div>
              <label>Nombre</label>
              <input style={inp} name="nombre"  value={form.nombre}  onChange={handleChange} placeholder="Tu nombre completo" />
              {errores.nombre  && <p style={err}>{errores.nombre}</p>}

              <label>Email</label>
              <input style={inp} name="email"   value={form.email}   onChange={handleChange} placeholder="tucorreo@ejemplo.com" />
              {errores.email   && <p style={err}>{errores.email}</p>}

              <label>Asunto</label>
              <input style={inp} name="asunto"  value={form.asunto}  onChange={handleChange} placeholder="¿En qué te podemos ayudar?" />
              {errores.asunto  && <p style={err}>{errores.asunto}</p>}

              <label>Mensaje</label>
              <textarea style={{ ...inp, height: '120px', resize: 'vertical' }} name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Escribí tu mensaje (mínimo 20 caracteres)" />
              {errores.mensaje && <p style={err}>{errores.mensaje}</p>}

              <button
                onClick={handleSubmit}
                disabled={hayErrores}
                style={{ marginTop: '10px', background: hayErrores ? '#ccc' : '#0a192f', color: hayErrores ? '#666' : '#64ffda', border: 'none', padding: '12px 24px', borderRadius: '6px', cursor: hayErrores ? 'not-allowed' : 'pointer', fontSize: '16px', fontWeight: 'bold', width: '100%' }}
              >
                {hayErrores ? '⚠️ Completá el formulario' : '✉️ Enviar Mensaje'}
              </button>
            </div>
          )}

          <div style={{ marginTop: '25px', background: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
            <h3>Información de Contacto</h3>
            <p>📍 Av. Colón 1234, Córdoba, Argentina</p>
            <p>📞 +54 351 123-4567</p>
            <p>✉️ <a href="mailto:contacto@securenet.com" style={{ color: '#0a192f', fontWeight: 'bold' }}>contacto@securenet.com</a></p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <img src="https://picsum.photos/seed/cont1/120/90" alt="Oficina" style={{ borderRadius: '6px' }} />
              <img src="https://picsum.photos/seed/cont2/120/90" alt="Equipo"  style={{ borderRadius: '6px' }} />
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '280px' }}>
          <h3>Nuestra Ubicación</h3>
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108940.7!2d-64.19356!3d-31.41671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f3f2f1c3b1a!2sC%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
          />
        </div>

      </div>
    </Layout>
  );
};

/* ══════════════════════════════════════════════
   PÁGINA: 404
══════════════════════════════════════════════ */
const NotFound = () => (
  <Layout>
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <h2 style={{ fontSize: '4rem', color: '#0a192f' }}>404</h2>
      <p style={{ marginTop: '10px', fontSize: '1.1rem' }}>Página no encontrada.</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px', background: '#0a192f', color: '#64ffda', padding: '10px 24px', borderRadius: '6px', textDecoration: 'none' }}>
        ← Volver al inicio
      </Link>
    </div>
  </Layout>
);

/* ══════════════════════════════════════════════
   APP
══════════════════════════════════════════════ */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<Inicio />}          />
        <Route path="/inicio"      element={<Inicio />}          />
        <Route path="/servicios"   element={<Servicios />}       />
        <Route path="/detalle/:id" element={<DetalleServicio />} />
        <Route path="/contacto"    element={<Contacto />}        />
        <Route path="*"            element={<NotFound />}        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
