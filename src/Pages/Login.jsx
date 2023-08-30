import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import {Users} from "../constants/LocalDb.js"



const LoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const token = JSON.parse(localStorage.getItem("token"));
  const Navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
      ),
  });
  
  const handleSubmit = (values) => {
    const result = Users.find(
      (user) =>
        user.username === values.username && user.password === values.password
    );
    console.log(result)
    if (result) {
        const Ctoken = JSON.stringify({email:result.username,password:result?.password});
        localStorage.setItem("token",Ctoken)
      Swal.fire('Success!', 'Login successful', 'success');
      Navigate('/');
    } else {
      Swal.fire('Error', 'Invalid credentials', 'error');
    }
  };


  useEffect(()=>{
    if(token?.email && token?.password){
        Navigate("/")
    }
  },[Navigate,token])

  return (
    <section className='login'>
    <div className='wrap'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        
      >
        <Form className="p-4 bg-light border rounded set">
          <div className="mb-3"><h3> Login </h3>
            <label htmlFor="username" className="form-label">
       Email
            </label>
            <Field type="text" name="username" className="form-control" />
            <ErrorMessage name="username" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field type="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>
          <button type="submit" >
            Login
          </button>
        </Form>
      </Formik>
      </div>
    </section>
  );
};

export default LoginForm;
