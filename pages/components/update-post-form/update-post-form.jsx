import React, { useCallback } from 'react';
import { Button } from 'antd';
import { Field, Form, Formik } from 'formik';
import styles from './update-post-form.module.sass';

const UpdatePostForm = ({ onEditPost, title, body, setOpenForm }) => {
  const initialPostValue = {
    title,
    body,
  };

  const onCancelUpdate = useCallback(() => {
    setOpenForm(false);
  }, [setOpenForm]);

  return (
    <Formik initialValues={initialPostValue} onSubmit={onEditPost}>
      {formikProps => (
        <Form className={styles.container}>
          <Field name='title'>
            {({ field }) => {
              return <textarea className={styles.input} {...field} />;
            }}
          </Field>
          <Field name='body'>
            {({ field }) => {
              return <textarea className={styles.input} {...field} />;
            }}
          </Field>
          <div className={styles.buttonContainer}>
            <Button type='primary' ghost size='small' htmlType='submit'>
              Update
            </Button>
            <Button
              type='primary'
              size='small'
              danger
              ghost
              onClick={onCancelUpdate}
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdatePostForm;
