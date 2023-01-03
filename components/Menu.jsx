import React, { useEffect, useState } from 'react'
// import Modal_add from '../../components/modal_add/Modal_add.jsx'
import Link from 'next/link'

import styles from '../styles/menu.module.css'

function Menu() {
   


   	return(
   		<>
		<nav className={styles.menu}>
			<Link href="/Home">
				<span className="material-icons">home</span>
			</Link>
			<Link href="/Search">
				<span className="material-symbols-sharp">search</span>
			</Link>

				
				<span className="material-symbols-sharp">add_circle</span>
				<span className="material-symbols-sharp">favorite</span>

			<Link  className={styles.user} href="/Perfil">
				<span className="material-icons">account_circle</span>
			</Link>
		</nav>
		</>
   	)


   }




export default Menu