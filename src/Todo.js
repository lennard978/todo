import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa/index";
import "./todo.css";
export default function Todo({ text, todo, setTodos, todos }) {
	const deleteHandler = () => {
		setTodos(todos.filter(el => el.id !== todo.id));
	};
	const completeHandler = () => {
		setTodos(
			todos.map(item => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};
	return (
		<div className="container">
			<div className="row no-gutters">
				<div className="col-12">
					<li
						className={`p-2 my-1 bg-warning text-center todo-item ${
							todo.completed ? "completed" : ""
						}`}
					>
						{text}
					</li>
				</div>
				<div className="col-12 d-flex flex-row justify-content-center">
					<button
						onClick={completeHandler}
						className="my-1 ml-1 btn btn-success"
					>
						<FaCheck />
					</button>
					<button onClick={deleteHandler} className="btn my-1 ml-1 btn-danger">
						<FaTrash />
					</button>
				</div>
			</div>
		</div>
	);
}
