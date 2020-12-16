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

class TodoStateChanger {    // base class
    
    constructor(private newState: TodoState) {
    }
    
    // it is really a shorthand way to convert any value to a boolean.
    /*
    There are 6 things that evaluate to false:
    - undefined
    - null
    - NaN
    - 0
    - "" (empty string)
    - false
    */
    canChangeState(todo: Todo): boolean {
        return !!todo;
    }
    
    changeState(todo: Todo): Todo {
        if(this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        
        return todo;
    }
    
}

class CompleteTodoStateChanger extends TodoStateChanger {

    constructor() {
        super(TodoState.Complete);
    }
    
    canChangeState(todo: Todo): boolean {  // overriding method
        return super.canChangeState(todo) && (
              todo.state == TodoState.Active
           || todo.state == TodoState.Deleted
        )
    }
    
}
