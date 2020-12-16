class TodoService {

    static lastId: number = 0;

    constructor(private todos: Todo[]) {
    }

    add(todo: Todo) {
        var newId = TodoService.getNextId();
    }

    getAll() {
        return this.todos;
    }

    /*
    We can also assign a method to the class function itself, not to its "prototype". 
    Such methods are called static.

    In a class, they are prepended by static keyword.
    static methods are used to implement functions that belong to the class, but not to any particular object of it.
    */
    static getNextId() {
        return TodoService.lastId += 1;
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

var todo = {
    name: "Pick up drycleaning",
    state: TodoState.Complete
}