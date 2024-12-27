import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
    return (
        <TextField 
            placeholder="Search applications..."
            variant="outlined"
            fullWidth
            onChange={(e) => onSearch(e.target.value)}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                },
            }}
            sx={{ mb: 3 }}
        />
    );
};

export default SearchBar;

