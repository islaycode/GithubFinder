import React, { useState, useContext } from "react";
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';

const Search = () => {
  
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text,setText] = useState('');

  const onChange = (e) => setText(e.target.value );

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alertContext.setAlert("Please Enter something", "danger");
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          placeholder="Search Users"
          name="text"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search User"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
