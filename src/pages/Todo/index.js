import { Box, Heading } from 'gestalt';
import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';
import New from './New';

const Todo = () => {

    const data = useSelector(state => state.todo);

    return (
        <>
            <Box display="flex" justifyContent="evenly" alignItems="center">
                <Heading size="lg"> Welcome, {data.user.name}!
                    <span role="img" aria-label="sleep"> 🎉️</span>
                </Heading>
                <New />
            </Box>
            <List />
        </>
    );
}

export default Todo;