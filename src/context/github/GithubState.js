import React, { useReducer}  from 'react';

import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USERS,
  GET_REPOS
} from '../types';

const GithubState = props => {
  //the githubstate will include all our action
  const inistialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, inistialState);

  //Search Users

  // Get User

  //Get Repos

  //Clear users

  // Set Loading

  return <GithubContext.Provider 
  value={{
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading
  }}

>
   {props.children}
  </GithubContext.Provider>
};

export default GithubState;
