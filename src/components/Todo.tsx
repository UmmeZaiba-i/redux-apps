import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useState } from "react";
import { addtask, removeTask, toggleTodo } from "../redux/features/todo/todoSlice";

export default function Todo() {

    const [todotext, setTodotext] = useState('')
    const todos = useSelector((state: RootState) => state.todos.todo)
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if(todotext.trim()){
            dispatch(addtask(todotext));
            setTodotext('');
        }
    }
    
    return (
        <div>
            <h2>Todo</h2>
            <input
                type="text"
                value={todotext}
                placeholder="Add a task"
                onChange={(e) => setTodotext(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo: any) => {
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => dispatch(toggleTodo(todo.id))}
                        >
                        {todo.text}
                        </span>
                        <button onClick={() => dispatch(removeTask(todo.id))}>Remove</button>
                    </li>
                }
                )}
            </ul>
        </div>
    )
}
