import React from 'react'
import TodoFilters from './TodoFilters/TodoFilters'
import Todo from './Todo'

const TodoList = ({ todos, handleSetComplete, handleDelete, activeFilter, showAllTodos,handleClearComplete,showActiveTodos, showCompletedTodos }) => {
	//Children permite utilizar este componente como un contenedor de otros componentes 
	return (
		<div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
			{todos.map(todo => (
				<Todo
					key={todo.id}
					todo={todo}
					handleSetComplete={handleSetComplete}
					handleDelete={handleDelete}
				/>
			)
			)}
			<TodoFilters
				total={todos.length}
				activeFilter={activeFilter}
				showAllTodos={showAllTodos}
				showActiveTodos={showActiveTodos}
				showCompletedTodos={showCompletedTodos}
				handleClearComplete={handleClearComplete}
			/>

		</div>
	)
}

export default TodoList