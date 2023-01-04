import Licencia from '../components/Licencia.jsx'
import Menu from '../components/Menu.jsx'
import MenuUpPerfil from '../components/MenuUpPerfil.jsx'
import Head from 'next/head'


function Perfil() {	
	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Chat</title>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Icons" />
			</Head>
			<Menu />
			<MenuUpPerfil />
			<Licencia />
			<br/>
			<br/>
			<br/>

		</>
	)
}

export default Perfil