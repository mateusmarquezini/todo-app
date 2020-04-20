import { Box, Button, TextField } from 'gestalt';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as uuid from 'uuid/v1';
import { newTodo } from '../../../store/actions';



const New = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const handleChange = ({ event }) => {
        setValue(event.target.value);
    };

    const handleAdd = () => {
        const todo = { 
            id: uuid(),
            value,
            checked: false
        }
        dispatch(newTodo(todo));
        setValue('');
    }

    return(
        <>
        <Box padding={2} margin={2} marginTop={4} display="flex">
            <TextField
                id="todo"
                onChange={handleChange}
                label="What do you have to do?"
                value={value}
            />
            <Box padding={2} marginTop={3}>
                <Button color="red" disabled={!value} text="Add" onClick={() => handleAdd()} inline />
            </Box>
        </Box>
        </>
    )
}

export default New