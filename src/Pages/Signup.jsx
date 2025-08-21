import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FieldsetInput from "../components/FieldsetInput";



export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(form));
    alert("Account created successfully!");
    navigate("/account");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-[400px] bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-xl font-bold">Create your PopX account</h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Full Name */}
          <FieldsetInput
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          {/* Phone */}
          <FieldsetInput
            label="Phone number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <FieldsetInput
            label="Email address"
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

          {/* Company */}
          <FieldsetInput
            label="Company name"
            name="company"
            value={form.company}
            onChange={handleChange}
          />

          {/* Agency Radio */}
          <div>
            <p className="text-sm font-medium text-purple-600 mb-1">Are you an Agency?*</p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.agency === "yes"}
                  onChange={handleChange}
                  className="text-purple-600 focus:ring-purple-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.agency === "no"}
                  onChange={handleChange}
                  className="text-purple-600 focus:ring-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
