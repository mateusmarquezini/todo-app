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

    const handleMarkAsDone = (value) => {
        const { id } = value;
        if(!value.checked) {
            play();
        } 
        dispatch(markAsDone(id));
    };
    
    const markAsDoneSoundElement = () => {
        return (
            <audio id="doneSound">
                <source src={pluckyOgg} type="audio/ogg" />
                <source src={pluckyMp3} type="audio/mpeg"/>
            </audio>
        )
    }

    const list = () => {
        return (
            <>
            {markAsDoneSoundElement()}
            <Box marginLeft={12}>
                <Heading size="md">Tasks</Heading>
            </Box>
            {data.todo.map(value => (
                <>
                    <Box key={value.id} padding={2} marginLeft={12} display="flex" alignItems="center">
                        <Box>
                            <Checkbox
                                checked={value.checked}
                                id="todoCheck"
                                name="checkbox"
                                onChange={() => handleMarkAsDone(value)}
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
                <img src={noteImg} alt='' width="30%" height="30%" />
                <Heading size="md">It's a little bit quite here...
                    <span role="img" aria-label="sleep"> 😴️💤️</span>
                </Heading>
            </Box>
        )
    }

    return(
        <Box color="white">
            {data.todo.length ? list() : empty() }
        </Box>
    );
}

export default List;