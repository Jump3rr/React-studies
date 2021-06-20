import { FC } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PageElements } from "../../styledHelpers/Components";
import { WorkspaceItems } from "../common/OneWorkspaceElement";
import * as actionTypes from "../../actions/actionTypes/workspaceTypes";
import { IWorkspace } from "../../entities/workspace";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Wrapper2 = styled(PageElements)`
  height: 28vh;
  background-color: none;
  margin: 0 27px;
`;
const OneContract = styled.div`
  width: 10px;
  height: 25vh;
  margin: 0 -27px;
  cursor: pointer;
`;
const TopImg = styled.img`
  width: 100%;
  height: 40%;
  z-index: -1;
`;
const IconImg = styled.img`
  width: 3vw;
  position: relative;
  height: auto;
  margin-left: 5%;
  background: white;
  border-style: solid;
  border-width: 2px;
  margin-top: -10%;
  float: left;
`;
const Title = styled.span`
  font-size: 20px;
`;
const Description = styled.div`
  float: left;
  width: 100%;
  text-align: left;
  margin: 1%;
  display: flex;
`;
const DescIcons = styled.img`
  width: 7%;
  height: auto;
  margin: 0 5% 0 5%;
`;

export const Workspaces: FC = () => {
  const dispatch = useDispatch();

  const setNewWorkspace = (workspace: IWorkspace) => {
    return dispatch({
      type: actionTypes.SET_WORKSPACE,
      workspace,
    });
  };

  var settings = {
    dots: true,
    slidesToShow: 4,
    infinite: true,
  };

  return (
    <div>
      <h2 style={{ textAlign: "left", marginLeft: "2vw" }}>Workspaces</h2>
      <Wrapper2>
        <Slider {...settings}>
          {WorkspaceItems.map((el) => {
            return (
              <OneContract key={el.title} onClick={() => setNewWorkspace(el)}>
                <TopImg src={el.mainImg} alt=""></TopImg>
                <Link to="/workspaces" style={{ textDecoration: "none" }}>
                  <IconImg src={el.icon}></IconImg>
                  <Title>{el.title}</Title>
                  <Description>
                    <DescIcons src={el.descFirstIcon}></DescIcons>
                    {el.descType}
                    <DescIcons src={el.descSecondIcon}></DescIcons>
                    {el.descUsers}
                  </Description>
                  <Description style={{ fontSize: "11px", marginLeft: "5%" }}>
                    {el.updated}
                  </Description>
                </Link>
              </OneContract>
            );
          })}
        </Slider>
      </Wrapper2>
    </div>
  );
};
