import { createSlice, nanoid } from "@reduxjs/toolkit";

//initial state it can be object / array
const initialState = {
    todos:[{
        id: 1,
        text: "Hello world"
    }]
}
function sayHello() {
    console.log("hello world");
    
}

//reducer is funtionality and slice is bigger version of reducer
//createSlice take object
export const todoSlice = createSlice({
    // name of slice: when use redux tool kit chrome extension it will show there
    name: 'todo',
    //initial state of every slice
    initialState,
    //reduces
    reducers: {
        // addTodo: sayHello
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload //action.payload.text
            }
            state.todos.push(todo)
        },
        //in context we only declare the function
        //in redux tool kit we declare and define the function
        removeTodo: (state, action)=>{
            state.todos= state.todos.filter((todo)=> todo.id !== action.payload)
        },
    } //inside reducers always have properties and function

})

//export individule function need for components
export const {addTodo, removeTodo}= todoSlice.actions

//let the store have all the reducer
export default todoSlice.reducer