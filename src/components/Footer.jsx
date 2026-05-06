export default function Footer() {
  return (
    <div className="seccion3">
      <span>
        © {new Date().getFullYear()} SecureNet |{' '}
        <a href="mailto:contacto@securenet.com">contacto@securenet.com</a>
      </span>
      <span>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {' | '}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        {' | '}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </span>
    </div>
  );
}
