
import { useState, useEffect } from 'react'

import styles from '../styles/galery.module.css'



import Count from './Count.jsx'
// import Library_add from '../library_add/Library_add.jsx'
// import Create_history from '../create_history/Create_history.jsx'
// import Comment from './Comment.jsx'
// import PERFIL_VACIO from '../../images/noLog/noLog.jpg'

// import styles from '../styles/galery.module.css'


function Galery() {
	// var contador=0
	const comentarios = [
		{
			photo: "photouser/mbappe.jpg",
			user: "Mbappe710",
			comentario: "hola amigos",
		},
		{
			photo: "photouser/messi.jpg",
			user: "L10",
			comentario: "que mira bobo sali pa lla",

		},
		{
			photo: "photouser/neymar.jpg",
			user: "N10JR",
			comentario: "para lio no pasa nada",
		},
		
	]
	const misHistorias = [
		{
			state: 1,
			photo: "photouser/messi.jpg",
			user: "M10",
			name: "Lionel",
			surname: "Messi",
			historia: "historias/messi1.jpg",
			comentario: "Campeones de america carajoo!!!",
		},
		{
			state: 1,
			photo: "photouser/messi.jpg",
			user: "M10",
			name: "Lionel",
			surname: "Messi",
			historia: "historias/messi2.jpg",
			comentario: "pasamooooos",
		},
		{
			state: 1,
			photo: "photouser/messi.jpg",
			user: "M10",
			name: "Lionel",
			surname: "Messi",
			historia: "historias/messi3.jpg",
			comentario: "vamooss",
		},
		{
			state: 1,
			photo: "photouser/messi.jpg",
			user: "M10",
			name: "Lionel",
			surname: "Messi",
			historia: "historias/messi4.jpg",
			comentario: "el mas grande de america",
		},
		{
			state: 1,
			photo: "photouser/messi.jpg",
			user: "M10",
			name: "Lionel",
			surname: "Messi",
			historia: "historias/messi5.jpg",
			comentario: "Que recuerdos",
		},
		{
			state: 1,
			photo: "photouser/messi.jpg",
			user: "M10",
			name: "Lionel",
			surname: "Messi",
			historia: "historias/messi6.jpg",
			comentario: "Campeones del mundo carajo",
		},
	]
	///////////////////////////////////////////////////////////////////// < MANEJO DE BOTONERA >	
	const [ clase, setClase ] = useState('albumGrid')
	
	const [ library, setLibrary ] = useState(false)
	const [ createHistory, setCreateHistory ] = useState(false)
	///////////////////////////////////////////////////////////////////// </ MANEJO DE BOTONERA >
	///////////////////////////////////////////////////////////////////// < DATOS DEL USUARIO LOGIADO >
	// const [ usuario, setUsuario] = useState('')
	// const [ photoUser, serPhotoUser ] = useState('')

	// const [ userList, setUserList ] = useState([])

	// const getUser = async () => {
	// 	Axios.get(`http://localhost:3001/SelectUser/${props.id}`).then((response)=>{
	// 		setUserList(response.data)
	// 	})
	// 	.catch((e)=>{
	// 		console.log(e)
	// 	})	
	// }
	// useEffect(() => {
	// 	getUser()
	// 	userList.map((val) => {
	// 		setUsuario(val.user)
	// 		serPhotoUser(val.photo)
	// 	})
	// })
	
	
	///////////////////////////////////////////////////////////////////// </ DATOS DEL USUARIO LOGIADO >
	///////////////////////////////////////////////////////////////////// < HISTORIAS DE USUARIO >
	// const [ historias, setHistorias ] = useState([])
 	// const getHistorias = () => {
	//     Axios.get(`http://localhost:3001/Album/${props.id}`)
	//     .then((response)=> {
	//    		setHistorias(response.data)  
	//     })
	//     .catch((e)=>{
	//     	console.log(e)
	//     })
	// }
	// useEffect(() => { getHistorias() })
	// const [ historiasName, setHistoriasName ] = useState([])
 	// const getHistoriasName = () => {
	//     Axios.get(`http://localhost:3001/Album/${props.name}`)
	//     .then((response)=> {
	//    		setHistoriasName(response.data)  
	//     })
	//     .catch((e)=>{
	//     	console.log(e)
	//     })
	// }
	// useEffect(() => { getHistoriasName() })
	///////////////////////////////////////////////////////////////////// </ HISTORIAS DE USUARIO >
	/////////////////////////////////////////////< MODAL COMENTARIOS > ///////////////////
	const [ modalClass, setModalClass ] = useState(false)
	// const [ comment, setComment ] = useState([])
	// const modalComentario = (idPhoto) => {
	// 		Axios.get(`http://localhost:3001/Comment/${idPhoto}`).then((response) => {
	// 			setComment(response.data)
	// 		})
	// 		.catch((e)=>{
	// 			console.log(e)
	// 		})	
	// }
	// const deleteComment = (id) => {
	//     Axios.delete(`http://localhost:3001/deleteComment/${id}`).then((response) => {
	//     	setComment(
	//     comment.filter((val) => {
	//         		return val.id != id;
	//         	})
	//       	);
	//     });
	// };
	/////////////////////////////////////////////</ MODAL COMENTARIOS > ///////////////////
	//////////////////////////////////////////////////////////////////// < BOTONERA >
// if(props.id && props.name==null){
		if(library){
			return(	<>
				<div className={styles.containerGalery}>
					<Count />	
					<div className={styles.view}>
						<button onClick={() => {
							setClase('albumGrid')
							setLibrary(false)
							setCreateHistory(false)
						}}>
							<span className="material-symbols-outlined">grid_on</span>
						</button>
						<button onClick={() => {
							setClase('albumOne')
							setLibrary(false)
							setCreateHistory(false)
						}}>
							<span className="material-symbols-outlined">crop_portrait</span>
						</button>
						<button onClick={() => {
							setLibrary(true)
							setCreateHistory(false)
						}}>
							<span className="material-symbols-outlined">library_add</span>
						</button>
						<button onClick={() => {
							setCreateHistory(true)
							setLibrary(false)
						}}>
							<span className="material-symbols-outlined">photo_library</span>
						</button>
						<button>
							<span className="material-symbols-outlined">account_box</span>
						</button>
					</div>
				    <div>
						{/* <Library_add id={ props.id } /> */}
					</div>
				</div>
			</>)
		}else if(createHistory){
			return(	<>
				<div className={styles.containerGalery}>
					<Count />
					<div className={styles.view}>
						<button onClick={() => {
							setClase('albumGrid')
							setLibrary(false)
							setCreateHistory(false)
						}}><span className="material-symbols-outlined">grid_on</span></button>
						<button onClick={() => {
							setClase('albumOne')
							setLibrary(false)
							setCreateHistory(false)
						}}><span className="material-symbols-outlined">crop_portrait</span></button>
						<button onClick={() => {
							setLibrary(true)
							setCreateHistory(false)
						}}><span className="material-symbols-outlined">library_add</span></button>
						<button onClick={() => {
							setCreateHistory(true)
							setLibrary(false)
						}}><span className="material-symbols-outlined">photo_library</span></button>
						<button><span className="material-symbols-outlined">account_box</span></button>
					</div>
			      	<div>
						{/* <Create_history id={ props.id } /> */}
					</div>
				</div>
			</>)
		}else{
			return (
				<div className={styles.containerGalery}>
					<Count />
					<div className={styles.view}>
						<button onClick={() => {
							setClase('albumGrid')
							setLibrary(false)
							setCreateHistory(false)
						}}><span className="material-symbols-outlined">grid_on</span></button>
						<button onClick={() => {
							setClase('albumOne')
							setLibrary(false)
							setCreateHistory(false)
						}}><span className="material-symbols-outlined">crop_portrait</span></button>
						<button onClick={() => {
							setLibrary(true)
							setCreateHistory(false)
						}}><span className="material-symbols-outlined">library_add</span></button>
						<button onClick={() => {
							setCreateHistory(true)
							setLibrary(false)
						}}><span className="material-symbols-outlined">photo_library</span></button>
						<button><span className="material-symbols-outlined">account_box</span></button>
					</div>

	{/*////////////////////////////////////////////////////// </ BOTONERA >*/}

	{/* ////////////////////////////////////////////////// < HISTORIAS Y COMENTARIOS >*/}
		      <style>
				{`
				.commentfalse{
					background-color: #ddd;
					height: 0px;
					overflow-y: hidden;
					overflow-y: scroll;
				}
				.commenttrue{
					position:fixed;
					top:0;
					height:100vh;
					width: 100vw;
					background-color: #eff;
					overflow-y: hidden;
					overflow-y: scroll;
				}
				button{
					background: transparent;
					border: 0;
					cursor: pointer;
					font-family: poppins;
					font-size: 15px;
					padding-left:10px;
					padding-top: 10px;
				}
				.commentBTN span{
					position: absolute;
					font-weight: 500;
				}
				.flexComment{
					display: flex;
				
					border-radius: 10px;
					
					margin: 10px 5px;
					padding: 5px;
				}
				.flexComment .colum{
					margin: 0 30px;
					width: 300px;
				}
				
				.flexComment button{
					background-color: transparent;
					border: 0;
					
					cursor: pointer;
				
				}
				
				.hora{
					display: flex;
				}
				.hora button span{
					color: #bbb;
				}
				.hora button span:hover{
					color: orangered;
				}
				.colum #time{
				
					color: #999;
					font-size: 12px;
					margin-top: 5px;
				}
				
.flexComment .h4{
    color: #777;
    font-size: 13px;

}
.flexComment  .miH4{
    color: #3f72ff;
    font-size: 15px;

}

.albumOne input{
    padding: 10px 5px;
    padding-right: 20%;
    margin: 0px;
    margin-left: 14px;
    border: 0;
    outline: none;
    border-radius: 29px;
    border: 1px solid #ddd;
    font-size: 17px;
    font-family: poppins;
    color: #444;
    width: 77%;

}
.albumOne input::placeholder{
    font-size: 17px;
    font-family: poppins;
    color: #888;


}
.albumOne button {
    border: 0;
    background-color: #eee;
    cursor: pointer;
    border-radius: 29px;

}

.albumOne button .send{
    font-size: 28px;
    color: #777;
    margin-left: 5px;
}

.modalComentario{
    z-index: 999;
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    

}
.modalComentario button {

    width: 40px;
    height: 30px;
    font-size: 38px;
    background-color: transparent;
    border: 0;


}
.border{
    border-bottom: 1px solid #ddd;
}
.border button{
    margin-left: 10px;
    margin-bottom: 13px;
    color: #999;

}
.modalSalir{
    display: none;
}
.comment{
    border-radius: 10px;
    background-color: rgba(274, 274, 274, 1);
    height: 90%;
    width: 90%;
    overflow-y: hidden;
    overflow-y: scroll;
    margin: auto;

}
.comment button{
    color: #555;

}
.flexComment .img{
    width: 56px;
    height: 56px;
    border: 3px solid #ddd;
    border-radius: 50%;
    display: flex;
    margin-bottom: 5px;
    margin-left: 10px;
}
.flexComment img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    padding: .2px;
}
.comentarios button{
    margin: 0 10px;
    padding: 10px 10px;
    font-size: 19px;
    letter-spacing: 2px;
    background-color: transparent;
    color: #555;

}

.msj h3{
    margin-left: 10px;
    color: #555;
    font-family: poppins;
}

#publicar{
    background-color: #fff;
    color: #3f72ff;
    font-size: 15px;
    cursor: pointer;
    position: relative;
    left: -66px;
    font-family: poppins;

}
.count{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	border-bottom: 1px solid #ccc;
	border-top: 1px solid #ccc;
}

.count div h4{
	color: #444;
	font-family: poppins;
	font-size: 17px;
	text-align: center;
	margin-bottom: 0;
}
.count div p{
	margin-top: 0;
	text-align: center;
	font-family: poppins;
	font-size: 15px;
	color: #999;
	font-weight: 444;
}

.view{
	display: flex;
	justify-content: space-around;
	padding: 13px 22px;
}
.view button{
	border: 0;
	background-color: transparent;
	cursor: pointer;
}
.view button span{
	font-size: 32px;
	color: #888;
}
.view button:focus span{
	color: #3f72ff;
}

				`}
			  </style>
			    <div className={ modalClass ? "commenttrue" : "commentfalse" }>
		        	<button onClick={()=>{setModalClass(false)}}>
		        		<span className="material-symbols-outlined">
							arrow_back_ios
						</span>
		        	</button>
					<div  className="comment">	
						{comentarios.map((val,key)=>{
								
									return(
										<div className="flexComment" key={key}>
											<div className={styles.img}>
												<img src={ val.photo } alt={val.user}/>
											</div>
											<div className="colum">
												<h4 className="miH4">{val.user}</h4>
												<p>{val.comentario}</p>
												
											</div>
											<div className="hora">
												<button>
													<span className="material-symbols-sharp">delete</span>
												</button>
											</div>
										</div>
									)
						})} 
					</div>

		        </div>
		        <div className={clase}>
				<style jsx>{`
				.albumOne .img img{
					width: 50px;
					height: 50px;
					border-radius: 50%;
					object-fit: cover;
					padding: .2px;
				}
				.albumOne .img{
					width: 56px;
					height: 56px;
					border: 3px solid #ddd;
					border-radius: 50%;
					display: flex;
					margin-bottom: 13px;
					margin-left: 20px;
				}
				.albumOne section{
					padding: 6px 0;
					border: 0;
				}
				.albumOne .flex h3{
					font-size: 14px;
					margin: auto 18px;
					margin-top: 14px;
					padding: 5px;
				}
				.albumOne section img{
					width: 100%;
					object-fit: contain;
				}
				
				.albumOne input{
					padding: 10px 5px;
					padding-right: 20%;
					margin: 0px;
					margin-left: 14px;
					border: 0;
					outline: none;
					border-radius: 29px;
					border: 1px solid #ddd;
					font-size: 17px;
					font-family: poppins;
					color: #444;
					width: 77%;

				}
				.albumOne input::placeholder{
					font-size: 17px;
					font-family: poppins;
					color: #888;


				}
				.albumOne button {
					border: 0;
					background-color: #eee;
					cursor: pointer;
					border-radius: 29px;

				}

				.albumOne button .send{
					font-size: 28px;
					color: #777;
					margin-left: 5px;
				}
				
				.comentarios button{
					margin: 10px -1px;
					padding: 10px 10px;
					font-size: 19px;
					letter-spacing: 2px;
					background-color: transparent;
					color: #555;

				}

				.msj h3{
					margin-left: 10px;
					color: #555;
					font-family: poppins;
				}
				
				.albumGrid{
					display: grid;
					grid-template-columns: 1fr 1fr 1fr ;
				}
				.albumGrid img{
					width: 98.5%;
					height: 45vh;
   					object-fit: cover;

				}	
				.albumOne h5{
					font-size: 14px;
					margin: auto 10px;
					
				}
				
				`}</style>
				{misHistorias.map(( val, key ) => {
						if(val.state == 1 && clase == 'albumOne'){
							return(
								<section key={key} >
						 			<div className="flex">
										<div className="img">
											<img src={val.photo} alt={val.user}/>
										</div>
										<h3>{val.name} {val.surname}</h3>
									</div>
									<img src={val.historia} alt=""/>
									<div className="msj">
										<h3>{val.name} {val.surname}</h3>
										<h5>{val.comentario}</h5>
									</div>
									
							 	 	{/* <Comment avatar={photoUser} idPhoto={val.idPhoto} usuario={usuario}/> */}

									<div className="comentarios" >
										<button 
										onClick={()=>{
											setModalClass('modalComentario')
											// modalComentario(val.idPhoto)
										}}
										>
											Ver los comentarios
										</button>
									</div>
														
								</section> 
							)
						}else if(val.state == 1){
							return(
								<section className={styles.albumGrid} key={key} >
									<img src={val.historia} alt=""/>
								</section> 
							)
						}
					})}
				</div>
			</div>
		)
	}
}


export default Galery



