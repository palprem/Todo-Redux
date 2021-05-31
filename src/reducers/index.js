import { combineReducers } from 'redux';
import todoReducers from './todoReduce';

const rootRedecer = combineReducers({
    todoReducers
})

export default rootRedecer;