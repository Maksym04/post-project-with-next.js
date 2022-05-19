import React, { useEffect, useState } from 'react';
import * as API from './../api/api';
import Error from '../components/error/error';
import PostForm from '../components/post-form/post-form';
import PostsList from '../components/posts-list/posts-list';
import styles from './posts-page.module.sass';

function PostsPage () {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function showAllPosts () {
      try {
        const response = await API.getPosts();
        setPosts(response.data);
      } catch (e) {
        setError(e);
      }
    }
    showAllPosts();
  }, []);

  const onSubmit = async (data, formikBag) => {
    try {
      await API.createPost(data);
      const newPosts = [data, ...posts];
      setPosts(newPosts);
      formikBag.resetForm();
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>Post Page</p>
      <PostForm onSubmit={onSubmit} />
      {error === null ? (
        <PostsList posts={posts} setPosts={setPosts} setError={setError} />
      ) : (
        <Error />
      )}
    </div>
  );
}

export default PostsPage;
