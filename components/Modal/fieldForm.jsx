import React from "react";

function FieldForm({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  isRequired=true,
  disabled = false,
}) {
  return (
    <div className="row">
      <label className="text-[16px] font-semibold mb-2 block">
        {label}
        {isRequired &&<span className="text-red-500">*</span>}
      </label>
      <input
        className="form-control outline-none py-2 pl-1 h-[35px] border-b-[2px] border-[#ccc] w-full"
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}

export default FieldForm;
