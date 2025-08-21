import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FieldsetInput from "../Component/Fieldsetinput";


export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      setError("No user found. Please signup first.");
      return;
    }

    if (
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      setError("");
      alert("Login successful ✅");
      navigate("/account"); // go to account page
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-80 bg-gray-50 shadow-md rounded-lg p-6">
        <h2 className="text-lg font-bold">Signin to your PopX account</h2>
        <p className="text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email */}
          <FieldsetInput
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          {/* Password */}
          <FieldsetInput
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
