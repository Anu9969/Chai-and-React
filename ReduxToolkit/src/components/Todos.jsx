// import React from "react";
// import { useSelector ,useDispatch } from "react-redux";
// import { removeTodo } from "../features/todo/todoSlice";

// function Todos(){
//     const todos = useSelector(state => state.todos);
//     const dispatch = useDispatch();  //value bhejne ke liye used here for remove functionality

//     return(
//         <>
//         <div>Todos</div>
//         {todos.map((todo) => (
//             <li key={todo.id}>
//                 {todo.text}
//                 <button 
//                 onClick={() => dispatch(removeTodo(todo.id))}></button> 
//             </li>
            
//         ))}
//         </>
//     )
// }

// export default Todos;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div>Todos</div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center gap-2">
                        {todo.text}
                        <button 
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 text-white p-1 rounded"
                        >
                            Remove
                        </button> 
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
