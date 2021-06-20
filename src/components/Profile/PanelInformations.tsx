import { FC, useState } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

const About = styled.div`
    margin-top: 20px;
    width: 100%;
    height: auto;
    text-align: left;
    margin-left: 50px;
`;
const OneRow = styled.div`
    width:100%;
`;
const SelectedFile = styled.div`
    text-align: left;
    background-color: ${Colors.lightgrey};
    padding: 10px;
    width: 80%;
`;
const Title = styled.div`
  width: 50%;
  text-align: left;
  color: ${Colors.grey};
  margin: 10px 0 5px 0;
`;

interface IProps {
  isInEditMode?: Boolean;
}

export const PanelInformations: FC<IProps> = (props) => {
    const [info, setInfo] = useState({
        hourlyFee: '610€/hour (Negociated)',
        terms: 'Monthly 10k€ retainer - see with Jeanny Smith',
        file: 'Attachment_lorem-ipsum25425.jpg',
    })

    return (
        <div>
            <About> 
                <span style={{fontWeight: 'bold'}}>Panel informations</span>
                <OneRow>
                    <Title>Hourly fee</Title>
                    {
                    !props.isInEditMode ?
                    <div><span>{info.hourlyFee}</span></div> :
                    <input type="text" value={info.hourlyFee} onChange={e => setInfo({...info, hourlyFee: e.target.value})} />
                    }
                </OneRow>
                <OneRow>
                    <Title>Terms & conditions</Title>
                    {
                    !props.isInEditMode ?
                    <div>
                        <div>{info.terms}</div>
                        <SelectedFile>{info.file}</SelectedFile>
                    </div> :
                    <div>
                        <input type="text" value={info.terms} onChange={e => setInfo({...info, terms: e.target.value})} />
                        <input type="file" onChange={e =>{
                            if (!e.target.files) 
                                return; 
                            setInfo({...info, file:  e.target.files[0].name as string})} 
                        }/>
                    </div>
                    }
                </OneRow>
            </About>
        </div>
    );
};