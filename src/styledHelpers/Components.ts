import styled from 'styled-components';
import {Colors} from './Colors';

export const Wrapper = styled.div`
    background: ${Colors.background};
    display: flex;
    padding: 5px;
    overflow: hidden;
`;
export const PageElements = styled.div`
    background: ${Colors.white};
    display: block;
    overflow: hidden;
    padding: 5px;
    width: 95%;
    margin-left: 2%;
    border-radius: 10px;
    text-align: center;
    order: 0;
    z-index: 1;
`;

export const TopBarSides = styled.div`
    padding: 10px;
    display: inline; 
`;

export const ProfileElements = styled.div`
    margin-left: 5%;
    width: 90%;
    background: ${Colors.white};
    display: inherit;
    float: center;
    border-radius: 3px;
    box-shadow: 2px 2px 1px grey;
`;
export const Icon = styled.img`
    margin-right: 15px;
    margin-bottom: -3px;
`;

export const OnePost = styled.div`
  width: 100%;
  height: 20%;
  background: ${Colors.white};
  border-radius: 10px;
  text-align: left;
  box-shadow: 1px 1px ${Colors.dark};
`;

export const PostsHolder = styled.div`
  display: inline-block;
  width: 96%;
`;

export const TopElements = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectStyled = styled.select`
    color: ${Colors.blue};
    background-image: url('../media/icons/followed.png');
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: 8%;
    padding: 5px 0px 5px 25px;
    border-style: none;
    background-color: ${Colors.background};
    margin: 22px 20px 0 0%;
`;
