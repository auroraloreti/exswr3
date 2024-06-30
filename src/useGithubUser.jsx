import { useState, useSWR } from 'react';

const useGithubUser = (username) => {
  const url = `https://api.github.com/users/${username}`;

  const { data, error, isValidating, mutate } = useSWR(
    username ? url : null,
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return await response.json();
    },
    {
      revalidateOnFocus: true, 
    }
  );

  const loading = !data && !error && isValidating;

  const refetch = () => mutate(url); 

  return { user: data, loading, error, refetch };
};

export { useGithubUser };