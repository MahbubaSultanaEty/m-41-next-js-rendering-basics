import React from 'react';

const TodosPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    console.log(todos);
    return (
        <div>
            <h2 className="text-xl font-bold">Todos Page</h2>
            {
                todos.map(todo => <h2 key={todo.id}>{ todo.title}</h2>)
            }
        </div>
    );
};

export default TodosPage;