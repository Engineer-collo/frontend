import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const LoginForm = () => {
  const navigate = useNavigate();  // Initialize navigate hook

  // Define Yup validation schema for login
  const formSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  // Setup Formik for login
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((errorData) => {
              throw new Error(errorData.message || "Login failed");
            });
          }
        })
        .then((data) => {
          // You would typically store the token in localStorage or a cookie
          localStorage.setItem("authToken", data.token);
          console.log("Login successful:", data);
          //alert("Login successful!");
          // Redirect to the Home page after successful login
          navigate("/home");  // Redirect to /home (adjust if your Home page has a different route)
        })
        .catch((error) => {
          console.error("Error:", error);
         // alert("Something went wrong.");
        });
    },
  });

  return (
    <div className="bg-gray-500 text-white h-screen flex items-center justify-center">
      <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
        <h1 className=" text-center">User Login Form.</h1>

        <label>Email</label>
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="ml-9 mt-5 p-2 border border-gray-300 rounded"
        />
        <p className="text-red-400 italic text-sm">{formik.errors.email}</p>

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="ml-2 mt-5 p-2 border border-gray-300 rounded"
        />
        <p className="text-red-400 italic text-sm">{formik.errors.password}</p>

        <button type="submit" className="mt-5 bg-purple-700 w-full ml-2 text-white rounded p-1">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

