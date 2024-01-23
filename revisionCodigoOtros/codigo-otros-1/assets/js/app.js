
// Evento para el domo
document.addEventListener('DOMContentLoaded', () => {
const baseEndpoint = 'https://api.github.com'; //se define link de API
const usersEndpoint = `${baseEndpoint}/users`;//Usuario
const $n = document.querySelector('.name');//se selecciona el nombre
const $b = document.querySelector('.blog');//se selecciona el link
const $l = document.querySelector('.location');//se selecciona la ubicacion

async function displayUser(username) { //funcion asincrona con el parametro de username
  try {
    $n.textContent = 'Cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`); 
    
    if (!response.ok) { //verificacion de respuesta 
      throw new Error(`Error de red: ${response.status}`);
    }

    // se actualiza los elementos en el DOM y en caso de falla se despliega el texto indicado
    const data = await response.json(); 
    console.log(data);
      $n.textContent = data.name || 'Nombre no disponible';
      $b.textContent = data.blog || 'Blog no disponible';
      $l.textContent = data.location || 'Ubicación no disponible';
    } catch (error) {
      handleError(error);
    }
  }

  // se delcara funcion error
  function handleError(error) {
    console.log('OH NO!');
    console.error(error);
    $n.textContent = `Algo salió mal: ${error}`;
  }

  displayUser('stolinski').catch(handleError);
});