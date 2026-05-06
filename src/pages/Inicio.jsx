import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { SLIDES } from '../data/datos';

export default function Inicio() {
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <h2>Bienvenido a SecureNet</h2>

      <div className="carrusel">
        <img src={SLIDES[slide].img} alt={SLIDES[slide].titulo} className="carrusel-img" />
        <h3>{SLIDES[slide].titulo}</h3>
        <p>{SLIDES[slide].desc}</p>
        <div className="carrusel-botones">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`carrusel-btn${slide === i ? ' carrusel-btn--activo' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="seccion-porque">
        <h2>¿Por qué elegirnos?</h2>
        <p>En SecureNet somos especialistas en seguridad informática con más de 10 años de experiencia protegiendo empresas.</p>
        <div className="porque-imagenes">
          <div>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=150&fit=crop&q=80"
              alt="Seguridad"
              className="porque-img"
            />
            <p>Monitoreo 24/7</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=150&fit=crop&q=80"
              alt="Equipo"
              className="porque-img"
            />
            <p>Equipo certificado</p>
          </div>
        </div>
        <Link to="/servicios" className="btn-primario">Ver nuestros servicios →</Link>
      </div>
    </Layout>
  );
}
