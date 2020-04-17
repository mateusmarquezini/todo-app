import { Box, Heading } from 'gestalt';
import React from 'react';
import List from './List';
import New from './New';

const Todo = () => {
    return (
        <>
            <Box display="flex" justifyContent="evenly" alignItems="center">
                <Heading size="lg"> Welcome, Mateus!
                    <span role="img" aria-label="sleep"> 🎉️</span>
                </Heading>
                <New />
            </Box>
            <List />
        </>
    );
}

export default Todo;