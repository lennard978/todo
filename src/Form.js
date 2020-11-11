import React from "react";
import { FaPlus } from "react-icons/fa/index";
import "./form.css";

export default function Form({
	inputText,
	setInputText,
	todos,
	setTodos,
	setStatus,
}) {
	const inputTextHandler = e => {
		setInputText(e.target.value);
	};
	const submitTodoHandler = e => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText("");
	};
	const statusHandler = e => {
		setStatus(e.target.value);
	};
	return (
		<>
			<form action="">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-12">
									<input
										onChange={inputTextHandler}
										className="w-100 p-1 mb-4"
										type="text"
										value={inputText}
									/>
									<button
										onClick={submitTodoHandler}
										className="btn btn-sm btn-success submit"
										type="button"
									>
										<FaPlus />
									</button>
								</div>
							</div>
						</div>
						<div className="col-12 selected">
							<select onChange={statusHandler} name="todos" id="">
								<option value="all">All</option>
								<option value="completed">Completed</option>
								<option value="uncompleted">Uncompleted</option>
							</select>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}
