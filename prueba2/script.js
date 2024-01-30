function subirArchivo() {
	const fs = require('fs');
	const { Octokit } = require('@octokit/rest');
	
	// Configura el cliente de Octokit con tu token de acceso personal
	const octokit = new Octokit({
	  auth: 'tu_token_de_acceso_personal',
	});
	
	// Lee el contenido del archivo que deseas cargar
	const fileContent = fs.readFileSync('hola.txt', 'utf-8');
	
	// Define la información del repositorio y el archivo
	const owner = 'nombre_del_usuario_o_nombre_de_la_organizacion';
	const repo = 'nombre_del_repositorio';
	const path = 'hola.txt';
	
	// Crea un nuevo commit con el archivo
	octokit.repos.createOrUpdateFileContents({
	  owner,
	  repo,
	  path,
	  message: 'Añadir archivo hola.txt',
	  content: Buffer.from(fileContent).toString('base64'),
	})
	.then(response => {
	  console.log('Archivo subido exitosamente:', response.data.content);
	})
	.catch(error => {
	  console.error('Error al subir el archivo:', error.message);
	});
	
  }