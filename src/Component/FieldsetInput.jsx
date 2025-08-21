import React from "react";

const FieldsetInput = ({ label, type = "text", value, onChange, name }) => {
  return (
    <fieldset className="border border-gray-400 rounded-sm px-3 pb-2 focus-within:border-blue-500">
      <legend className="text-sm px-1 text-gray-600">{label}</legend>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full outline-none bg-transparent text-gray-800"
      />
    </fieldset>
  );
};

export default FieldsetInput;
