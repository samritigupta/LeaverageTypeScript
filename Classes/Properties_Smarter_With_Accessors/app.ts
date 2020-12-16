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

/*
It’s accessor properties. They are essentially functions that execute on getting and setting a value, 
but look like regular properties to an external code.

Called like normal todo.state.

Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.
*/
class SmartTodo {
    
    _state: TodoState;
    
    name: string;
    
    get state() {
        return this._state;
    }
    
    set state(newState) {
        
        if(newState == TodoState.Complete) {
            
            var canBeCompleted = 
                this.state == TodoState.Active
                || this.state == TodoState.Deleted;
                
            if(!canBeCompleted) {
                throw "Todo must be Active or Deleted in order to be marked Completed"
            }
        }
        
        this._state = newState;
    }
    
    constructor(name: string) {
        this.name = name;
    }
}

var todo = new SmartTodo("Pick up drycleaning");

todo.state = TodoState.Complete;

todo.state