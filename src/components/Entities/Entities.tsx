import { FC, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { IState } from '../../reducers';

import { OneEntity } from './OneEntity';
import { useSelector } from 'react-redux';
import { IPhotosReducer } from '../../reducers/photosReducer';
import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import { IPhoto } from '../../entities/photos';
import { SearchInput } from '../common/SearchInput';
import {Filters} from './Filters';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import {VerticalLine} from '../common/verticalLine';

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
    margin-bottom: 10px;
    & > div {
        margin: 0 10px 0 10px;

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;
const Views = styled.span`
    border-style: solid;
    border-width: 1px;
    padding: 5px;
    &:hover {
        background-color: ${Colors.lightblue};
        cursor: pointer;
    }
    &:active {
        background-color: ${Colors.blue};
    }
`;
const SelectFirst = styled.select`
    background-color: ${Colors.lightblue};
    border-color: ${Colors.lightblue};
    color: ${Colors.blue};
    background-image: url('../media/icons/target.png');
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: 15%;
    padding: 5px 0px 5px 25px;
    border-radius: 7px;
`;
const SelectSecond = styled.select`
    border-color: ${Colors.blue};
    color: ${Colors.blue};
    background-image: url('../media/icons/followed.png');
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: 8%;
    padding: 5px 0px 5px 25px;
    border-radius: 3px;
`;

export const Entities: FC = () => {
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => ({
        ...globalState.photos,
    }));
    const [isMosaicView, setView] = useState(true);
    const [InputText, setInputText] = useState<string>('');
    const [showFilters, setShowFilters] = useState(false);
    const [copied, setCopied] = useState(false);
    const handleFullScreen = useFullScreenHandle();

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const photosTrimmed = [];

    for(let i=0; i<40; i++) {
        photosTrimmed?.push(photosList?.[i])
    }

    const [currentList] = useState(photosTrimmed);

    const FilterEntities = (list: IPhoto[], filter: string) => {
        let filtered: IPhoto[] = [];
        list?.map((el:IPhoto) => {
            return (el?.title?.toLowerCase().includes(filter?.toLowerCase()) &&                
                filtered.push(el)
                )
            }
        )
        return filtered;
    }

    const ShareURL = () => {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
      }

    const [isSorted, setSort] = useState(false);

    const SortArray = () => {
        if (isSorted === false) {
            setSort(true);
            return currentList?.sort((a, b) => 
            b?.title?.localeCompare(a?.title));
        }
        else {
            setSort(false);
            return currentList?.sort((a, b) => 
            a?.title?.localeCompare(b?.title));
        }
    }

    return (
        <FullScreen handle={handleFullScreen}>
        <Wrapper2>
            <TopEntitiesElement>
                <div>
                    <span style={{fontWeight: 'bold', fontSize: '20px', marginRight: '10px'}}>Entities</span>
                    <span> <img src='../media/icons/cog.png' alt="" /></span>
                </div>
                <div>
                    <Views onClick={() => {return (setView(true))}}><img src='../media/icons/mosaic.png' alt="" /> Mosaic</Views>
                    <Views onClick={() => {return (setView(false))}}><img src='../media/icons/list.png' alt="" /></Views>
                </div>
            </TopEntitiesElement>
            <EntitiesMenu>
                <EntitiesOptions>
                    <SelectFirst>
                        <option>All</option>
                        <option>My</option>
                    </SelectFirst>
                    <div className="item"><img src='../media/icons/3-dots.png' alt="" /></div>
                    <VerticalLine />
                    <div onClick={SortArray}><img src='../media/icons/sort.png' alt="" /> Sort</div>
                    <div onClick={() => {return (setShowFilters(prevState => !prevState))}}><img src='../media/icons/filter.png' alt="" /> Filters</div>
                    <VerticalLine />
                    <div onClick={handleFullScreen.enter}><img src='../media/icons/fullscreen.png' alt="" /></div>
                    <VerticalLine />
                    <div onClick={ShareURL}><img src='../media/icons/share.png' alt="" /> Share</div>
                </EntitiesOptions>
                <EntitiesOptions>
                    <input type="text" value={InputText} onChange={inputHandler} placeholder="Search..." />
                    <VerticalLine />
                    <SelectSecond>
                        <option>Followed</option>
                        <option>My</option>
                    </SelectSecond>
                </EntitiesOptions>
            </EntitiesMenu>
            {showFilters &&
            <Filters />
            }
            {photosList.length>0 && 
            (
            isMosaicView ?
                <EntitiesElementsMosaic>               
                    {(FilterEntities(currentList, InputText)).map((el:any) => {
                        return (<OneEntity
                            key={el.url}
                            src={el.url}
                            title={el.title} 
                            />)
                    })}
                </EntitiesElementsMosaic>:
                <EntitiesElementsList>
                    {(FilterEntities(currentList, InputText)).map((el:any) => {
                        return (<OneEntity
                            key={el.url}
                            src={el.url}
                            title={el.title} 
                            />)
                    })}
                </EntitiesElementsList>
            )
            }
        </Wrapper2>
        </FullScreen>
    );
};