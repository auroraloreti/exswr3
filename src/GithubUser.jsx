import React from 'react';
import useGithubUser from '../hooks/useGithubUser';

const GithubUser = ({ username }) => {
  const { user, loading, error } = useGithubUser(username);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="github-user">
      <h3>{user.login}</h3>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} width={50} height={50} />
      <p>{user.bio}</p>
    </div>
  );
};

export default GithubUser;