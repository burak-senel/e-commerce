import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { AxiosInstance } from "../axios/axios";

function SignUpPage() {
  const { handleSubmit, control, errors, formState, watch } = useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosInstance = AxiosInstance();

  useEffect(() => {
    // Fetch roles on component mount
    fetchRoles();
  }, []);
  const instance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });

  const fetchRoles = async () => {
    try {
      const response = await axiosInstance.get("/roles");
      setRoles(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      // Make POST request to /signup endpoint
      // Redirect on successful submission
      // Assuming you have a method to handle redirection
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          }}
          render={({ field }) => <input {...field} />}
        />
        {errors?.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>Email:</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email address" },
          }}
          render={({ field }) => <input {...field} />}
        />
        {errors?.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Password:</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            validate: (value) =>
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                value
              ) ||
              "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
          }}
          render={({ field }) => <input type="password" {...field} />}
        />
        {errors?.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          }}
          render={({ field }) => <input type="password" {...field} />}
        />
        {errors?.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>

      <div>
        <label>Role:</label>
        <Controller
          name="role_id"
          control={control}
          rules={{ required: "Role is required" }}
          render={({ field }) => (
            <select {...field}>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          )}
        />
        {errors?.role_id && <span>{errors.role_id.message}</span>}
      </div>

      {watch("role_id") === "2  " && (
        <>
          <div>
            <label>Store Name:</label>
            <Controller
              name="store.name"
              control={control}
              rules={{
                required: "Store name is required",
                minLength: {
                  value: 3,
                  message: "Store name must be at least 3 characters",
                },
              }}
              render={({ field }) => <input {...field} />}
            />
            {errors.store?.name && <span>{errors.store.name.message}</span>}
          </div>

          <div>
            <label>Store Phone:</label>
            <Controller
              name="store.phone"
              control={control}
              rules={{
                required: "Store phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/, // Assuming 10 digits for Turkey phone numbers
                  message: "Invalid phone number",
                },
              }}
              render={({ field }) => <input {...field} />}
            />
            {errors.store?.phone && <span>{errors.store.phone.message}</span>}
          </div>

          <div>
            <label>Store Tax ID:</label>
            <Controller
              name="store.tax_no"
              control={control}
              rules={{
                required: "Tax ID is required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/, // Assuming the pattern "TXXXXVXXXXXX"
                  message: "Invalid tax ID format",
                },
              }}
              render={({ field }) => <input {...field} />}
            />
            {errors.store?.tax_no && <span>{errors.store.tax_no.message}</span>}
          </div>

          <div>
            <label>Store Bank Account:</label>
            <Controller
              name="store.bank_account"
              control={control}
              rules={{
                required: "Bank account is required",
                pattern: {
                  value: /^TR\d{2}\d{4}\d{4}\d{4}\d{4}\d{4}\d{2}$/, // Assuming valid IBAN format for Turkey
                  message: "Invalid IBAN format",
                },
              }}
              render={({ field }) => <input {...field} />}
            />
            {errors.store?.bank_account && (
              <span>{errors.store.bank_account.message}</span>
            )}
          </div>
        </>
      )}

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
export default SignUpPage;
