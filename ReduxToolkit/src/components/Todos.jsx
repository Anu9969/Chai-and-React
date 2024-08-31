import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../features/todo/todoSlice";

function Todos(){
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();  //value bhejne ke liye used here for remove functionality

    return(
        <>
        
        </>
    )
}