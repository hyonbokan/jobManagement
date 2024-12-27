import React from "react";
import { AppBar, Toolbar, Typography, Button, Box} from '@mui/material';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Logo
                </Typography>
                <Box>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                    >
                        Feature 1
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                    >
                        Feature 2
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;