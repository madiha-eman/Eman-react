import React from 'react';

class Todos extends React.Component{
    constructor(){
        super()
        this.state={
            todos:[{title: 'madiha', edit: true},{title: 'madiha', edit: false}],
            value:''
        }
    }
    add_todo =()=>{
        let obj = {title: this.state.value}
       
        this.setState({
            todos: [...this.state.todos,obj],
            value: ''
        })
    }
    delete_todo=(index)=>{
     this.state.todos.splice(index,1)
     this.setState({
         todos: this.state.todos
     })
    }
    edit_todo = ()=>{
        var updated_value = prompt('enter value');
        this.state.todos.index= updated_value
    }
    render(){
        let {todos, value}= this.state;
        return(
            <div>
                <input value={value} onChange={(e)=> this.setState({value: e.target.value})} type="text" placeholder="enter value" />
                <button onClick={this.add_todo}>Add Item</button>
                <ul>
                    {this.state.todos.map((v,i)=>{
                        return <li key={i}>{v.edit ? <input type="text" /> :v.title}
                        <button onClick={() => this.delete_todo(i)}>Edit</button>
                        <button onClick={() => this.delete_todo(i)}>delete</button>
                        </li>
                    }
                    )}
                </ul>
            </div>
        )
    }
}
export default Todos;