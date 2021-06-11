import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
// import { useDispatch } from 'react-redux';
// import { getUsers } from './actions/usersActions';
// import { getPosts } from './actions/postsActions';
// import { getFullUsers } from './actions/fullUsersActions';

// type GetUsers = ReturnType<typeof getUsers>;
// type GetPosts = ReturnType<typeof getPosts>;
// type GetFullUsers = ReturnType<typeof getFullUsers>;

function App() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch<GetUsers>(getUsers());
  //     dispatch<GetPosts>(getPosts());
  //     dispatch<GetFullUsers>(getFullUsers());
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"

        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
