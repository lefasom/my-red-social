import React, { useEffect, useState } from 'react'
import styles from '../styles/homes.module.css'
import Menu from '../components/Menu.jsx'
import MenuUpHome from '../components/MenuUpHome.jsx'


function Home() {
	const PERFIL_VACIO = "photouser/perfil-vacio.jpg"
	const userList = [
		{
			photo: "photouser/cr7.jpg",
			user: "CR7",
			name: "Cristiano",
			surname: "Ronaldo",

		},
		{
			photo: "photouser/messi.jpg",
			user: "M10",
			name: "Lionel",
			surname: "Messi",
		},
		{
			photo: "photouser/mbappe.jpg",
			user: "Mbappe710",
			name: "Kilian",
			surname: "Mbappe",
		},
		{
			photo: "photouser/neymar.jpg",
			user: "N10JR",
			name: "Neymar",
			surname: "JR",
		},
		{
			photo: "",
			user: "lefasom",
			name: "Leonardo",
			surname: "Sombra",
		},


	]

	return (
	  <>	
	  	<Menu />
			<MenuUpHome />
			<div className={styles.containerBottom}>
		 		<div className={styles.history}>
					<div className={styles.flex}>
						{userList.map((val,key)=>(
		 				    <div key={key} className={styles.perfil}>
		 						<div className={styles.img}>
		 					    	<img src={val.photo || PERFIL_VACIO } alt={val.user} />
		 						</div>
		 						<button><h3>{val.user}</h3></button>
		 				    </div>
		 			  ))}
		 			</div>
		 		</div> 
			</div>
		</>
	)
}

export default Home