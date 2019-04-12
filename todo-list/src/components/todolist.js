import React from "react"
import TodoForm from "./todoForm";
import Todo from "./todo";

class Todolist extends React.Component{
    state ={
        todos:[],
        todosToShow: "all"
    };

    addTodo=(todo)=>{
        this.setState({
            todos:[todo, ...this.state.todos] //pass this to update state
            //add todo to the beginning of todos array
        });
    }
toggleComplete = (id)=>{
    this.setState({
        todos: this.state.todos.map(todo=>{
            //supposed to update here
            if(todo.id===id){
                return{
                    id:todo.id,
                    text:todo.text,
                    complete: !todo.complete
                }
            }else{
                return todo;
            }
        })
    })
}

updateTodoToShow = (str)=>{
this.setState({
    todosToShow: str
});
};

handleDelete = (id)=>{
this.setState({
    todos:this.state.todos.filter(todo => todo.id !==id)
});
};

deleteComplete = ()=>{
this.setState({
    todos:this.state.todos.filter(todo => !todo.complete)
});
};

    //lifting up the state we want to keep it in this parent compnent
    render(){
        let todos = [];
        if(this.state.todosToShow === "all"){
            todos = this.state.todos;
        }else if(
            this.state.todosToShow === "active"){
            todos = this.state.todos.filter(todo => !todo.complete)
        }else if(
            this.state.todosToShow === "complete"){
            todos = this.state.todos.filter(todo => todo.complete)
            }
        return <div>
            <TodoForm onSubmit={this.addTodo}/>
            {todos.map(todo=>(
                <Todo key={todo.id} 
                toggleComplete={()=>this.toggleComplete(todo.id)} 
                onDelete={() => this.handleDelete(todo.id)}
                todo={todo} />))}
                <div>Still To-do: {this.state.todos.filter(todo => !todo.complete).length}</div>
                <div>
                    <button onClick={() => this.updateTodoToShow("all")}>Show All</button>
                    <button onClick={() => this.updateTodoToShow("active")}>Show Active</button>
                    <button onClick={() => this.updateTodoToShow("complete")}>Show Complete</button>
                    <button onClick={this.deleteComplete}>Delete Completed To-dos</button>
                </div>
        </div>
    }
}

export default Todolist;

