import { Box, Heading, Icon } from 'gestalt';
import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <Box alignItems="center" marginLeft={4} display="flex">
                    <Box marginRight={1} padding={1}>
                        <Icon icon="edit" size={22} accessibilityLabel="Edit" color="darkGray" />
                    </Box>
                    <Heading size="md">
                    Todo
                    </Heading>
                </Box>
            </ul>
        </nav>
    )
}

export default Navbar