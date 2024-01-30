
  function subirArchivo() {
	const fileContent = 'Contenido del archivo';
	console.log('Contenido del archivo:', fileContent);
  
	const owner = 'jonathanjimenezmunoz';
	const repo = 'jonathanjimenezmunoz.github.io';
	const path = 'hola.txt';
	const token = '914AD4B8B518E06D'; // Tu token de acceso personal
  
	const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  
	// Convierte el contenido del archivo a base64 utilizando btoa()
	const base64Content = btoa(fileContent);
  
	// Configura los datos para la solicitud
	const requestData = {
	  method: 'PUT',
	  headers: {
		'Content-Type': 'application/json',
		Authorization: `token ${token}`, // Añade tu token de acceso personal
	  },
	  body: JSON.stringify({
		message: 'Añadir archivo hola.txt',
		content: base64Content,
		path: path,
		branch: 'main', // Cambia a tu rama principal si es diferente
	  }),
	};
  
	// Realiza la solicitud con la API Fetch
	fetch(apiUrl, requestData)
	  .then(response => response.json())
	  .then(data => {
		console.log('Archivo subido exitosamente:', data.content);
	  })
	  .catch(error => {
		console.error('Error al subir el archivo:', error.message);
	  });
  }
  