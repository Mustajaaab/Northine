import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Terms and Conditions</h1>
      <p>Here are the terms and conditions...</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back
      </button>
    </div>
  );
};

export default TermsAndConditions;
