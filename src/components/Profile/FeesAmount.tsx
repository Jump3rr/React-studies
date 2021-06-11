import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

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

interface IProps {
    isInEditMode?: Boolean;
}

export const FeesAmount: FC<IProps> = (props) => {
    const [info, setInfo] = useState({
        year1: '2019',
        cost1: 'CS 153',
        amount1: '3 500€',
        lawFirm1: 'Clifford chance',
        year2: '2018',
        cost2: 'CS 153',
        amount2: '9 500€',
        lawFirm2: 'Linklaters',
        year3: '2017',
        cost3: 'CS 47',
        amount3: '10 500€',
        lawFirm3: 'Linklaters',
        year4: '',
        cost4: 'CS 153',
        amount4: '18 500€',
        lawFirm4: 'Linklaters',
        year5: '',
        cost5: 'CS 32',
        amount5: '15 500€',
        lawFirm5: 'Linklaters',

    })

    return (
        <About>
            <span style={{fontWeight: 'bold'}}>Amount of fees</span>
            <ReviewsContainer> 
                <OneColumn>
                    <Title>Year</Title>
                    {!props.isInEditMode ?
                    <div>
                        <div>{info.year1}</div>
                        <div>{info.year2}</div>
                        <div>{info.year3}</div>
                        <div>{info.year4}</div>
                        <div>{info.year5}</div>
                    </div> :
                    <div>
                        <div><input type="number" value={info.year1} onChange={e => setInfo({...info, year1: e.target.value})} /></div>
                        <div><input type="number" value={info.year2} onChange={e => setInfo({...info, year2: e.target.value})} /></div>
                        <div><input type="number" value={info.year3} onChange={e => setInfo({...info, year3: e.target.value})} /></div>
                        <div><input type="number" value={info.year4} onChange={e => setInfo({...info, year4: e.target.value})} /></div>
                        <div><input type="number" value={info.year5} onChange={e => setInfo({...info, year5: e.target.value})} /></div>
                    </div>
                    }
                </OneColumn>
                <OneColumn>
                    <Title>Cost center</Title>
                    {!props.isInEditMode ?
                    <div>
                    <div>{info.cost1}</div>
                    <div>{info.cost2}</div>
                    <div>{info.cost3}</div>
                    <div>{info.cost4}</div>
                    <div>{info.cost5}</div>
                    </div> :
                    <div>
                        <div><input type="text" value={info.cost1} onChange={e => setInfo({...info, cost1: e.target.value})} /></div>
                        <div><input type="text" value={info.cost2} onChange={e => setInfo({...info, cost2: e.target.value})} /></div>
                        <div><input type="text" value={info.cost3} onChange={e => setInfo({...info, cost3: e.target.value})} /></div>
                        <div><input type="text" value={info.cost4} onChange={e => setInfo({...info, cost4: e.target.value})} /></div>
                        <div><input type="text" value={info.cost5} onChange={e => setInfo({...info, cost5: e.target.value})} /></div>
                    </div>
                    }
                </OneColumn>
                <OneColumn>
                    <Title>Total amount</Title>
                    {!props.isInEditMode ?
                    <div>
                    <div>{info.amount1}</div>
                    <div>{info.amount2}</div>
                    <div>{info.amount3}</div>
                    <div>{info.amount4}</div>
                    <div>{info.amount5}</div>
                    </div> :
                    <div>
                        <div><input type="text" value={info.amount1} onChange={e => setInfo({...info, amount1: e.target.value})} /></div>
                        <div><input type="text" value={info.amount2} onChange={e => setInfo({...info, amount2: e.target.value})} /></div>
                        <div><input type="text" value={info.amount3} onChange={e => setInfo({...info, amount3: e.target.value})} /></div>
                        <div><input type="text" value={info.amount4} onChange={e => setInfo({...info, amount4: e.target.value})} /></div>
                        <div><input type="text" value={info.amount5} onChange={e => setInfo({...info, amount5: e.target.value})} /></div>
                    </div>
                    }
                </OneColumn>
                <OneColumn>
                    <Title>Law firm</Title>
                    {!props.isInEditMode ?
                    <div>
                    <div>{info.lawFirm1}</div>
                    <div>{info.lawFirm2}</div>
                    <div>{info.lawFirm3}</div>
                    <div>{info.lawFirm4}</div>
                    <div>{info.lawFirm5}</div>
                    </div> :
                    <div>
                        <div><input type="text" value={info.lawFirm1} onChange={e => setInfo({...info, lawFirm1: e.target.value})} /></div>
                        <div><input type="text" value={info.lawFirm2} onChange={e => setInfo({...info, lawFirm2: e.target.value})} /></div>
                        <div><input type="text" value={info.lawFirm3} onChange={e => setInfo({...info, lawFirm3: e.target.value})} /></div>
                        <div><input type="text" value={info.lawFirm4} onChange={e => setInfo({...info, lawFirm4: e.target.value})} /></div>
                        <div><input type="text" value={info.lawFirm5} onChange={e => setInfo({...info, lawFirm5: e.target.value})} /></div>
                    </div>
                    }
                </OneColumn>
            </ReviewsContainer>
        </About>
    );
};