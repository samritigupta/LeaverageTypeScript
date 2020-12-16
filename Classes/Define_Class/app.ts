
class TodoService {
    
   //todos;  // defining and assigning in constructor instead can define in one expression like below.
    constructor(private todos: Todo[]) {
    }
    
    getAll() {
        return this.todos;
    }
}

interface Todo {
    name: string;
    state: TodoState;
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}