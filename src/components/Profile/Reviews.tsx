import { FC, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const About = styled.div`
    margin-top: 20px;
    width: 100%;
    height: auto;
    text-align: left;
    margin-left: 50px;
`;

const ReviewsContainer = styled.div`
    margin-top: 20px;
    width: 72%;
    height: auto;
    text-align: left;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.span`
  font-weight: bold;
`;
const OneColumn = styled.div`
    width: 15%;
    input {
        width: 90%;
    }
`;
const MoreLink = styled.div`
    margin: 10px 0 10px 0;
    width: 90%;
    
`;

interface IProps {
    isInEditMode?: Boolean;
}

export const Reviews: FC<IProps> = (props) => {
    const [info, setInfo] = useState({
        name1: 'Operations',
        entity1: 'Renault',
        location1: 'France',
        expertise1: '#Tax',
        date1: '20-01-2018',
        name2: 'Op. Prometh',
        entity2: 'Renault',
        location2: 'USA',
        expertise2: '#M&A',
        date2: '18-02-2019', 
        name3: 'Op. Latandre',
        entity3: 'Renault',
        location3: 'Italia',
        expertise3: '#Social',
        date3: '18-02-2019',

    })

    return (
        <About>
            <span style={{fontWeight: 'bold'}}>Internal reviews</span>
            <ReviewsContainer> 
                <OneColumn>
                    <Title>Name</Title>
                    {!props.isInEditMode ?
                    <div>
                        <div>{info.name1}</div>
                        <div>{info.name2}</div>
                        <div>{info.name3}</div>
                    </div> :
                    <div>
                        <div><input type="text" value={info.name1} onChange={e => setInfo({...info, name1: e.target.value})} /></div>
                        <div><input type="text" value={info.name2} onChange={e => setInfo({...info, name2: e.target.value})} /></div>
                        <div><input type="text" value={info.name3} onChange={e => setInfo({...info, name3: e.target.value})} /></div>
                    </div>
                    }
                </OneColumn>
                <OneColumn>
                    <Title>Entity</Title>
                    {!props.isInEditMode ?
                    <div>
                    <div>{info.entity1}</div>
                    <div>{info.entity2}</div>
                    <div>{info.entity3}</div>
                    </div> :
                    <div>
                        <div><input type="text" value={info.entity1} onChange={e => setInfo({...info, entity1: e.target.value})} /></div>
                        <div><input type="text" value={info.entity2} onChange={e => setInfo({...info, entity2: e.target.value})} /></div>
                        <div><input type="text" value={info.entity3} onChange={e => setInfo({...info, entity3: e.target.value})} /></div>
                    </div>
                    }
                </OneColumn>
                <OneColumn>
                    <Title>Location</Title>
                    {!props.isInEditMode ?
                    <div>
                    <div>{info.location1}</div>
                    <div>{info.location2}</div>
                    <div>{info.location3}</div>
                    </div> :
                    <div>
                        <div><input type="text" value={info.location1} onChange={e => setInfo({...info, location1: e.target.value})} /></div>
                        <div><input type="text" value={info.location2} onChange={e => setInfo({...info, location2: e.target.value})} /></div>
                        <div><input type="text" value={info.location3} onChange={e => setInfo({...info, location3: e.target.value})} /></div>
                    </div>
                    }
                </OneColumn>
                <OneColumn>
                    <Title>Expertise</Title>
                    {!props.isInEditMode ?
                    <div>
                    <div>{info.expertise1}</div>
                    <div>{info.expertise2}</div>
                    <div>{info.expertise3}</div>
                    </div> :
                    <div>
                        <div><input type="text" value={info.expertise1} onChange={e => setInfo({...info, expertise1: e.target.value})} /></div>
                        <div><input type="text" value={info.expertise2} onChange={e => setInfo({...info, expertise2: e.target.value})} /></div>
                        <div><input type="text" value={info.expertise3} onChange={e => setInfo({...info, expertise3: e.target.value})} /></div>
                    </div>
                    }
                </OneColumn>
                <OneColumn>
                    <Title>Date</Title>
                    {!props.isInEditMode ?
                    <div>
                    <div>{info.date1}</div>
                    <div>{info.date2}</div>
                    <div>{info.date3}</div>
                    </div> :
                    <div>
                        <div><input type="date" value={info.date1} onChange={e => setInfo({...info, date1: e.target.value})} /></div>
                        <div><input type="date" value={info.date2} onChange={e => setInfo({...info, date2: e.target.value})} /></div>
                        <div><input type="date" value={info.date3} onChange={e => setInfo({...info, date3: e.target.value})} /></div>
                    </div>
                    }
                </OneColumn>
            </ReviewsContainer>
            <Link to='/test'><MoreLink>See more Reviews</MoreLink></Link>
        </About>
    );
};