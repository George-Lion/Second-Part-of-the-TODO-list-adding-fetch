import React, { useState, useEffect } from "react";
import TareaForm from "./tareaForma";
import Tarea from "./tarea";

const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);
	const [firstRender, setFirstRender] = useState(false);

	useEffect(() => {
		getTodoList();
	}, []);

	useEffect(() => {
		if (firstRender) {
			updateTodoList();
		}
	}, [listaTareas]);

	const getTodoList = async () => {
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/jorge",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const data = await response.json();
		setListaTareas(data);
		setFirstRender(true);
	};

	const updateTodoList = async () => {
		await fetch("https://assets.breatheco.de/apis/fake/todos/user/jorge", {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(listaTareas),
		});
	};

	const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas]);
	};

	const borrarTarea = (id) => {
		const listaFiltrada = listaTareas.filter((e, index) => index !== id);
		setListaTareas(listaFiltrada);
	};

	console.log(listaTareas);

	return (
		<div className="Home caja mx-auto rounded mt-4">
			<div className=" caja2">
				<TareaForm nuevaTarea={nuevaTarea} />
				<div className="lista">
					{listaTareas.map((e, index) => (
						<Tarea
							tarea={e}
							key={index}
							borrarTarea={borrarTarea}
							id={index}
						/>
					))}
				</div>
				<div className="num">Number of tasks {listaTareas.length}</div>
			</div>
		</div>
	);
};

export default Home;
