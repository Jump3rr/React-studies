import React, {FC, useState, ChangeEvent} from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPostReducer } from '../../reducers/postsReducer';
import '../../App.css';
import { ISinglePost } from '../../entities/posts';
import { OnePost } from '../../styledHelpers/Components';
import {PostsHolder} from '../../styledHelpers/Components';
import { TopElements } from '../../styledHelpers/Components';
import { SelectStyled } from '../../styledHelpers/Components';


export const Resume:FC = () => {
  const { postsList } = useSelector<IState, IPostReducer>(globalState => ({
    ...globalState.posts,
}));
const [InputText, setInputText] = useState<string>('');

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

const PageCount = Math.ceil(postsArray.length/postsPerPage);

const ChangePage = ({selected}:any) => {
  setPageNumber(selected)
};

return (
  <div>
    <TopElements>
      <div>
        <h2 style={{ textAlign: "left", marginLeft: "2vw" }}>
          Resume your work
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
  </div>
);

}
