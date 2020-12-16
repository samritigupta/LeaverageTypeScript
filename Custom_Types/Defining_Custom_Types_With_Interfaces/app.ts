
// nothing for interface in .js because There is no Interfaces in Javascript,
interface Todo {
    name: string;
    completed?: boolean;
}

// Define what we are expecting from AJAX calls to return.
interface ITodoService {
    add(todo: Todo): Todo;
    delete(todo: Todo): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}

var todo: Todo = {
    name: "Pick up drycleaning"
};