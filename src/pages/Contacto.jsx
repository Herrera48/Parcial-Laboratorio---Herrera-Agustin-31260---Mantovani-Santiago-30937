import React from 'react';
import Layout from '../components/Layout';

export default function Contacto() {
  const [form, setForm] = React.useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [errores, setErrores] = React.useState({});
  const [enviado, setEnviado] = React.useState(false);

  const validar = (f) => {
    const e = {};
    if (!f.nombre.trim())
      e.nombre = 'El nombre es obligatorio';
    if (!f.email.trim()) {
      e.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
      e.email = 'Email inválido';
    }
    if (!f.asunto.trim()) e.asunto = 'El asunto es obligatorio';
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

  return (
    <Layout>
      <h2>Contacto</h2>
      <div className="contacto-grid">

        <div className="contacto-col">
          {enviado ? (
            <div className="alerta-exito">
              ¡Mensaje enviado con éxito! Nos contactaremos pronto.
            </div>
          ) : (
            <div className="contacto-form">
              <label>Nombre</label>
              <input className="form-input" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre completo" />
              {errores.nombre && <p className="form-error">{errores.nombre}</p>}

              <label>Email</label>
              <input className="form-input" name="email" value={form.email} onChange={handleChange} placeholder="tucorreo@ejemplo.com" />
              {errores.email && <p className="form-error">{errores.email}</p>}

              <label>Asunto</label>
              <input className="form-input" name="asunto" value={form.asunto} onChange={handleChange} placeholder="¿En qué te podemos ayudar?" />
              {errores.asunto && <p className="form-error">{errores.asunto}</p>}

              <label>Mensaje</label>
              <textarea
                className="form-input form-textarea"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Escribí tu mensaje (mínimo 20 caracteres)"
              />
              {errores.mensaje && <p className="form-error">{errores.mensaje}</p>}

              <button
                onClick={handleSubmit}
                disabled={hayErrores}
                className={`btn-submit${hayErrores ? ' btn-submit--disabled' : ' btn-submit--activo'}`}
              >
                {hayErrores ? 'Completá el formulario' : 'Enviar Mensaje'}
              </button>
            </div>
          )}

          <div className="info-contacto">
            <h3>Información de Contacto</h3>
            <p>Av. Colón 1234, Córdoba, Argentina</p>
            <p>+54 351 123-4567</p>
            <p>
              <a href="mailto:contacto@securenet.com" className="info-email">
                contacto@securenet.com
              </a>
            </p>
            <div className="info-imagenes">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=90&fit=crop&q=80" alt="Oficina" className="info-img" />
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=120&h=90&fit=crop&q=80" alt="Equipo" className="info-img" />
            </div>
          </div>
        </div>

        <div className="contacto-col">
          <h3>Nuestra Ubicación</h3>
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108940.7!2d-64.19356!3d-31.41671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f3f2f1c3b1a!2sC%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1"
            width="100%"
            height="350"
            className="mapa-iframe"
            allowFullScreen
            loading="lazy"
          />
        </div>

      </div>
    </Layout>
  );
}
