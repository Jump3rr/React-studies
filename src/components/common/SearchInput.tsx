import {FC} from 'react';
import styled from 'styled-components';
import { TextField, InputAdornment } from "@material-ui/core";

const SearchIcon = styled.img``;

export const SearchInput: FC = () => {

    return (
                <TextField
                id="standard-bare"
                placeholder="Search"
                margin="normal"
                InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon src="../../media/icons/search.png" alt="" title=""/>
                    </InputAdornment>
                )
                }}
                />
    )
}