import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filterTodos }) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<ul className="todo-list w-100 list-unstyled mt-5">
						{filterTodos.map(todo => (
							<Todo
								todos={todos}
								setTodos={setTodos}
								key={todo.id}
								todo={todo}
								text={todo.text}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
