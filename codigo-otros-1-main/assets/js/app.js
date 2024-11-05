const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//se quito el simbolo de pesos de las variables n,b,l
const n = document.querySelector('.name');
const b = document.querySelector('.blog');
const l = document.querySelector('.location');

//Cambio de data por response
async function displayUser(username) {
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json()
  
  //console.log(JSON.stringify(data));

  //se quito el simbolo de pesos de las variables n,b,l
  n.textContent = `${data.name}`;
  b.textContent = `${data.blog}`;
  l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);