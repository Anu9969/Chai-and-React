// import React, { useState } from "react";
// import { addTodo } from "../features/todo/todoSlice";
// import {useDispatch} from 'react-redux';

// function AddTodo() {
//     const [input , setInput] = useState(''); 
//     const dispatch = useDispatch();
//      //value bhejne ke liye
//     //dispatch reducers ko use krke store m value add krta h 

//     const addTodoHandler = (e) => {
//         e.preventDefault();
//         dispatch(addTodo(input));
//         setInput('');//input ko empty krne ke liye
//     } 
//   return (
//     <div>
//       <input type="text" />
//       <button>Add Todo</button>
//     </div>
//   );
// }

// function TodoItem({ todo }) {
    

//     return (
//         <div
//             className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
//                 todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
//             }`}
//         >
//             <input
//                 type="checkbox"
//                 className="cursor-pointer"
//                 checked={todo.completed}
//                 onChange={toggleCompleted}
//             />
//             <input
//                 type="text"
//                 className={`border outline-none w-full bg-transparent rounded-lg ${
//                     isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//                 } ${todo.completed ? "line-through" : ""}`}
//                 value={todoMsg}
//                 onChange={(e) => setTodoMsg(e.target.value)}
//                 readOnly={!isTodoEditable}
//             />
//             <button
//         type="submit"
//         className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//       >
//         Add Todo
//       </button>
//             <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//                 onClick={() => {
//                     if (todo.completed) return;

//                     if (isTodoEditable) {
//                         editTodo();
//                     } else setIsTodoEditable((prev) => !prev);
//                 }}
//                 disabled={todo.completed}
//             >
//                 {isTodoEditable ? "📁" : "✏️"}
//             </button>
//             {/* Delete Todo Button */}
//             <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//                 onClick={() => deleteTodo(todo.id)}
//             >
//                 ❌
//             </button>
//         </div>
//     );
// }

// export default TodoItem;
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input.trim()));
            setInput('');
        }
    }

    return (
        <form onSubmit={addTodoHandler} className="flex gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new todo"
                className="flex-grow px-3 py-2 border rounded"
            />
            <button
                type="submit"
                className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none"
            >
                Add Todo
            </button>
        </form>
    );
}

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.text);
    const dispatch = useDispatch();

    const updateTodo = () => {
        if (todoMsg.trim() !== todo.text) {
            dispatch(editTodo({ id: todo.id, text: todoMsg }));
        }
        setIsTodoEditable(false);
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    }

    return (
        <div className="flex items-center gap-2 p-2 rounded bg-gray-100">
            <input
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                className={`flex-grow p-1 rounded ${
                    isTodoEditable ? "border" : "border-none bg-transparent"
                }`}
            />
            <button
                onClick={() => {
                    if (isTodoEditable) {
                        updateTodo();
                    } else {
                        setIsTodoEditable(true);
                    }
                }}
                className="p-1 rounded hover:bg-gray-200"
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>
            <button
                onClick={handleDelete}
                className="p-1 rounded hover:bg-gray-200"
            >
                🗑️
            </button>
        </div>
    );
}

export default { AddTodo, TodoItem };