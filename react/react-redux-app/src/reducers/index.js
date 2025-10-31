import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    /* sub counter reducer*/
    counter: counter,
    /* sub todos reducer */
    todos: todos
})

export default rootReducer