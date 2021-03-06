import { FC } from "react";
import styled from "styled-components";
import { ExpandedMenu } from "./ExpandedMenu";
import { Wrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
import { TopBarSides } from "../../styledHelpers/Components";
import { Link } from "react-router-dom";
import { SearchInput } from "../common/SearchInput";

const Wrapper2 = styled(Wrapper)`
  position: fixed;
  width: 100%;
  height: 9vh;
  top: 0;
  z-index: 2;
`;
const Notification = styled.div`
  height: 20px;
  position: relative;
  display: inline-flex;
  width: 20px;
  background-color: ${Colors.blue};
  border-radius: 50%;
  color: ${Colors.white};
  left: -15px;
  justify-content: center;
  text-decoration: none;
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

export const TopBar: FC = () => {
  return (
    <Wrapper2>
      <InnerWrapper>
        <LeftSide>
          <Link to="/">
            <CustomLogo src="./media/logo.png" alt="" />
          </Link>
          <ExpandedMenu />
        </LeftSide>
        <InputWrapper>
          <SearchInput />
        </InputWrapper>
        <RightSide>
          <Link to="/">
            <CustomImg src="./media/icons/house.png" />
          </Link>
          <Link to="/test">
            <CustomImg src="../../media/icons/comments.png" />
            <Notification>2</Notification>
          </Link>
          <Link to="/test">
            <CustomImg src="../../media/icons/bell.png" />
            <Notification>3</Notification>
          </Link>
        </RightSide>
      </InnerWrapper>
    </Wrapper2>
  );
};
