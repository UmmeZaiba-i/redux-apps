import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// defining interface id, text - our task, completed
interface Todo{
    id:number;
    text:string;
    completed:boolean;
}
interface TodoState{
    todos :Todo[]
}

const initialState: TodoState={
    todos: []
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtask:(state,action:PayloadAction<string>)=>{
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed:false,
            }
            state.todos.push(newTodo);
        },
        toggleTodo:(state,action:PayloadAction<number>)=>{
            const todo = state.todos.find((todo)=> todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        },
        removeTask:(state,action:PayloadAction<number>)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }

    }
})

export default todoSlice.reducer;
export const {addtask, toggleTodo, removeTask} = todoSlice.actions; 