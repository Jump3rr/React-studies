import {FC} from 'React';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import { TextField, InputAdornment } from "@material-ui/core";

const Wrapper2 = styled(Wrapper)`
    background-color: #f2f2f2;
`;

const InnerWrapper = styled.div`
    width: 100%;
    background: ${Colors.white};
    text-align: center;
    border-radius: 3px;
    box-shadow: 2px 2px 1px grey;
`;
const LeftSide = styled.div`
    float: left;
    display: inline; 
    padding: 10px;
`;

const RightSide = styled.div`
    padding: 10px;
    float: right;
    display: inline; 
`;

const InputWrapper = styled.div`
    display: inline; 
`;
const CustomImg = styled.img`
    padding: 10px;
`;
const CustomLogo = styled.img`
    width: 2rem;
    height: 2rem;
    text-align: left;
`;
const SearchIcon = styled.img`
`;


export const TopBar: FC = () => {
    return (
        <Wrapper2>
            <InnerWrapper>
                <LeftSide>
                    <CustomLogo src="./media/logo.png" alt=""/>
                    <CustomImg src="./media/icons/house2.png" />
                </LeftSide>
                    <InputWrapper>
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
                    </InputWrapper>
                <RightSide>
                    <CustomImg src="./media/icons/house.png" />
                    <CustomImg src="../../media/icons/comments.png" />
                    <CustomImg src="../../media/icons/bell.png" />
                </RightSide>
            </InnerWrapper>

        </Wrapper2>
    )
}