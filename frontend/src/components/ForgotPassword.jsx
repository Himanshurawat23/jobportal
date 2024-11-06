import React, { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/forget_password`,email,{
        headers: {
          "Content-Type": "application/json"
      } ,withCredentials:true});
      setMessage(res.data.message);
    } catch (error) {
      setMessage(    error.response?.data?.message || "Error sending password reset email"
      );
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
