import { FC, useState, ChangeEvent } from "react";
import styled from 'styled-components';
import useDropdown from "react-dropdown-hook";

import {ITEMS} from './DropDownItems';
import {Colors} from '../../styledHelpers/Colors';
import {Link} from 'react-router-dom';

const InnerWrapper = styled.div`
    width: 15%;
    height: auto;
    padding-bottom: 20px;
    background: ${Colors.white};
    text-align: center;
    border-radius: 3px;
    box-shadow: 2px 2px 1px grey;
    position: fixed;
    margin-left: 8%;
`;

const Lista = styled.div `
    color: ${Colors.black};
    text-align: left;
    font-size: 14px;
    margin-left: 10px;
    margin-top: 10px;
`;
const SectionTitleItems = styled.div `
    color: ${Colors.grey};
    font-weight: bold;
    margin-top: 10px;
`;

const ExpandedMenuItemsWrapper = styled.div`
  align-items: center;
  margin: 10px 0 0 10px;
  text-decoration: none;
  color: ${Colors.dark};
  display: flex;

  &:hover, &:focus, &:visited, &:active, &:link {
    background-color: ${Colors.lightgrey};
    cursor: pointer;
    border-style: outset;
    border-radius: 5%;
    border-width: 1px;
  }
`;
const Icons = styled.div`
    width: 40px;
`;

const LogoutBtn = styled.div`
    margin-top: 10px;

    &:hover, &:focus, &:visited, &:active {
    cursor: pointer;
    border-style: outset;
    border-radius: 5%;
    border-width: 1px;
  }
`;
const MenuWrapper = styled.div`
    display: inline; 
    height: 100%;
`;
const MenuLeft = styled.div`
    display: inline; 
    height: 100%;
    margin-left: 20%;
`;
const ExpandedLeftSide = styled.div`
    display: inline;
    margin-left: 28%;
`;

export const ExpandedMenu: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    };

     const [InputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
        const [selectedImg, setImg] = useState('./media/icons/house2.png');
        const [selectedSpan, setSpan] = useState('Home');
        const handleClick = (source: string, title: string) => {
            setImg(source);
            setSpan(title);
        }

	return (
        <MenuWrapper ref={wrapperRef}>
        <MenuLeft onClick={menuHandler}>
            <img src={selectedImg} alt="" />
            {selectedSpan}
        <ExpandedLeftSide>
            <img className="arrow-icon" src="media/icons/arrow-down.png" alt="arrow down"/>
        </ExpandedLeftSide>
        </MenuLeft>
        {dropdownOpen &&
            <InnerWrapper>
                <input type="text" value={InputText} onChange={inputHandler}/>
                <Lista>
                {ITEMS.map(element => {
                    return([
                    <SectionTitleItems>{element.title}</SectionTitleItems>,
                    element.items.map(itemElement => {
                        return (
                        itemElement.title.toLowerCase().includes(InputText.toLowerCase()) &&
                        <Link to={itemElement.url} style={{ textDecoration: 'none' }}><ExpandedMenuItemsWrapper onClick={() => handleClick(itemElement.icon, itemElement.title)}><Icons><img src={itemElement.icon} alt=''></img></Icons>{itemElement.title}</ExpandedMenuItemsWrapper></Link>
                        )

                    })])
                })}
                </Lista>
                    
                    <LogoutBtn onClick={closeDropdown}>
                    <img className="icon" src="media/icons/logout.png" alt="logout"/>
                    <span>Logout</span>
                    </LogoutBtn>
            </InnerWrapper>
                            }
            </MenuWrapper>
	)
}