import {FC} from 'react';
import useDropdown from 'react-dropdown-hook';
import styled from 'styled-components';
import {ExpandedMenu} from './ExpandedMenu';
import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import {TopBarSides} from '../../styledHelpers/Components';
import { TextField, InputAdornment } from "@material-ui/core";
import {Link} from 'react-router-dom';
import { SearchInput } from '../common/SearchInput';

const Wrapper2 = styled(Wrapper)`
    position: fixed;
    width: 100%;
    height: 9vh;
    top: 0;
    z-index: 2;
`;

const InnerWrapper = styled.div`
    width: 100%;
    background: ${Colors.white};
    text-align: center;
    border-radius: 3px;
    box-shadow: 2px 2px 1px grey;
`;
const LeftSide = styled(TopBarSides)`
    float: left;
    width: 33%;
    text-align: left;
`;

const RightSide = styled(TopBarSides)`
    float: right;
    text-align: right;
    width: 33%;
`;

const InputWrapper = styled(TopBarSides)`
    float: center;
    width: 33%;
`;

const CustomImg = styled.img`
    padding: 2%;
`;
const CustomLogo = styled.img`
    width: 2rem;
    height: 2rem;
    text-align: left;
`;
const SearchIcon = styled.img``;
// const MenuWrapper = styled.div`
//     display: inline; 
//     height: 100%;
// `;
// const MenuLeft = styled.div`
//     display: inline; 
//     height: 100%;
//     margin-left: 20%;
// `;
// const ExpandedLeftSide = styled.div`
//     display: inline;
//     margin-left: 28%;
// `;
const TextField2 = styled(TextField)`
  
`;



export const TopBar: FC = () => {
    // const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

    // const menuHandler = () => {
    //     toggleDropdown();
    // };
    return (
        <Wrapper2>
            <InnerWrapper>
                <LeftSide>
                    <Link to='/'><CustomLogo src="./media/logo.png" alt=""/></Link>

                    {/* <MenuWrapper ref={wrapperRef}>
                    <MenuLeft onClick={menuHandler}>
                        <img src="./media/icons/house2.png" alt="" />
                        <span>Home</span>
                    <ExpandedLeftSide>
                        <img className="arrow-icon" src="media/icons/arrow-down.png" alt="arrow down"/>
                    </ExpandedLeftSide>
                    </MenuLeft>
                    {dropdownOpen && */}
                        <ExpandedMenu />
                    {/* }
                    </MenuWrapper> */}
                </LeftSide>
                    <InputWrapper>
                        <SearchInput />
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