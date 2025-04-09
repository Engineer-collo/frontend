
import { useFormik } from "formik";
import * as yup from "yup";

const SignupForm = () => {
  // Define Yup validation schema
  const formSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
  });

  // Setup Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      fetch("http://127.0.0.1:5000/signup", {
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
              throw new Error(errorData.message || "Signup failed");
            });
          }
        })
        .then((data) => {
          console.log("User created:", data);
          resetForm();
          alert("Signup successful!");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong.");
        });
    },
  });

  return (
    <div  className="bg-gray-500 text-white h-screen flex itemss-center justify-center">
    <form className=" w-full max-w-sm pt-20" onSubmit={formik.handleSubmit}>
      <h2 className="text-center">User Signup Form.</h2>

      <label>Username</label>
      <input
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        className="ml-6 mt-5 p-2 border border-gray-300 rounded"

      />
      <p className="text-red-400 italic text-sm">{formik.errors.username}</p>

      <label>Email</label>
      <input
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        className="ml-14 mt-5 p-2 border border-gray-300 rounded"

      />
      <p className="text-red-400 italic text-sm">{formik.errors.email}</p>

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        className="ml-7 mt-5 p-2 border border-gray-300 rounded"

      />
      <p className="text-red-400 italic text-sm">{formik.errors.password}</p>

      <label>First Name</label>
      <input
        name="first_name"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        className="ml-5 mt-5 p-2 border border-gray-300 rounded"

      />
      <p className="text-red-400 italic text-sm">{formik.errors.first_name}</p>

      <label>Last Name</label>
      <input
        name="last_name"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        className="ml-6 mt-5 p-2 border border-gray-300 rounded"

      />
      <p className="text-red-400 italic text-sm">{formik.errors.last_name}</p>

      <button type="submit" className="bg-purple-700 w-full ml-2 text-white rounded p-1 mt-2">Sign Up</button>
    </form>
    </div>
  );
};

export default SignupForm;
