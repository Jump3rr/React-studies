import React, {FC, useState, ChangeEvent} from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPostReducer } from '../../reducers/postsReducer';
import styled from 'styled-components';
import '../../App.css';
import {Colors} from '../../styledHelpers/Colors';
import { ISinglePost } from '../../entities/posts';
import {PageElements} from '../../styledHelpers/Components';
import { OnePost } from '../../styledHelpers/Components';
import {PostsHolder} from '../../styledHelpers/Components'
import { TopElements } from '../../styledHelpers/Components';
import { SelectStyled } from '../../styledHelpers/Components';

const Wrapper2 = styled(PageElements)`
  height: auto;
  background-color: ${Colors.background};
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  div {
    padding: 5px 10px 5px 10px;
    box-shadow: 2px 2px ${Colors.grey};
    cursor: pointer;
  }
  #all {
    background-color: rgba(39, 134, 168, 0.2);
    color: rgba(39, 134, 168, 1);
  }
  #sas {
    background-color: rgba(38, 163, 0, 0.2);
    color: rgba(38, 163, 0, 1);
  }
  #sarl {
    background-color: rgba(0, 199, 179, 0.2);
    color: rgba(0, 199, 179, 1);
  }
  #secondary {
    background-color: rgba(209, 132, 0, 0.2);
    color: rgba(209, 132, 0, 1);
  }
  #communities {
    background-color: rgba(51, 51, 51, 0.2);
    color: rgba(51, 51, 51, 1);
  }
  #poa {
    background-color: rgba(128, 128, 128, 0.2);
    color: rgba(128, 128, 128, 1);
  }
  #survey {
    background-color: ${Colors.white};
    color: ${Colors.dark};
  }
  #dots {
    background-color: ${Colors.white};
    color: ${Colors.dark};
  }
`;



export const LatestUpdates: FC = () => {
  const { postsList } = useSelector<IState, IPostReducer>(globalState => ({
    ...globalState.posts,
}));

const [InputText, setInputText] = useState<string>("");

const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
}

const postsArray: ISinglePost[] = [];

const [pageNumber, setPageNumber] = useState(0)
const postsPerPage = 5;
const pagesVisited = pageNumber * postsPerPage;

postsList?.map(post => {
    let title: string = '';
    post?.tags?.map((el) => {
        if(el?.toLocaleLowerCase().includes(InputText?.toLowerCase())) {
            title = title+el;
        }
    })
    if(title?.toLocaleLowerCase().includes(InputText?.toLowerCase())) {
        postsArray.push(post)
    }
})

const displayPosts = () =>
    postsArray.slice(pagesVisited, pagesVisited + postsPerPage).map(el => {
    let date = new Date(el?.publishDate).toLocaleString();
    return (
        <OnePost key={el?.publishDate}>
        <h3>{el?.tags}</h3>
        <div>{el?.text}</div>
        <div>{el?.owner.firstName} {el?.owner.lastName}, {date}</div>
        </OnePost>
    )
})

const PageCount = Math.ceil(postsArray?.length/postsPerPage);

const ChangePage = ({selected}:any) => {
  setPageNumber(selected)
};

return (
  <div>
    <Wrapper2>
      <TopElements>
        <div>
          <h2 style={{ textAlign: "left", marginLeft: "2vw" }}>
            Latest updates
          </h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Filter by title..."
            value={InputText}
            onChange={inputHandler}
          />
          <SelectStyled>
            <option>Followed</option>
            <option>My</option>
          </SelectStyled>
        </div>
      </TopElements>
      <FilterRow>
        <div id="all">All</div>
        <div id="sas">SAS</div>
        <div id="sarl">SARL</div>
        <div id="secondary">Secondary business</div>
        <div id="communities">Communities</div>
        <div id="poa">POA</div>
        <div id="survey">Survey</div>
        <div id="dots">...</div>
      </FilterRow>
      <PostsHolder>
        {displayPosts()}
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={PageCount}
          onPageChange={ChangePage}
          containerClassName={"paginationBttns"}
          previousClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
        />
      </PostsHolder>
    </Wrapper2>
  </div>
);

}
