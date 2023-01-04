import styles from '../styles/licencia.module.css'

function Licencia() {
	const PERFIL_VACIO = "photouser/perfil-vacio.jpg"
	const userList = [
		// {
		// 	photo: "photouser/cr7.jpg",
		// 	user: "CR7",
		// 	name: "Cristiano",
		// 	surname: "Ronaldo",

		// },
		// {
		// 	photo: "photouser/messi.jpg",
		// 	user: "M10",
		// 	name: "Lionel",
		// 	surname: "Messi",
		// },
		{
			photo: "photouser/mbappe.jpg",
			user: "Mbappe710",
			name: "Kilian",
			surname: "Mbappe",
		},
		// {
		// 	photo: "photouser/neymar.jpg",
		// 	user: "N10JR",
		// 	name: "Neymar",
		// 	surname: "JR",
		// },
		// {
		// 	photo: "",
		// 	user: "lefasom",
		// 	name: "Leonardo",
		// 	surname: "Sombra",
		// },


	]
		return(<>	
			{userList.map((val,key)=>{
				return(
					<div className={styles.containerLicencia} key={key}>
						<div className={styles.licencia}>
							<div className={styles.licenciaLeft}>
								<div className={styles.img}>
									<img  src={val.photo || PERFIL_VACIO } alt={val.user} />
								</div>	
							    <h4>{val.name} {val.surname}</h4>		
							</div>
							<div className={styles.licenciaRight}>
								<div className={styles.user}>
									<h1>{val.user}</h1>
									<span className="material-symbols-sharp">settings</span>
								</div>
								<button>Editar perfil</button>
							</div>
						</div>
					</div>	
				)
			})}
		</>)
}

export default Licencia