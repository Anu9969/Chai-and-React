import { createSlice ,nanoid } from "@reduxjs/toolkit";
//store starting m kaisa dikhega
const initialState = {
    todos: [{id:1 , text: "I will keep moving forward"}]
}//pehla todo

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state , action) => { 
            const todo ={
                id: nanoid(),  //date().now bhi use kr skte h
                text: action.payload,  //payload ek object
            }
            state.todos.push(todo);
        },
        deteleTodo: (state ,action) => {
            statetodos = state.todos.filter((todo) => todo.id != action.payload);
           
        },
        editTodo: (state , action)=>{
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            todo.text = action.payload.text;
        }
    }
});

export const {addTodo , deleteTodo , editTodo} = todoSlice.actions;

export default todoSlice.reducer;