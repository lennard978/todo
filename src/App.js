import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filterTodos, setFilterTodos] = useState([]);

	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilterTodos(todos.filter(todo => todo.completed === true));
				break;
			case "uncompleted":
				setFilterTodos(todos.filter(todo => todo.completed === false));
				break;
			default:
				setFilterTodos(todos);
		}
	};

	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};
	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocal);
		}
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="text-center my-5">Shoping Cart</h1>
					</div>
				</div>
				<Form
					inputText={inputText}
					setInputText={setInputText}
					todos={todos}
					setTodos={setTodos}
					status={status}
					setStatus={setStatus}
				/>
				<TodoList filterTodos={filterTodos} todos={todos} setTodos={setTodos} />
			</div>
		</>
	);
}

export default App;
