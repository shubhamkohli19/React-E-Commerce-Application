import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./loginPage.css";

const LoginPage = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = (formData) => console.log(formData);


  return (
    <section className="align_center form_page">
      <form
        action=""
        className="authentication_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form_text_input"
              placeholder="Enter your name"
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors.name?.type === "required" && (
              <em className="form_errors">Please Enter Your Name</em>
            )}
            {errors.name?.type === "minLength" && (
              <em className="form_errors">Name should be 3 or more characters</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form_text_input"
              placeholder="Enter your Password"
              {...register("password")}
            />
            {errors.name?.type === "required" && (
              <em className="form_errors">Please Enter Your Password</em>
            )}
            {errors.name?.type === "minLength" && (
              <em className="form_errors">Password should be atleast 8 characters</em>
            )}
          </div>
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
