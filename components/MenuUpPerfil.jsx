import styles from '../styles/menuUpPerfil.module.css'
import Link from 'next/link'

function MenuUpPerfil(props) {
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

		return (
			<>
				<nav className={styles.containerMenuUpPerfil}>
					<Link href="">
						<span className="material-symbols-sharp">person_add</span>
					</Link>
					<div>
						<h4>{userList.map((val)=>val.user)}</h4>
						<Link href="">
							<span className="material-symbols-sharp">expand_more</span>
						</Link>
					</div>
					<Link href="/">
						<span className="material-symbols-sharp">Logout</span>
					</Link>
				</nav>
				
			</>
		)
	
}

export default MenuUpPerfil