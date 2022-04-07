import React from 'react'
import TodoItem from './TodoItem'


// session 

class TodoMain extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
    componentDidMount() {
      fetch("https://my-json-server.typicode.com/NavnathGunjal07/todo-list-react/db")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
         //handling errors in components || in fetch
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
     
    render (){
      const { items,error, isLoaded } = this.state;
      const addTask = () => {
       
        console.log("Dummy Add task method")
    }
      const deleteItem = (id) => {
        console.log('deleted id: ', id);
        console.log("Dummy delete task method")
       }
    const editItem = (id) => {
       console.log('edit id: ', id);
       console.log("Dummy edit task method");
     }
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      }else{
        return (
          <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Add your task"/>
            <button className="newBtn" onClick={addTask}>Add Task</button>
           {console.log(items)}
           <ul>
            {
              items.map((todo) => {
                return <TodoItem  todo={todo.task} key={todo.id} id={todo.id} onSelectdelete={deleteItem} onSelectedit={editItem}/>
              })
            }
            </ul>
          </div>
        );
      }
    }
  }

export default TodoMain