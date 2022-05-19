import React from 'react';
import { Button } from 'antd';
import { Field, Form, Formik } from 'formik';
import styles from './post-form.module.sass';

const PostForm = ({ onSubmit }) => {
  const initialPostValue = {
    title: '',
    body: '',
    userId: 1,
  };

  const placeholderTitle = `Post's tittle`;
  const placeholderBody = `Post`;

  return (
    <Formik initialValues={initialPostValue} onSubmit={onSubmit}>
      {formikProps => (
        <Form className={styles.container}>
          <Field name='title'>
            {({ field }) => {
              return (
                <textarea
                  className={styles.postTitle}
                  {...field}
                  placeholder={placeholderTitle}
                />
              );
            }}
          </Field>
          <Field name='body'>
            {({ field }) => {
              return (
                <textarea
                  className={styles.postBody}
                  {...field}
                  placeholder={placeholderBody}
                />
              );
            }}
          </Field>
          <Button
            className={styles.submitButton}
            type='primary'
            htmlType='submit'
          >
            Tweet
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PostForm;
