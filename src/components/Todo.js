import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../actions/index'
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BackspaceIcon from '@material-ui/icons/Backspace';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { ButtonGroup, Button } from "@material-ui/core"


function Todo() {
    const [state, setstate] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return (
        <>
            <div class="bg-blue-500 p-5 text-center">Add Item</div>
            <div className="row text-center  ">
                <div className="m-5">
                    <TextField
                        label="add items..."
                        value={state}
                        color="secondary"
                        variant="outlined"
                        size="small"
                        onChange={(event) => setstate(event.target.value)}
                    />
                    <AddCircleOutlineIcon
                        color="secondary"
                        onClick={() => { dispatch(addTodo(state), setstate('')) }}
                    />
                </div>
            </div>
            <div class=" text-center">
                {
                    list.map((ele) => {
                        return (
                            <div className="mt-3 " key={ele.id}>
                                <Button
                                    variant="outlined"
                                    endIcon={<BackspaceIcon
                                        title="delete items"
                                        onClick={() => { dispatch(deleteTodo(ele.id)) }}
                                    />}
                                >{ele.data}
                                </Button>
                            </div>
                        )
                    })
                }
                <div className="text-center  ">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => { dispatch(removeTodo()) }}
                        endIcon={<ClearAllIcon />}
                    >All CLear
                    </Button>
                </div>
            </div>

        </>
    )
}

export default Todo;