import { FC, useState } from 'react';
import styled from 'styled-components';
import { IState } from '../../reducers';

import { OneEntity } from './OneEntity';
import { useSelector } from 'react-redux';
import { IPhotosReducer } from '../../reducers/photosReducer';
import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import { IPhoto } from '../../entities/photos';

const Wrapper2 = styled(PageElements)`
    height: auto;
    background-color: ${Colors.white};
`;
const EntitiesElementsMosaic = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fill, 370px);
    grid-auto-flow: row;
    grid-gap: 10px;
    justify-content: center;
    background-color: ${Colors.background};
`;
const EntitiesElementsList = styled.div`
    display: grid;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${Colors.background};
`;
const TopEntitiesElement = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const EntitiesMenu = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
`;
const EntitiesOptions = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Entities: FC = () => {
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => ({
        ...globalState.photos,
    }));
    const [isMosaicView, setView] = useState(true);

    const RenderEntities = (list:IPhoto[]) => {
        let elements = [];
        for(let i=0; i<40; i++) {
            elements.push(<OneEntity 
            src={list[i].url}
            title={list[i].title}
            />)
        }
        return elements;
    }

    return (
        <Wrapper2>
            <TopEntitiesElement>
                <div>
                    <span>Entities</span>
                    <span> SettingIcon</span>
                </div>
                <div>
                    <span onClick={() => {return (setView(true))}}>Mosaic</span>
                    <span onClick={() => {return (setView(false))}}>List</span>
                </div>
            </TopEntitiesElement>
            <EntitiesMenu>
                <EntitiesOptions>
                    <div>All</div>
                    <div>...</div>
                    <div>Sort</div>
                    <div>Filters</div>
                    <div>Fullscreen</div>
                    <div>Share</div>
                </EntitiesOptions>
                <EntitiesOptions>
                    <div>Search...</div>
                    <div>Followed</div>
                </EntitiesOptions>
            </EntitiesMenu>

            {isMosaicView ?
                <EntitiesElementsMosaic>
                    {photosList.length>0 &&
                        RenderEntities(photosList)
                    }
                </EntitiesElementsMosaic>:
                <EntitiesElementsList>
                    {photosList.length>0 &&
                        RenderEntities(photosList)
                    }
                </EntitiesElementsList>
            }
        </Wrapper2>
    );
};