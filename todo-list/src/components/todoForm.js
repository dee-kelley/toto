import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component{
    state={
        text: ''
    }
    handleChange=(event)=>{
this.setState({
    [event.target.name]: event.target.value
})
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        //submit the form, create a new todo and pass to to do list
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text:""
        });
    }
    render(){
        return <form onSubmit={this.handleSubmit}><input 
        name="text"
        value={this.state.text} 
        onChange={this.handleChange}
        placeholder = "to do..."/>
        <button onClick={this.handleSubmit}>Submit</button>
        </form>
        
    }
}

export default TodoForm