import { Box, Button, Column, Heading, TextField } from 'gestalt';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import listNoteImg from '../../assets/note_list_start.svg';
import { next } from '../../store/actions';

const FirstAccess = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const handleChange = ({ event }) => {
        setValue(event.target.value);
    };

    const handleNext = () => {
        const user = {
            firstAccess: false,
            name: value
          }
        dispatch(next(user));
    };

    return (
        <>
            <Box display="flex" justifyContent="evenly" alignItems="center">
                <Column span={6}>
                <Box>
                    <Box height={100} />
                    <img src={listNoteImg} alt='' width="70%" height="70%" />
                </Box>
                </Column>
                <Column span={4}>
                    <Box>
                        <Heading size="md">
                            What's your name?
                        </Heading>
                        <Box marginTop={2}>
                            <TextField
                                id="username"
                                helperText="John Wick"
                                onChange={handleChange}
                                value={value}
                            />
                        </Box>
                        <Box marginTop={2}>
                            <Button color="red" disabled={!value} text="Next" onClick={() => handleNext()} />
                        </Box>
                    </Box>
                </Column>
            </Box>
        </>
    )

}

export default FirstAccess;