import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { userLogin } from "../store/actions/UserActions";

const formInitialData = {
  email: "",
  password: "",
};

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: formInitialData,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(userLogin(formData, navigate));
    console.log("Login Data:", formData);
  };

  return (
    <div className="flex max-w-[300px] mx-auto py-24">
      <ToastContainer position="top-right" autoClose={5000} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-3 "
      >
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border rounded-md py-2 px-2"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email field cannot be empty.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            })}
          />
        </div>
        <p className="text-red-500">{errors.email?.message}</p>

        <div className="flex flex-col w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border rounded-md py-2 px-2"
            placeholder="Enter your password"
            {...register("password", {})}
          />
        </div>
        <div className="flex w-full">
          <input
            type="checkbox"
            className="mr-2"
            id="rememberMe"
            {...register("rememberMe")}
          ></input>
          <label htmlFor="rememberMe"> Remember me?</label>
        </div>
        <button
          type="submit"
          className="py-3 px-12 rounded-md bg-buttonblue text-white font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
