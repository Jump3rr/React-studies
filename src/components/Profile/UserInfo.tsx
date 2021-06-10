import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import {ISingleUser} from '../../entities/users';
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

export const UserInfo: FC<ISingleUser> = (props) => {
    const [isInEditMode, editPage] = useState(false);

    const [user, setUser] = useState({
        firstName: props?.firstName,
        lastName: props?.lastName,
        picture: props?.picture,
        email: props?.email
    })

    return (
        <div>
            <Options>Message | Create a request | Add to a cluster | X</Options>
            <About> 
                <img src={user.picture} alt=""/>
                <AboutUser>
                    { isInEditMode 
                        ?   (
                            <span>
                            <input type='text' value={user.firstName} placeholder="First name" onChange={e => setUser({...user, firstName: e.target.value})} />
                            <input type='text' value={user.lastName} placeholder="Last name" onChange={e => setUser({...user, lastName: e.target.value})} />
                            </span>
                        )
                    :   <span>{user.firstName} {user.lastName}
                    <div>LOCATION</div></span>
                    }
                </AboutUser>
                <Contact>
                    <div onClick={()=> {return editPage(!isInEditMode)}}>EDIT</div>
                    {isInEditMode ? (
                    <div>
                        <input type='text' value={user.email} placeholder="E-mail" onChange={e => setUser({...user, email: e.target.value})} />
                    </div>
                    )
                    :<div>
                        <div>{user.email}</div>
                        <div>Phone</div>
                    </div>
                    }
                </Contact>
            </About>
        </div>
    );
};