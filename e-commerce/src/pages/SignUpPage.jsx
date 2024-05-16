import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { AxiosInstance } from "../axios/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles, setRoles } from "../store/actions/UserActions";

const formInitialData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role_id: "3",
  store: {
    name: "",
    phone: "",
    tax_no: "",
    bank_account: "",
  },
};

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: formInitialData,
  });
  const [loading, setLoading] = useState(false);
  const axiosInstance = AxiosInstance();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roles = useSelector((store) => store.user.roles);

  useEffect(() => {
    dispatch(fetchRoles()); // fetchRoles fonksiyonunu çağırıyoruz
  }, []); // useEffect'i sadece bir kez çağırmak için boş bağımlılık dizisi kullanıyoruz

  const onSubmit = (data) => {
    delete data.confirmPassword;
    setLoading(true);
    axiosInstance
      .post("/signup", data)
      .then((res) => {
        toast.success(
          "You need to click link in email to activate your account!",
          { position: "top-right" }
        );
        setLoading(false);
        //Önceki sayfaya yönlendir.
        setTimeout(() => navigate(-1), 5000);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
        toast.error(
          "An error occurred while submitting the form. Please try again.",
          { position: "top-right" }
        );
      });
    console.log(data);
  };

  return (
    <div className="flex flex-col max-w-[1100px] mx-auto my-16 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-auto w-[800px] md:w-[300px] gap-3"
      >
        <label htmlFor="name" className="text-xl">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border rounded-md py-2 px-2 "
          placeholder="Enter your name"
          {...register("name", {
            required: "Name field cannot be empty.",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long.",
            },
          })}
        />
        <p className="text-red-500">{errors.name?.message}</p>

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
        <p className="text-red-500">{errors.email?.message}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="border rounded-md py-2 px-2"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password field cannot be empty.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message:
                "Password must contain at least one lowercase letter, one uppercase letter, and one number.",
            },
          })}
        />
        <p className="text-red-500">{errors.password?.message}</p>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="border rounded-md py-2 px-2"
          placeholder="Confirm your password"
          {...register("confirmPassword", {
            required: "Please confirm your password.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message:
                "Password must contain at least one lowercase letter, one uppercase letter, and one number.",
            },
            validate: (value) =>
              value === watch("password") || "Passwords do not match.",
          })}
        />
        <p className="text-red-500">{errors.confirmPassword?.message}</p>

        {/* rol mapleme. */}
        <label htmlFor="role_id">Choose your role</label>
        <select
          id="role_id"
          className="border rounded-md py-2  px-2"
          {...register("role_id")}
          value={watch("role_id") || "formInitialData.role_id"}
        >
          {roles.map((item) => {
            // Sadece 2 ve 3 numaralı rolleri göster
            if (item.id === 2 || item.id === 3) {
              return (
                <option value={item.id} id={item.id} key={item.id}>
                  {item.name}
                </option>
              );
            } else {
              return null; // Diğer rolleri gösterme
            }
          })}
        </select>

        {watch("role_id") === "2" && (
          <>
            <label htmlFor="storeName">Store Name</label>
            <input
              type="text"
              id="storeName"
              className="border rounded-md py-2  px-2"
              {...register("store.name", {
                required: "Store name field cannot be empty.",
                minLength: {
                  value: 3,
                  message: "Store name must be at least 3 characters long.",
                },
              })}
            />
            {errors.store?.name && (
              <span className="text-red-500">{errors.store?.name.message}</span>
            )}
            <label htmlFor="storePhone">Store Phone Number</label>
            <input
              type="text"
              id="storePhone"
              className="border rounded-md py-2  px-2"
              {...register("store.phone", {
                required: "Store phone number is required.",
                pattern: {
                  value: /^[0-9]{10}$/, // Assuming 10 digits for Turkey phone numbers
                  message: "Invalid phone number.",
                },
              })}
            />
            {errors.store?.phone && (
              <span className="text-red-500">
                {errors.store?.phone.message}
              </span>
            )}

            <label htmlFor="store.tax">Store Tax ID</label>
            <input
              type="text"
              id="storeTax"
              className="border rounded-md py-2  px-2"
              {...register("store.tax_no", {
                required: "Tax ID is required.",
                pattern: {
                  value: /^T\d{4}V\d{6}$/, // Assuming the pattern "TXXXXVXXXXXX"
                  message: "Invalid tax ID format.",
                },
              })}
            />
            {errors.store?.tax_no && (
              <span className="text-red-500">
                {errors.store?.tax_no.message}
              </span>
            )}

            <label htmlFor="storeIban">Store İban Numarası</label>
            <input
              type="text"
              id="storeIban"
              className="border rounded-md py-2  px-2"
              {...register("store.bank_account", {
                required: "IBAN is required.",
                pattern: {
                  value: /^TR\d{2}\d{4}\d{4}\d{4}\d{4}\d{4}\d{2}$/, // Assuming valid IBAN format for Turkey
                  message: "Invalid IBAN format.",
                },
              })}
            />
            {errors.store?.bank_account && (
              <span className="text-red-500">
                {errors.store?.bank_account.message}
              </span>
            )}
          </>
        )}
        <ToastContainer position="top-right" autoClose={7000} />
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-12 rounded-md bg-buttonblue text-white font-bold"
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignUpPage;
