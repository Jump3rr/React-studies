import { FC, useState } from 'react';
import styled from 'styled-components';

import { PageElements } from "../../styledHelpers/Components";
import {Colors} from '../../styledHelpers/Colors';

const Wrapper2 = styled(PageElements)`
    height: auto;
    background-color: ${Colors.lightgrey};
`;
const TopInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    color: ${Colors.dark};
`;
const WorkingElement = styled.div`
    margin: 20px 0 10px 0;
    display: grid;
    grid-template-columns:repeat(auto-fill, 300px);
    grid-auto-flow: row;
    grid-gap: 10px;
    justify-content: center;
`;
const OneElement = styled.div`
    background-color: white;
    text-align: left;
    box-shadow: 3px 5px #888888;
    border-radius: 10px;
    padding: 3px;
`;
const Hide = styled.h5`
    cursor: pointer;
`;
const StyledImg = styled.img`
    width: 50px;
`;

export const StartWorking: FC = () => {
    const [isHidden, setHidden] = useState(false);

    return (
      <Wrapper2>
        <TopInfo>
          <h5>Start working on corporate matters</h5>
          <Hide onClick={() => setHidden(!isHidden)}>Hide</Hide>
        </TopInfo>
        {!isHidden ? (
          <WorkingElement>
            <OneElement>
              <StyledImg src="./media/icons/entities.svg" alt="" />
              <h3>Explore your entities</h3>
              <div>
                Take a few minutes to look at the most importnant elements and
                specificities of your entities.
              </div>
            </OneElement>
            <OneElement>
              <StyledImg src="./media/icons/structure.svg" alt="" />
              <h3>Structure the ownership</h3>
              <div>
                Get a clear view of the ownership by looking at the relations
                between individuals and entities.
              </div>
            </OneElement>
            <OneElement>
              <StyledImg src="./media/icons/calendar.svg" alt="" />
              <h3>Define the calendar</h3>
              <div>
                Prepare future events by creating detailed plans around the life
                of your entity.
              </div>
            </OneElement>
          </WorkingElement>
        ) : (
          <div></div>
        )}
      </Wrapper2>
    );
};