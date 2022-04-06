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
    
    return (){
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Add your task"/>
            <button className="newBtn">Add Task</button>

            {
              items.map((todo,index) => (
                <TodoItem key={index} todo={todo} />
              ))
            }
          </div>
        );
      }
    }
  }

export default TodoMain