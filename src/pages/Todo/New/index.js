import { Box, Button, TextField } from 'gestalt';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newTodo } from '../../../store/actions';



const New = () => {
    const [todo, setTodo] = useState('');

    const dispatch = useDispatch();

    const handleChange = ({ event }) => {
        setTodo(event.target.value)
    };

    const handleAdd = () => {
        dispatch(newTodo(todo));
        setTodo('');
    }

    return(
        <>
        <Box padding={2} margin={2} marginTop={4} display="flex">
            <TextField
                id="todo"
                onChange={handleChange}
                label="What do you have to do?"
                value={todo}
            />
            <Box padding={2} marginTop={3}>
                <Button color="red" text="Add" onClick={() => handleAdd()} inline />
            </Box>
        </Box>
        </>
    )
}

export default New