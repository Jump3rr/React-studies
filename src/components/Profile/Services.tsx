import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import {ISingleUser} from '../../entities/user';
import {IFullUser} from '../../entities/fullUser';
import {Colors} from '../../styledHelpers/Colors';
import { profile } from 'node:console';

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
const InternalUsers = styled.div`
    text-align: left;
    background-color: ${Colors.lightgrey};
    padding: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-around;
    margin: 2px 0 2px 0;
`;
const StyledImg = styled.img`
    border-radius: 50%;
    width: 20%;
    vertical-align: middle;
`;
const Title = styled.div`
    width: 50%;
    text-align: left;
    margin: 10px 0 5px 0;
`;

interface IProps {
    isInEditMode?: Boolean;
    user: ISingleUser[];
}

export const Services: FC<IProps> = (props) => {
    const [info, setInfo] = useState({
        about: 'Corporate M&A and international acquisitions',
    })
    const [profile, setProfile] = useState({
        idFirst: props.user[1]?.id,
        firstNameFirst: props.user[1]?.firstName,
        lastNameFirst: props.user[1]?.lastName,
        emailFirst: props.user[1]?.email,
        pictureFirst: props.user[1]?.picture,
        titleFirst: props.user[1]?.title,
        idSecond: props.user[2]?.id,
        firstNameSecond: props.user[2]?.firstName,
        lastNameSecond: props.user[2]?.lastName,
        emailSecond: props.user[2]?.email,
        pictureSecond: props.user[2]?.picture,
        titleSecond: props.user[2]?.title,
    })

    return (
        <div>
            <About> 
                <span style={{fontWeight: 'bold'}}>Services & projects</span>
                <OneRow>
                    {
                    !props.isInEditMode ?
                    <Title>{info.about}</Title> :
                    <input type="text" value={info.about} onChange={e => setInfo({...info, about: e.target.value})} />
                    }
                </OneRow>
                <span style={{fontWeight: 'bold'}}>Internal correspondants</span>
                <OneRow>
                    {
                    !props.isInEditMode ?
                    <div>
                        <InternalUsers>
                            <div><StyledImg src={profile.pictureFirst} alt=""/>
                            <span>{profile.firstNameFirst} {profile.lastNameFirst}</span></div>
                            <div>Message</div>
                            <div>Profile</div>
                        </InternalUsers>
                        <InternalUsers>
                            <div><StyledImg src={profile.pictureSecond} alt=""/>
                            <span>{profile.firstNameSecond} {profile.lastNameSecond}</span></div>
                            <div>Message</div>
                            <div>Profile</div>
                        </InternalUsers>
                    </div> :
                    <div>
                        <InternalUsers>
                            <div><StyledImg src={profile.pictureFirst} alt=""/></div>
                            <input type="text" value={profile.firstNameFirst} onChange={e => setProfile({...profile, firstNameFirst: e.target.value})} />
                            <input type="text" value={profile.lastNameFirst} onChange={e => setProfile({...profile, lastNameFirst: e.target.value})} />
                            <div>Message</div>
                            <div>Profile</div>
                        </InternalUsers>
                        <InternalUsers>
                            <div><StyledImg src={profile.pictureSecond} alt=""/></div>
                            <input type="text" value={profile.firstNameSecond} onChange={e => setProfile({...profile, firstNameSecond: e.target.value})} />
                            <input type="text" value={profile.lastNameSecond} onChange={e => setProfile({...profile, lastNameSecond: e.target.value})} />
                            <div>Message</div>
                            <div>Profile</div>
                        </InternalUsers>
                    </div>
                    }
                </OneRow>
            </About>
        </div>
    );
};