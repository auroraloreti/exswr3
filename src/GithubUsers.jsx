import React, { useState } from 'react';
import GithubUser from './GithubUser';

const GithubUsers = () => {
  const [username, setUsername] = useState('');
  const [usernames, setUsernames] = useState([]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username && !usernames.includes(username)) {
      setUsernames([...usernames, username]);
      setUsername('');
    }
  };

  return (
    <div className="github-users">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      <div className="user-list">
        {usernames.map((uname) => (
          <GithubUser key={uname} username={uname} />
        ))}
      </div>
    </div>
  );
};

export default GithubUsers;