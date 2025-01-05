import { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css'

const ContactForm =() => {
     const handleSubmit = (values, actions) => {
     actions.resetForm();
      };
const registerSchema = Yup.object().shape({
  username: Yup.string().required().min(3).max(20),
  number: Yup.string().required().min(3).max(20),
})
return (
    <div className={s.formWrapper}>
    <Formik 
    onSubmit={handleSubmit} 
    initialValues={
      {username: '',
       number: ''
              }
            }
    validationSchema = {registerSchema}    
            >
        <Form className={s.form}>
        <label className={s.label}>
                <span>Name</span>
                <Field className={s.input} type="text" name="username"/>
                <ErrorMessage name="username" className={s.error} component="div" />
            </label>
            <label className={s.label}>
                <span>Number</span>
                <Field className={s.input} type="text" name="number"/>
                <ErrorMessage name="number" className={s.error} component="div" />
            </label>
            
            <button className={s.button} type="submit">Submit</button>                    
        </Form>
      </Formik>
    </div>
)
}

export default ContactForm;