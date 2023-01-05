import React from 'react'
import styles from '../styles/galery.module.css'

function Count() {
	return (
		<>
				<div className={styles.count}>
				<div>
					<h4>206</h4>
					<p>publicaciones</p>
				</div>	
				<div>
					<h4>2.2M</h4>
					<p>seguidores</p>
				</div>
				<div>
					<h4>598</h4>
					<p>seguidos</p>
				</div>
			</div>
		</>
	)
}

export default Count