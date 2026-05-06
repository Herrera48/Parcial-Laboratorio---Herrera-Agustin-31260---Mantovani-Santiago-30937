export const servicios = [
  {
    id: 1, nombre: 'Auditoría de Seguridad', precio: '$850.000/mes',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=80&h=60&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=150&fit=crop&q=80',
    desc: 'Análisis completo de vulnerabilidades en tu infraestructura.',
  },
  {
    id: 2, nombre: 'Firewall Empresarial', precio: '$450.000/mes',
    img: 'https://latam.kaspersky.com/content/es-mx/images/repository/isc/2017-images/KSY-53-What_is_a_firewall__.jpg',
    banner: 'https://cdn.prod.website-files.com/62e153e41d6ee298cc9a98f7/6318844c898ecf0f675dd89d_Firewall%20(1).webp',
    desc: 'Protección perimetral avanzada contra amenazas externas.',
  },
  {
    id: 3, nombre: 'Antivirus Corporativo', precio: '$180.000/mes',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=80&h=60&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=150&fit=crop&q=80',
    desc: 'Protección en tiempo real contra malware y ransomware.',
  },
  {
    id: 4, nombre: 'VPN Segura', precio: '$320.000/mes',
    img: 'https://www.stackscale.com/wp-content/uploads/2016/05/vpn-secure-connection-stackscale.jpg',
    banner: 'https://vpncdn.protonweb.com/image-transformation/?s=a&image=how_does_a_vpn_work_conceal_f3533056da.png&width=716&height=449',
    desc: 'Conexión cifrada para trabajo remoto seguro.',
  },
  {
    id: 5, nombre: 'Backup en la Nube', precio: '$120.000/mes',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7kI88ycxF-gJ7V55ZtJFwQeIcpi2TITp3A&s',
    banner: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=150&fit=crop&q=80',
    desc: 'Respaldo automático de datos críticos en la nube.',
  },
];

export const SLIDES = [
  { titulo: 'Protección de Datos', img: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=700&h=300&fit=crop&q=80', desc: 'Protegemos tu información más valiosa' },
  { titulo: 'Ciberseguridad Empresarial', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=300&fit=crop&q=80', desc: 'Soluciones integrales para empresas' },
  { titulo: 'Ethical Hacking', img: '/hacker.png', desc: 'Encontramos vulnerabilidades antes que los atacantes' },
];

export const TEMAS = [
  'Auditoría',
  'Firewall',
  'Antivirus',
  'VPN',
  'Cloud',
];

export const TEMA_SERVICIOS = {
  'Auditoría': [1],
  'Firewall': [2],
  'Antivirus': [3],
  'VPN': [4],
  'Cloud': [5],
};
