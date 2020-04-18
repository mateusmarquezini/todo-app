import { Box, Checkbox, Divider, Heading, Text } from 'gestalt';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteImg from '../../../assets/note_list.svg';
import pluckyMp3 from '../../../assets/sounds/plucky.mp3';
import pluckyOgg from '../../../assets/sounds/plucky.ogg';
import { markAsDone } from '../../../store/actions';

const List = () => {

    const data = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const play = () => document.getElementById('doneSound').play();

    const handleMarkAsDone = (id) => {
        dispatch(markAsDone(id));
        play();
    };
    
    const markAsDoneSoundElement = () => {
        return (
            <audio id="doneSound">
                <source src={pluckyOgg} type="audio/ogg" />
                <source src={pluckyMp3} type="audio/mpeg"/>
            </audio>
        )
    }

    const listTodo = () => {
        return (
            <>
            {markAsDoneSoundElement()}
            <Heading size="md">Tasks</Heading>
            {data.todo.map(value => (
                <>
                    <Box key={value.id} padding={2} display="flex" alignItems="center">
                        <Box>
                            <Checkbox
                                checked={value.checked}
                                id="todoCheck"
                                name="checkbox"
                                onChange={() => handleMarkAsDone(value.id)}
                            />
                        </Box>
                        <Box marginLeft={4}>
                            {value.checked ? 
                            (
                                <strike style={{ fontStyle: 'italic' }}>
                                    <Text>{value.value}</Text>
                                </strike>
                            ) : (
                                <Text>{value.value}</Text>
                            )}
                        </Box>
                    </Box>
                    <Divider />
                </>
            ))}
            </>
        )
    }

    const empty = () => {
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
            {data.todo.length ? listTodo() : empty() }
        </Box>
    );
}

export default List;