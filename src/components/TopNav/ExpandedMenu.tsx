import { FC } from "react";
import styled from 'styled-components';
import useDropdown from "react-dropdown-hook";
import {ISectionsItems} from './DropDownItems';
import {IDDItems} from './DropDownItems';
import {ITEMS} from './DropDownItems';
import {Colors} from '../../styledHelpers/Colors';

const InnerWrapper = styled.div`
    width: 15%;
    height: 80%;
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
`;

const ExpandedMenuItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 10px;

  &:hover, &:focus, &:visited, &:active {
    cursor: pointer;
    border-style: outset;
    border-radius: 5%;
    border-width: 1px;
  }
`;
const ExpandedMenuIcons = styled.div`
    width: 30px;
    margin-right: 10px;
    display: inline-block;
`;
const DropdownSearch = styled.input`
    width: 80%;
    border-radius: 15px;
    border-width: 1px;
`;

interface IDDItemsProps {
    item: IDDItems,
    index: number,
}
interface IDDSectionsItemsProps {
    itemsGroup: ISectionsItems,
    index: number,
}


const DropdownMenuSectionItems: FC<IDDSectionsItemsProps> = props => {
    const itemGroup = props.itemsGroup;
    return (
        <Lista key={props.index}>
                <SectionTitleItems>{itemGroup.title}</SectionTitleItems>
                
            {itemGroup.items.map(
                (item: IDDItems, index: number) => {
                    return (
                        <DropdownMenuItem index={index} item={item}/>
                    );
                }
            )}
        </Lista>
    );
}
const DropdownMenuItem: FC<IDDItemsProps> = props => {
    const item = props.item;

    return (
        <ExpandedMenuItemsWrapper key={props.index}>
                <span><ExpandedMenuIcons><img src={item.icon} alt=""></img></ExpandedMenuIcons>{item.title}</span>
        </ExpandedMenuItemsWrapper>
    );
}

export const ExpandedMenu: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
	return (
        <InnerWrapper>
            <DropdownSearch type="input" placeholder="Filter..." />
                {ITEMS.map(
                    (itemsGroup: ISectionsItems, index: number) => {
                    return (
                        <DropdownMenuSectionItems itemsGroup={itemsGroup} index={index}/>
                        );
                    }
                )}
                <div id="abc" onClick={closeDropdown}>
                <img className="icon" src="media/icons/logout.png" alt="logout"/>
                <span>Logout</span>
                </div>
        </InnerWrapper>
	)
}