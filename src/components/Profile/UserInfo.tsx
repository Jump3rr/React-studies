import { FC, useState } from 'react';
import styled from 'styled-components';
import {IFullUser} from '../../entities/fullUser';

const Options = styled.span`
    float: right;
    display: flex;
    justify-content: space-between;
    width: 50%;
`;
const About = styled.div`
    display: inline-flex;
    float: center;
    margin-top: 20px;
    width: 100%;
    padding-left: 3%;
`;
const Contact = styled.div`
    text-align: right;
    align-items: right;
    display: inline-block;
    width:100%;
    padding-right: 3%;
`;
const AboutUser = styled.span`
    width: 50%;
    text-align: left;
`;
const ProfilePicture = styled.img`
    border-radius: 50%;
    width: 80%;
`;
const TopOptions = styled.span`
    cursor: pointer;
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
    });

    return (
        <div>
            <Options>
                <TopOptions><img src='../media/icons/message.png' alt="" /> Message </TopOptions>
                <TopOptions><img src='../media/icons/request.png' alt="" /> Create a request</TopOptions>
                <TopOptions><img src='../media/icons/workCluster.png' alt="" /> Add to a cluster</TopOptions>
                <TopOptions><img src='../media/icons/x.png' alt="" /></TopOptions>
            </Options>
            {user.lastName !== '' &&
            <About> 
                <div>
                <ProfilePicture src={user.picture} alt=""/>
                <div style={{cursor:"pointer"}}>See profile</div>
                </div>
                <AboutUser>
                    { isInEditMode 
                        ?   (
                            <span>
                            <input type='text' value={user.firstName} placeholder="First name" onChange={e => setUser({...user, firstName: e.target.value})} />
                            <input type='text' value={user.lastName} placeholder="Last name" onChange={e => setUser({...user, lastName: e.target.value})} />
                            <input type='text' value={user.location.city} placeholder="City" onChange={e => setUser({...user, city: e.target.value})} />
                            </span>
                        )
                    :   <span style={{fontWeight: "bold"}}>{user.firstName} {user.lastName}
                    <div>{user.location.city}</div></span>
                    }
                </AboutUser>
                <Contact>
                    <div onClick={()=> {return editPage(!isInEditMode)}} style={{cursor:"pointer"}}><img src='../media/icons/edit.png' alt="" /></div>
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