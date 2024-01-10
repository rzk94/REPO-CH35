import {Link} from 'react-router-dom'
const Inicio = () => {
  return (
    <>
      <div>
        <h2>Pagina Inicio</h2>
        <Link to="Contacto">Contacto</Link>
        <br />
        <Link to="Nosotros">Sobre Nosotros</Link>
      </div>
    </>
  );
};

export default Inicio;
