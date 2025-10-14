import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Here you would send it to API or handle validation
  };

  return (
    <div className="flex items-center justify-center  bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {/* Email */}
        <div className="flex flex-col">
          <Label htmlFor="email" className="mb-2 text-gray-700">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <Label htmlFor="password" className="mb-2 text-gray-700">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2"
            required
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Log In
        </Button>

        <p className="text-center text-sm text-gray-500">
          Don't have an account? <a href="#" className="text-blue-600">Sign up</a>
        </p>
      </form>
    </div>
  );
}
