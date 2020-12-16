import React from 'react';

import img from '../images/gatsby-icon.png';

const Input: React.FC<{ label: string; type: string; name?: string, placeholder: string }> = ({ label, type, name = label, placeholder }) => {
  return (
    <label className="mb-4 block">
      <span className="">{label}</span>
      <input name={name} type={type} className="outline-none border-2 px-4 py-1 rounded block" placeholder={placeholder} />
    </label>
  );
};

const IndexPage: React.FC<void> = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="h-16 flex items-center text-white px-4 mb-4 bg-gradient-to-br from-purple-500 to-indigo-700">
          <span className="inline-block">Hi</span>
        </div>
        <div className="m-4 mt-0">
          <Input label="Email" type="email" placeholder="me@example.com" />
          <Input label="Phone" type="text" placeholder="050000000" />
          <Input label="Name" type="text" placeholder="My name" />
        </div>
        <div className="sticky bottom-0 p-4 bg-white border-2 border-purple-200 bg-gradient-to-br to-pink-50 from-purple-100 mt-auto">
          <img src={img} alt="gatsby logo" className="w-10" />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
