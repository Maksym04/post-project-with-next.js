import React from 'react';
import Post from '../post/post';
import styles from './posts-list.module.sass';

const PostsList = ({ posts, setPosts, setError }) => {
  return (
    <ul className={styles.container}>
      {posts.map(({ id, title, body, userId }) => (
        <li className={styles.postsList} key={id}>
          <Post
            id={id}
            title={title}
            body={body}
            userId={userId}
            posts={posts}
            setPosts={setPosts}
            setError={setError}
          />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
