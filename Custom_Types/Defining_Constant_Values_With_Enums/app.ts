enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

interface Todo {
    name: string;
    state: TodoState;
}

var todo: Todo = {
    name: "Pick up drycleaning",
    state: TodoState.New
}



function deleteSomething(todo: Todo) {
    if(todo.state != TodoState.Complete) {
        throw "Can't delete incomplete task!"
    }
}