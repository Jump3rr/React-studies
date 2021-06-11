import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import {ISingleUser} from '../../entities/user';
import {IFullUser} from '../../entities/fullUser';
import {Colors} from '../../styledHelpers/Colors';

const Options = styled.span`
    float: right;
`;
const About = styled.div`
    display: inline-flex;
    margin-top: 20px;
    width: 100%;
`;
const Contact = styled.div`
    text-align: right;
    align-items: right;
    display: inline-block;
    width:100%;
`;
const AboutUser = styled.span`
    width: 50%;
    text-align: left;
`;

export const UserInfo: FC<IFullUser> = (props) => {
    const [isInEditMode, editPage] = useState(false);

    const [user, setUser] = useState({
        firstName: props?.firstName,
        lastName: props?.lastName,
        picture: props?.picture,
        email: props?.email,
        id: props?.id,
        title: props?.title,
        gender: props?.gender,
        dateOfBirth: props?.dateOfBirth,
        registerDate: props?.registerDate,
        phone: props?.phone,
        location: props?.location,
        city: props?.location.city,
        state: props?.location.state,
        street: props?.location.street,
        country: props?.location.country,
        timezone: props?.location.timezone,
        // location: {
        //     city: props?.location.city,
        //     state: props?.location.state,
        //     street: props?.location.street,
        //     country: props?.location.country,
        //     timezone: props?.location.timezone,
        // }
    })

    return (
        <div>
            <Options>Message | Create a request | Add to a cluster | X</Options>
            {user.firstName !== '' &&
            <About> 
                <img src={user.picture} alt=""/>
                <AboutUser>
                    { isInEditMode 
                        ?   (
                            <span>
                            <input type='text' value={user.firstName} placeholder="First name" onChange={e => setUser({...user, firstName: e.target.value})} />
                            <input type='text' value={user.lastName} placeholder="Last name" onChange={e => setUser({...user, lastName: e.target.value})} />
                            <input type='text' value={user.location.city} placeholder="City" onChange={e => setUser({...user, city: e.target.value})} />
                            </span>
                        )
                    :   <span>{user.firstName} {user.lastName}
                    <div>{user.location.city}</div></span>
                    }
                </AboutUser>
                <Contact>
                    <div onClick={()=> {return editPage(!isInEditMode)}}>EDIT</div>
                    {isInEditMode ? (
                    <div>
                        <input type='text' value={user.email} placeholder="E-mail" onChange={e => setUser({...user, email: e.target.value})} />
                        <input type='text' value={user.phone} placeholder="Phone" onChange={e => setUser({...user, phone: e.target.value})} />
                    </div>
                    )
                    :<div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                    </div>
                    }
                </Contact>
            </About>
            }
        </div>
    );
};