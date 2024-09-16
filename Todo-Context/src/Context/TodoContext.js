import { createContext,useContext } from "react";
export const TodoContext=createContext({
    todos:[{id:1,text:"hello",completed:true}],
    addTodo:(text)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,text)=>{},
    toggleComplete:(id)=>{}
})
export const TodoContextProvider=TodoContext.Provider;
export const useTodo=()=>{
    return useContext(TodoContext)
}