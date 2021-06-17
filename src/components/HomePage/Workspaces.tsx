import { FC } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper2 = styled(PageElements)`
    height: 25vh;
    background-color: none;
    margin: 0 27px;
`;
const OneContract = styled.div`
    width: 10px;
    height: 25vh;
    margin: 0 -27px;
`;
const TopImg = styled.img`
    width: 100%;
    height: 40%;
    z-index: -1;
`;
const IconImg = styled.img`
    width: 25%;
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
    var settings = {
        dots: true,
        slidesToShow: 4
      };

    return (
            <div>
            <h2 style={{textAlign: "left", marginLeft: "2vw"}}>Workspaces</h2>
            <Wrapper2>
                <Slider {...settings}>
                    <OneContract>
                        <TopImg src="./media/photos/contract.jpg" alt=""></TopImg>
                        <IconImg src="./media/photos/iconContract.png"></IconImg>
                        <Title>Client contract</Title>
                        <Description>
                            <DescIcons src="./media/photos/iconContract.png"></DescIcons>
                            Contract &nbsp;&nbsp;|    
                            <DescIcons src="./media/icons/people.png"></DescIcons>
                            55 Users
                        </Description>
                        <Description style={{fontSize:"11px", marginLeft: "5%"}}>Last Update 2 days ago</Description>
                    </OneContract>
                    <OneContract>
                        <TopImg src="./media/photos/contract.jpg" alt=""></TopImg>
                        <IconImg src="./media/photos/iconContract.png"></IconImg>
                        <Title>Supplier contract</Title>
                        <Description>
                            <DescIcons src="./media/photos/iconContract.png"></DescIcons>
                            Contract &nbsp;&nbsp;|    
                            <DescIcons src="./media/icons/people.png"></DescIcons>
                            25 Users
                        </Description>
                        <Description style={{fontSize:"11px", marginLeft: "5%"}}>Last Update 2 days ago</Description>
                    </OneContract>
                    <OneContract>
                        <TopImg src="./media/photos/contract.jpg" alt=""></TopImg>
                        <IconImg src="./media/photos/iconContract.png"></IconImg>
                        <Title>Corporate</Title>
                        <Description>
                            <DescIcons src="./media/photos/iconContract.png"></DescIcons>
                            Contract &nbsp;&nbsp;|    
                            <DescIcons src="./media/icons/people.png"></DescIcons>
                            85 Users
                        </Description>
                        <Description style={{fontSize:"11px", marginLeft: "5%"}}>Last Update 3 days ago</Description>
                    </OneContract>
                    <OneContract>
                        <TopImg src="./media/photos/contract.jpg" alt=""></TopImg>
                        <IconImg src="./media/photos/iconContract.png"></IconImg>
                        <Title>Group Norms</Title>
                        <Description>
                            <DescIcons src="./media/photos/iconContract.png"></DescIcons>
                            Contract &nbsp;&nbsp;|    
                            <DescIcons src="./media/icons/people.png"></DescIcons>
                            150 Users
                        </Description>
                        <Description style={{fontSize:"11px", marginLeft: "5%"}}>Last Update 3 days ago</Description>
                    </OneContract>
                    <OneContract>
                        <TopImg src="./media/photos/contract.jpg" alt=""></TopImg>
                        <IconImg src="./media/photos/iconContract.png"></IconImg>
                        <Title>Real estate contracts</Title>
                        <Description>
                            <DescIcons src="./media/photos/iconContract.png"></DescIcons>
                            Contract &nbsp;&nbsp;|    
                            <DescIcons src="./media/icons/people.png"></DescIcons>
                            35 Users
                        </Description>
                        <Description style={{fontSize:"11px", marginLeft: "5%"}}>Last Update 4 days ago</Description>
                    </OneContract>
                </Slider>
                
            </Wrapper2>
            </div>
    );
};