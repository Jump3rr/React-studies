import React, {FC, useState} from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPostReducer } from '../../reducers/postsReducer';
import styled from 'styled-components';
import '../../App.css';
import {Colors} from '../../styledHelpers/Colors';


const PostsHolder = styled.div`
  display: inline-block;
  width: 96%;
`;

const OnePost = styled.div`
  width: 100%;
  height: 20%;
  background: ${Colors.white};
  border-radius: 10px;
  text-align: left;
  box-shadow: 1px 1px ${Colors.dark};
`;


export const Resume:FC = () => {
  const { postsList } = useSelector<IState, IPostReducer>(globalState => ({
    ...globalState.posts,
}));

const [pageNumber, setPageNumber] = useState(0)

const postsPerPage = 5;
const pagesVisited = pageNumber * postsPerPage;

const displayPosts = postsList.slice(pagesVisited, pagesVisited + postsPerPage).map(post => {
  return (
    <OnePost>
      <h3>{post?.tags}</h3>
      <div>{post?.text}</div>
      <div>{post?.owner.firstName} {post?.owner.lastName}, {post?.publishDate}</div>
    </OnePost>
  )
})

const PageCount = Math.ceil(postsList.length/postsPerPage);

const ChangePage = ({selected}:any) => {
  setPageNumber(selected)
};

return (
  <div>    
  <h2 style={{textAlign: "left", marginLeft: "2vw"}}>Resume your work</h2>
  <PostsHolder>
    {displayPosts}
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
)

}
