import React from "react";

const Tarea = (props) => {
	const eliminar = () => {
		props.borrarTarea(props.id);
	};
	return (
		<div className="boxtarea">
			<div className="tarea">
				<span>{props.tarea.label}</span>
				<span onClick={eliminar}>
					<i className="fas fa-times-circle"></i>
				</span>
			</div>
		</div>
	);
};

export default Tarea;
