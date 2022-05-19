import React, { useCallback, useState } from 'react';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import * as API from './../../api/api';
import UpdatePostForm from '../update-post-form/update-post-form';
import styles from './post.module.sass';

const Post = ({ id, title, body, userId, posts, setPosts, setError }) => {
  const [openForm, setOpenForm] = useState(false);

  const onRemovePost = async () => {
    try {
      await API.deletePost(id);
      const newPosts = [...posts];
      newPosts.splice(
        newPosts.findIndex(p => p.id === id),
        1
      );
      setPosts(newPosts);
    } catch (e) {
      setError(e);
    }
  };

  const onOpenUpdatePost = useCallback(() => {
    setOpenForm(true);
  }, [setOpenForm]);

  const onEditPost = async data => {
    try {
      await API.updatePost(id, data);
      const newPosts = [...posts];
      const index = newPosts.findIndex(p => p.id === id);
      newPosts[index] = {
        ...newPosts[index],
        ...data,
      };
      setPosts(newPosts);
      setOpenForm(false);
    } catch (e) {
      setError(e);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key='1' icon={<EditOutlined />}>
        <Button type='text' onClick={onOpenUpdatePost}>
          update
        </Button>
      </Menu.Item>
      <Menu.Item key='2' icon={<DeleteOutlined />}>
        <Button type='text' onClick={onRemovePost}>
          delete
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Avatar
          size={56}
          src={`https://i.pravatar.cc/300?${userId}.png`}
          alt='user'
        />
      </div>
      <div className={styles.postContainer}>
        <div className={styles.detailsBlock}>
          <Dropdown.Button className={styles.detailsButton} overlay={menu} />
        </div>
        <div className={styles.postBlock}>
          {openForm ? (
            <UpdatePostForm
              onEditPost={onEditPost}
              title={title}
              body={body}
              setOpenForm={setOpenForm}
            />
          ) : (
            <>
              <p className={styles.title}>{title}</p>
              <p>{body}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
