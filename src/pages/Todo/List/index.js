import { Box, Divider, Heading, Text } from 'gestalt';
import React from 'react';
import { useSelector } from 'react-redux';
import noteImg from '../../../assets/note_list.svg';

const List = () => {

    const data = useSelector(state => state.todo);

    const listTodo = () => {
        return data.todo.map(value => (
            <>
                <Box padding={2}>
                    <Text>{value}</Text>
                </Box>
                <Divider />
            </>
        ))
    }

    const emptyNote = () => {
        return ( 
            <Box display="flex" justifyContent="evenly" alignItems="center">
                <img src={noteImg} alt='' width="500px" height="500px" />
                <Heading size="md">It's a little bit quite here...
                    <span role="img" aria-label="sleep"> 😴️💤️</span>
                </Heading>
            </Box>
        )
    }

    return(
        <Box color="white">
            {/* <Box margin={2} display="flex" justifyContent="start" marginTop={4}>
                <Heading size="lg">Tasks</Heading>
            </Box> */}
            {data.todo.length ? listTodo() : emptyNote() }
        </Box>
    );
}

export default List;