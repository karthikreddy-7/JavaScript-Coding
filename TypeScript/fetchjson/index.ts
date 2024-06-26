import axios from 'axios';

const url="https://jsonplaceholder.typicode.com/todos/1";

interface Todo{
    id: number;
    title:string;
    status:boolean;
}

axios.get(url).then(response =>{

    const todo=response.data as Todo;
    const id=todo.id;
    const title=todo.title;
    const status=todo.status;
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it Finished: ${status}
    `);
})