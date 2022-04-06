import React from 'react'

function TodoItem(props) {
    return (
        <div className="list_style">
           <li>{props.text}<i class="far fa-trash-alt" aria-hidden="true" onClick={() => props.onSelect(props.id)}></i></li>
        </div>
    )
}

export default TodoItem