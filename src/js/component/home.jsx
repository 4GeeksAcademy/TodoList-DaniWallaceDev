import React, { useState } from "react";

//create your first component
const Home = () => {
	const [tareas, setTareas] = useState(["Recoger la habitación"])
	const [nuevaTarea, setNuevaTarea] = useState("")

// funcion de crear para usar en API
// function createTask(tareas = "") {
//     return post( {
//         "label": text,
//         "is_done": false
//     })
// }

function crearTarea (e) {
	if (e.key === "Enter" && nuevaTarea !== "") {
		setTareas([...tareas,nuevaTarea])
		setNuevaTarea("")
		console.log(tareas)
	}
}

function cambioInput (e){
	setNuevaTarea(e.target.value)
	console.log(nuevaTarea)
}

// funcion de delete
function borrarTarea(indexToDelete) {
	setTareas(tareas.filter((tareita,index)=> index !== indexToDelete))
}

	return (
		<div className = "container-fluid">
			<div className = "row">
				<div className = "col-12 mx-auto">
					<h1 className="border border-3 border-dark bg-light rounded-3 mb-3 pb-2 d-flex justify-content-center">ToDoList</h1>
					<input placeholder="Añade tu proxima tareita" type="text" value={nuevaTarea} onChange={cambioInput} onKeyDown={crearTarea}/>
					<ul>
						{tareas.map((tarea,index)=>
						<li className="ps-1 mx-auto my-2" key={index}>{tarea}
							<i className="btn fa-solid fa-trash-can" onClick={()=>borrarTarea(index)}></i>
						</li>)}
						<li className="ps-1">
							Tareas por completar = {tareas.length}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
