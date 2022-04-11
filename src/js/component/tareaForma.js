import React, { useState } from "react";

const TareaForm = (props) => {
	const [inputText, setInputText] = useState({ label: "", done: false });
	const [validacion, setValidacion] = useState(true);

	const manejarFormulario = (e) => {
		setInputText({ ...inputText, label: e.target.value });
	};

	const submit = (event) => {
		event.preventDefault();
		if (inputText.label.trim() !== "") {
			props.nuevaTarea(inputText);
			setValidacion(true);
			setInputText({ ...inputText, label: "" });
		} else {
			setValidacion(false);
		}
	};

	return (
		<div className="">
			<div>
				<h1 className="title">TODO LIST</h1>
			</div>
			<form className="" onSubmit={submit}>
				<span className="add">Add task</span>
				<input value={inputText.label} onChange={manejarFormulario} />
				<button className="btn-grad">Add</button>
				<div className="validacion"></div>
			</form>
			{!validacion && (
				<div className="validacion">please write a task.</div>
			)}
		</div>
	);
};

export default TareaForm;
