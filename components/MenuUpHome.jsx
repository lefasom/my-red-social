import React from 'react'
import styles from '../styles/menuUpHome.module.css'

function MenuUpHome() {
	return (
	
			
	<nav className={styles.containerMenuUpHome}>	
		<div className={styles.search}>
			<span className="material-symbols-outlined">photo_camera</span>
		</div>
		<img src='logo.png' />
		<div className={styles.search}>
			<span className="material-symbols-outlined">send</span>
		</div>
	</nav>	
		
	)
}

export default MenuUpHome