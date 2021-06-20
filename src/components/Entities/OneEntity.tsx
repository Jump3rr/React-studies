import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

const EntityImg = styled.img`
    width: 150px;
    height: 150px;
`;
const Entity = styled.div`
    display: flex;
    width: 100%;
    background-color: ${Colors.white};
    margin: 5px;
`;

interface IEntity {
    src: string;
    title: string;
}

export const OneEntity: FC<IEntity> = (props) => {
    return (
      <Entity>
        <EntityImg src={props.src} alt="" />
        <div>
          <h4>{props.title}</h4>
          <span>Description</span>
        </div>
      </Entity>
    );
}